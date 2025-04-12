import Container from "../ui/Container";
import Title from "../ui/Title";
import NewsCard from "./NewsCard";

const FeaturedStories = () => {
  return (
    <Container>
      <Title title="Featured Stories" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <NewsCard src="/images/features/1.jpg" alt="demo 1" />
        <NewsCard src="/images/features/2.webp" alt="demo 1" />
        <NewsCard src="/images/features/3.jpg" alt="demo 1" />
        <NewsCard src="/images/features/1.jpg" alt="demo 1" />
      </div>
    </Container>
  );
};

export default FeaturedStories;
