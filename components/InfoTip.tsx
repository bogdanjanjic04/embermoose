"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "@phosphor-icons/react/dist/ssr";

type Props = {
  label: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
};

export default function InfoTip({ label, children, side = "top" }: Props) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <span
            tabIndex={0}
            className="inline-flex cursor-help items-center gap-1.5 outline-none focus-visible:outline-2 focus-visible:outline-focus"
          />
        }
        aria-label={label}
      >
        {children}
      </TooltipTrigger>
      <TooltipContent side={side} className="max-w-60 text-xs leading-relaxed">
        <span className="mr-1 inline-block align-middle">
          <Info size={11} weight="bold" aria-hidden />
        </span>
        <span className="align-middle">{label}</span>
      </TooltipContent>
    </Tooltip>
  );
}
