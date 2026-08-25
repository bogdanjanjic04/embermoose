import { asset } from "@/lib/assets";

type Props = {
  size?: number;
  className?: string;
  glitch?: boolean;
  large?: boolean;
  withBg?: boolean;
};

export default function MooseMark({
  size = 28,
  className = "",
  glitch = false,
  withBg = false,
}: Props) {
  return (
    <span
      className={`relative inline-block shrink-0 ${className} ${glitch ? "moose-mark" : ""}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(withBg ? "/images/brand/embermoose_small.svg" : "/images/brand/embermoose_small_nobackground.svg")}
        alt=""
        width={size}
        height={size}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
