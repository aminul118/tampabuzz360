// Define the interface
interface ITeam {
  _id: string;
  name: string;
  designation: string;
  short_about: string;
  email: string;
  phone: string;
  photo: string;
}

const teamMembers: ITeam[] = [
  {
    _id: "1",
    name: "Md Aminul Islam",
    designation: "Full Stack Developer",
    short_about:
      "Passionate developer with experience in React, Next.js, and UI/UX design.",
    email: "aminul@example.com",
    phone: "+880123456789",
    photo: "/images/team/aminul.jpg",
  },
  {
    _id: "2",
    name: "Sarah Jahan",
    designation: "UI/UX Designer",
    short_about:
      "Creative designer specializing in clean, user-friendly interfaces.",
    email: "sarah@example.com",
    phone: "+8801987654321",
    photo: "/images/team/aminul.jpg",
  },
  {
    _id: "3",
    name: "Raihan Kabir",
    designation: "Full Stack Developer",
    short_about:
      "Skilled in building robust full-stack applications with MERN stack.",
    email: "raihan@example.com",
    phone: "+8801678901234",
    photo: "/images/team/aminul.jpg",
  },
];

export default teamMembers;
