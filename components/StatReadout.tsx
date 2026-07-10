type Stat = {
  label: string;
  value: string;
};

export function StatReadout({ stats }: { stats: Stat[] }) {
  return (
    <div className="readout grid grid-cols-2 divide-x divide-y divide-white/5 rounded-lg sm:grid-cols-4 sm:divide-y-0">
      {stats.map((stat) => (
        <div key={stat.label} className="px-5 py-6 text-center sm:text-left">
          <div className="readout-digits text-2xl font-bold sm:text-3xl">{stat.value}</div>
          <div className="readout-label mt-1 text-[11px] uppercase">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
