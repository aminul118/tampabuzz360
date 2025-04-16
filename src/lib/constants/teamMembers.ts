// Define the interface
interface ITeam {
  _id: string;
  name: string;
  designation: string;
  short_about: string;
  photo: string;
}

const teamMembers: ITeam[] = [
  {
    _id: "1",
    name: "Syed Tajim Hossain",
    designation: "Founder of Tampabuzz360",
    short_about:
      "TampaBuzz360 was founded by Tajim, a Florida-based college student graduating in 2025 with a degree in Business Analytics and Information Systems from St. Petersburg College. The site was created to highlight everything buzzing in Tampa Bay — from local news and hidden gems to smart lifestyle tips and community stories. Our mission is to keep Florida informed, inspired, and connected through real, relatable content.",
    photo: "/images/team/tajim.jpg",
  },
  {
    _id: "2",
    name: "M.D. mohaiminul Islam",
    designation: "UI/UX Designer",
    short_about:
      "Lead UI/UX Designer at TampaBuzz360. With a strong eye for detail and user experience, he’s responsible for designing clean, responsive, and engaging interfaces that bring the TampaBuzz360 vision to life. His work ensures that every visitor has a smooth and enjoyable experience across all devices.",
    photo: "/images/team/mohaiminul.jpg",
  },
  {
    _id: "3",
    name: "Raihan Kabir",
    designation: "Full Stack Developer",
    short_about:
      "Full Stack Developer . With a solid command of the MERN stack, TypeScript, and modern tools like Next.js, Aminul is responsible for building scalable, high-performance web applications that align with Tampabuzz360’s mission. From designing intuitive front-end interfaces to implementing robust backend systems, his work ensures a seamless, efficient, and optimized experience for users across all platforms.",
    photo: "/images/team/aminul.jpg",
  },
];

export default teamMembers;
