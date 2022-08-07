import styled from "styled-components";
import Navbar from "./Styles/Navbar/Navbar";
import Hero from "./Styles/Hero/Hero";
import Companies from "./Styles/Companies/Companies";
import About from "./Styles/About/About";
import Auctions from "./Styles/Auctions/Auctions";
import Featured from "./Styles/FeaturedArtists/Featured";
import HotSales from "./Styles/HotSales/HotSales";
import Prefooter from "./Styles/Prefooter/Prefooter";
import Footer from "./Styles/Footer/Footer";


const BackgroundWrapper = styled.div`
  background-image: url("background.png");
  background-repeat: repeat;
  background-size: cover;
  height: auto;
  width: auto;
  margin: 0;
  border: 1px solid black;
`;


function App() {
  return (
    <BackgroundWrapper>
      <Navbar />
      <Hero />
      <Companies />
      <About />
      {/* <Auctions /> */}
      <Featured />
      <HotSales />
      <Prefooter />
      <Footer />
    </BackgroundWrapper>
  );
}

export default App;
