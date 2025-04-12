import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";
import generateSEO from "@/lib/seo/seo";

export const metadata = generateSEO({
  title: " Careers - TampaBuzz360",
  description:
    "Explore exciting career opportunities at TampaBuzz360 – a fast-growing news portal delivering timely, impactful stories across Tampa and beyond. Join our team of passionate journalists, content creators, marketers, and developers shaping the future of digital media.",
  url: "https://tampabuzz360.com/careers",
  images: ["https://tampabuzz360.com/images/features/career.jpg"],
  author: "Syed Tajim Hossain",
  keywords:
    "TampaBuzz360 careers, news portal jobs Tampa, digital media careers, journalism jobs Tampa, content writer jobs, Tampa media hiring, TampaBuzz360 team, media job openings Florida, news reporting jobs, Tampa digital newsroom",
});

const CareersPage = () => {
  return (
    <Container>
      <Title title="No Career post found" />
    </Container>
  );
};

export default CareersPage;
