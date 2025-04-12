import React from "react";
import Title from "../ui/Title";

const Vision = () => {
  return (
    <div>
      <Title title="All Things Good." />
      <ul className="flex gap-10">
        <li>
          <p className="text-4xl font-bold mb-3">Vision</p>
          To be the biggest cheerleader for all to thrive in our communities.
        </li>
        <li>
          <p className="text-4xl font-bold mb-3">Vision</p>
          Be a resource for our communities that shines a light on all things
          good by telling stories and bringing people together.
        </li>
      </ul>
    </div>
  );
};

export default Vision;
