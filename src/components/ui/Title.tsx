import React from "react";

type TitleType = {
  title: string;
  description?: string;
};

const Title = ({ title, description }: TitleType) => {
  return (
    <div className="pb-4 lg:pb-6 2xl:pb-12 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl lg:text-4xl font-bold text-[#1F5781]">{title}</h1>
      {description && <p className="mt-2">{description}</p>}
    </div>
  );
};

export default Title;
