export default function ProjectsLoading() {
  return (
    <div>
      <header className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-10 md:px-8">
          <div className="mono-label h-3 w-40 animate-pulse rounded-sm bg-lifted" />
          <div className="mt-6 h-10 w-[min(28rem,80%)] animate-pulse rounded-sm bg-lifted" />
          <div className="mt-5 h-4 w-[min(36rem,90%)] animate-pulse rounded-sm bg-raised" />
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-5 md:px-8" aria-hidden="true">
        <div className="flex flex-wrap gap-x-6 gap-y-2 border-y border-rule py-3">
          {[72, 64, 80, 88, 76, 96, 110].map((w, i) => (
            <div key={i} className="h-3 animate-pulse rounded-sm bg-lifted" style={{ width: w }} />
          ))}
        </div>
        <div className="divide-y divide-rule">
          {[0, 1].map((i) => (
            <div key={i} className={`grid items-center gap-8 py-14 lg:grid-cols-2 lg:gap-12`}>
              <div className={i % 2 === 1 ? "lg:order-2 space-y-4" : "space-y-4"}>
                <div className="h-3 w-48 animate-pulse rounded-sm bg-lifted" />
                <div className="h-8 w-64 animate-pulse rounded-sm bg-lifted" />
                <div className="h-4 w-full max-w-[46ch] animate-pulse rounded-sm bg-raised" />
                <div className="h-4 w-full max-w-[42ch] animate-pulse rounded-sm bg-raised" />
                <div className="flex gap-2 pt-2">
                  {[64, 72, 58].map((w, j) => (
                    <div key={j} className="h-9 animate-pulse rounded-sm border border-rule bg-transparent" style={{ width: w }} />
                  ))}
                </div>
              </div>
              <div className={`aspect-[400/260] animate-pulse rounded-sm border border-rule bg-raised/50 ${i % 2 === 1 ? "lg:order-1" : ""}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
