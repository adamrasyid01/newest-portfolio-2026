import { IntroGate } from "@/features/portfolio/components/IntroGate";
import { PortfolioPage } from "@/features/portfolio/components/PortfolioPage";

export default function Home() {
  return (
    <IntroGate>
      <PortfolioPage />
    </IntroGate>
  );
}
