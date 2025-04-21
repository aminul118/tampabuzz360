import Image from "next/image";
import teamMembers from "@/lib/constants/teamMembers";
import Title from "../ui/Title";

const Team = () => {
  return (
    <div>
      <Title title="Our Team Members" />
      <div className="grid mt-8 gap-20 md:grid-cols-2 lg:grid-cols-3 px-4">
        {teamMembers.map(({ _id, name, designation, short_about, photo }) => (
          <div key={_id} data-aos="fade-up">
            <div className="shadow-lg rounded-xl p-3 md:py-6 lg:p-6 relative flex flex-col h-full mt-6 bg-[#1F5781]">
              {/* Photo */}
              <div className="flex justify-center -mt-16 mb-4">
                <div className="rounded-full border-2 border-[#808BAF] w-24 h-24 bg-slate-100 overflow-hidden relative">
                  <Image
                    src={photo}
                    alt={`${name}'s photo`}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-between h-full text-white">
                <div className="text-center">
                  <h1 className="text-xl font-bold">{name}</h1>
                  <h2 className="font-semibold text-lg">{designation}</h2>
                </div>

                <div className="flex-1 mt-4">
                  <p className="text-white/90">{short_about}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
