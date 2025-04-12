import teamMembers from "@/lib/constants/teamMembers";
import React from "react";
import Title from "../ui/Title";

// Dummy data for 3 members

const Team = () => {
  return (
    <div>
      <Title title="Our Team Members" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
        {teamMembers.map(
          ({ _id, name, designation, short_about, email, phone, photo }) => (
            <div key={_id} data-aos="fade-up">
              <div className="shadow-lg rounded-xl p-3 md:py-6 lg:p-6 relative flex flex-col h-full mt-6 bg-[#1F5781]">
                {/* Photo */}
                <div className="flex justify-center -mt-16 mb-4">
                  <img
                    className="rounded-full object-cover border-2 border-[#808BAF] w-24 bg-slate-100"
                    src={photo}
                    alt={`${name}'s photo`}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-between h-full text-white">
                  <div className="text-center">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <h2 className="font-semibold text-lg">{designation}</h2>
                  </div>

                  <div className="flex-1 mt-4">
                    <p>{short_about}</p>
                  </div>

                  <div className="mt-2">
                    {email && <p>E-mail: {email}</p>}
                    {phone && <p>Cell: {phone}</p>}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div> 
  );
};

export default Team;
