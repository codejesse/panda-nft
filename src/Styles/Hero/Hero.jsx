import { CtaText } from "../Navbar/NavStyles";
import {
    HeroContainer, HeroWrapper, HeroDetails, HeroCta, GradientDiv, Chip,
    HeroTextHeader, HeroImages, HeroCard, HeroPara, HeroCard2, HeroImage, CardDetails, CardTitle, CardTitleText, CardBottomDetails, CreatorAvatar, CreatorNameWrapper, CreatorTitle, CreatorName, PriceWrapper, CurrentBid, PriceText, ButtonWrapper
} from "./HeroStyles";

// import Data from "../Data"

function Hero() {
    return (
        <HeroWrapper>
            <HeroContainer>
                <HeroDetails>
                    <HeroTextHeader>Discover a New Era of Crypto Currency</HeroTextHeader>
                    <HeroPara>Panda NFT is the primier marketplace for NFT, which are digital items you can truly own.
                        Digital items have existed for a long time, but never like this.</HeroPara>
                    <ButtonWrapper><HeroCta><CtaText>Get Started</CtaText></HeroCta></ButtonWrapper>
                </HeroDetails>
                <HeroImages>
                    <HeroCard>
                        <HeroImage>
                            <img src="/Header.png" alt="Header-1" style={{ width: "90%" }} />
                        </HeroImage>
                        <CardDetails>
                            <CardTitle><CardTitleText>"Rainbow Contemplates ...</CardTitleText><Chip></Chip></CardTitle>
                            <CardBottomDetails>
                                <CreatorAvatar />
                                <CreatorNameWrapper>
                                    <CreatorTitle>Creator</CreatorTitle>
                                    <CreatorName>SalvadorDali</CreatorName>
                                </CreatorNameWrapper>
                                <PriceWrapper>
                                    <CurrentBid>Current Bid</CurrentBid>
                                    <PriceText>4.99 ETH</PriceText>
                                </PriceWrapper>
                            </CardBottomDetails>
                        </CardDetails>
                    </HeroCard>
                    <HeroCard2>
                        <HeroImage>
                            <img src="/N1.png" alt="Header-1" style={{ width: "90%", borderRadius: "16px" }} />
                        </HeroImage>
                    </HeroCard2>
                </HeroImages>
            </HeroContainer>
        </HeroWrapper>
    )
}
export default Hero;