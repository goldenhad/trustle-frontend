function Hero() {
  return (
    <div className="max-w-[1512px] m-auto pt-24">
      <div className="py-5 pl-20 border-b border-b-grey-400 max-md:pl-4">
        <h1 className="text-sm font-medium font-secondary text-grey-700">
          Refund
        </h1>
      </div>
      <div className="relative before:absolute before:content-[' '] before:bg-[url(../src/assets/otherPages/hero.webp)] before:opacity-30 before:top-0 before:right-0 before:bottom-0 before:left-0 before:max-md:rounded-b-[48px] before:max-md:shadow-[0_0_0_1px_inset_#EAECF0] py-24 max-md:py-16 flex flex-col gap-6">
        <h1 className="font-primary font-medium text-5xl max-md:text-[32px] max-md:leading-[45px] tracking-[-1.2px] text-center text-grey-900 relative z-10">
          Refund Policy
        </h1>
      </div>
    </div>
  );
}

export default Hero;
