import styled from "styled-components";
import Navbar from "./Styles/Navbar/Navbar";
import Hero from "./Styles/Hero/Hero";
import Companies from "./Styles/Companies/Companies";
import About from "./Styles/About/About";


const BackgroundWrapper = styled.div`
  background-image: url("background.png");
  background-repeat: repeat;
  height: 300vh;
  width: 100%;
`;


function App() {
  return (
    <BackgroundWrapper>
      <Navbar />
      <Hero />
      <Companies />
      <About />
    </BackgroundWrapper>
  );
}

export default App;
