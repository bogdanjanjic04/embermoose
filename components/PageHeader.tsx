import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

type Props = {
  index: string;
  title: string;
  lede?: string;
  crumbs?: Crumb[];
  aside?: React.ReactNode;
};

export default function PageHeader({ index, title, lede, crumbs, aside }: Props) {
  return (
    <header className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-8 md:px-8 md:pb-16 md:pt-10">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mono-label text-faint">
              <span className="text-accent">{index}</span>
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.06] tracking-tight [overflow-wrap:anywhere]">
              {title}
            </h1>
            {lede && (
              <p className="mt-5 max-w-[58ch] text-md text-muted">{lede}</p>
            )}
          </div>
          {aside && <div className="lg:col-span-4 lg:justify-self-end">{aside}</div>}
        </div>
      </div>
    </header>
  );
}
