"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { business } from "@/lib/business";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-charcoal/15 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-steel focus:border-torque focus:outline-none";

const labelClass = "mb-1.5 block font-body text-sm font-medium text-charcoal";

export function AppointmentForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const f = dict.booking.fields;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || dict.booking.genericError);
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : dict.booking.genericError);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-emerald-600" />
        <h3 className="font-display text-xl font-semibold text-charcoal">{dict.booking.successHeading}</h3>
        <p className="mt-2 text-sm text-steel-dark">
          {dict.booking.successText}{" "}
          <a href={business.phoneHref} className="font-semibold text-torque">
            {business.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            {f.name}
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="John Smith" />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            {f.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={inputClass}
            placeholder="(850) 555-0100"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          {f.email}
        </label>
        <input id="email" name="email" type="email" required className={inputClass} placeholder="you@email.com" />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label className={labelClass} htmlFor="vehicleYear">
            {f.vehicleYear}
          </label>
          <input id="vehicleYear" name="vehicleYear" required className={inputClass} placeholder="2018" />
        </div>
        <div>
          <label className={labelClass} htmlFor="vehicleMake">
            {f.vehicleMake}
          </label>
          <input id="vehicleMake" name="vehicleMake" required className={inputClass} placeholder="Toyota" />
        </div>
        <div>
          <label className={labelClass} htmlFor="vehicleModel">
            {f.vehicleModel}
          </label>
          <input id="vehicleModel" name="vehicleModel" required className={inputClass} placeholder="Camry" />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="problem">
          {f.problem}
        </label>
        <textarea
          id="problem"
          name="problem"
          required
          rows={3}
          className={inputClass}
          placeholder={f.problemPlaceholder}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="preferredDate">
            {f.preferredDate}
          </label>
          <input id="preferredDate" name="preferredDate" type="date" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="preferredTime">
            {f.preferredTime}
          </label>
          <input id="preferredTime" name="preferredTime" type="time" required className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="address">
          {f.address}
        </label>
        <input id="address" name="address" required className={inputClass} placeholder={f.addressPlaceholder} />
      </div>

      <div>
        <label className={labelClass} htmlFor="notes">
          {f.notes} <span className="font-normal text-steel">{f.notesOptional}</span>
        </label>
        <textarea id="notes" name="notes" rows={2} className={inputClass} placeholder={f.notesPlaceholder} />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          <div>
            <p>{errorMessage}</p>
            <p className="mt-1">
              {dict.booking.errorFallback}{" "}
              <a href={business.phoneHref} className="font-semibold underline">
                {business.phone}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-torque px-6 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-torque-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? dict.booking.submitting : dict.booking.submit}
      </button>
    </form>
  );
}
