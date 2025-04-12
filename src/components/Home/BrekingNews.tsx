import Marquee from "react-fast-marquee";

const BrekingNews = () => {
  return (
    <div className="container mx-auto  bg-[#205781] text-white">
      <div className="flex gap-2">
        <p className="px-3 py-4 bg-black dark:bg-white/90 dark:text-black">
          Breaking
        </p>

        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </div>
  );
};

export default BrekingNews;
