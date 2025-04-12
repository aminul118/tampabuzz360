import { contactInfo, socialMedia } from "@/lib/constants/contactInfo";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="bg-[#205781] text-white p-8 space-y-8 w-full h-full flex flex-col justify-center">
      <div>
        <p className="text-3xl font-bold">Get in touch</p>
        <p>Say something to start a live chat!</p>
      </div>

      <div className="space-y-3">
        {contactInfo.map((info, i) => (
          <p key={i} className="flex items-center gap-3">
            <info.icon /> {info.text}
          </p>
        ))}
      </div>

      <div className="flex items-center gap-6">
        {socialMedia.map((item, i) => (
          <Link
            key={i}
            className="bg-red-400 p-2 rounded-full"
            href={item.url}
            target="_blank"
          >
            <item.icon />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
