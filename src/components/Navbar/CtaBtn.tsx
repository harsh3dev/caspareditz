import ShimmerButton from "@/components/magicui/shimmer-button";

export function CtaBtn() {
  return (
    <div className="z-10 flex md:min-h-[5rem] items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm sm:text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Book a Call
        </span>
      </ShimmerButton>
    </div>
  );
}
