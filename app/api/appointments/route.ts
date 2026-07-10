import { NextRequest, NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

const requiredFields = [
  "name",
  "phone",
  "email",
  "vehicleYear",
  "vehicleMake",
  "vehicleModel",
  "problem",
  "preferredDate",
  "preferredTime",
  "address",
];

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const missing = requiredFields.filter((field) => !body[field]);
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  if (!isSupabaseConfigured || !supabase) {
    // This is intentionally a loud, visible failure rather than a silent
    // "success" — losing an appointment request silently is worse than
    // showing the visitor an error and a phone number.
    console.error(
      "[appointments] Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
    return NextResponse.json(
      {
        error:
          "Online booking isn't fully connected yet. Please call us directly and we'll get you scheduled.",
      },
      { status: 503 }
    );
  }

  const { error } = await supabase.from("appointments").insert({
    name: body.name,
    phone: body.phone,
    email: body.email,
    vehicle_year: body.vehicleYear,
    vehicle_make: body.vehicleMake,
    vehicle_model: body.vehicleModel,
    problem: body.problem,
    preferred_date: body.preferredDate,
    preferred_time: body.preferredTime,
    address: body.address,
    notes: body.notes || null,
    status: "new",
  });

  if (error) {
    console.error("[appointments] Supabase insert failed:", error.message);
    return NextResponse.json(
      { error: "We couldn't save your request. Please call us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
