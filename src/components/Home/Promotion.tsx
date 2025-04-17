import Container from "../ui/Container";
import getAllPromotions from "@/lib/data/getAllPromotions";
import PromotionSlider from "./PromotionSlider";

const Promotion = async () => {
  // Fetch only the homePage promotions from server
  const homePagePromos = await getAllPromotions("homePage");

  return (
    <Container>
      {/* Pass serializable data only */}
      <PromotionSlider promotions={homePagePromos} />
    </Container>
  );
};

export default Promotion;
