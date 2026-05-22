import { PortfolioPage } from './pages/PortfolioPage';
import { PORTFOLIO_DATA } from './data/portfolioData';

export default function App() {
  return (
    <PortfolioPage 
      heroImage={PORTFOLIO_DATA.heroImage}
      socialImages={PORTFOLIO_DATA.socialImages}
      menuImages={PORTFOLIO_DATA.menuImages}
      printedImages={PORTFOLIO_DATA.printedImages}
    />
  );
}