import Image from "next/image";

type Props = {
  size?: number;
  className?: string;
  glitch?: boolean;
  large?: boolean;
};

export default function MooseMark({
  size = 28,
  className = "",
  glitch = false,
  large = false,
}: Props) {
  return (
    <span
      className={`relative inline-block ${className} ${glitch ? "moose-mark" : ""}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image
        src="/images/brand/embermoose_small_nobackground.svg"
        alt=""
        width={size}
        height={size}
        priority={size > 100}
        className="h-full w-full object-contain"
      />
      {large && null}
    </span>
  );
}
