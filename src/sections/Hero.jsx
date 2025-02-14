const Hero = () => {
  return (
    <section className="padding-desktop max-lg:padding-tablet max-sm:padding-mobile flex flex-col w-full h-auto bg-blue-200 items-center">
      <div
        class="text-center flex flex-col w-full h-auto py-16 max-sm:py-6 space-y-3 max-w-[500px] max-sm:max-w-full"
        aria-label="text-container"
      >
        <h1 class="max-sm:text-4xl font-extrabold text-main-black text-[60px] font-workSans w-full h-auto">
          Become a React Developer
        </h1>
        <p class="info-text w-full h-auto">
          Discover the perfect React job that aligns with your expertise and
          career goals. 🚀
        </p>
      </div>
    </section>
  );
};

export default Hero;
