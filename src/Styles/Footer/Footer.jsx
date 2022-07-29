import { FooterDetails, Footerpara, FooterWrapper, HyperLinks, HyperOne, HyperTitle, LeftDetails, LogoHolder, RightDetails } from "./FooterStyles";

//footer information must be mapped from data.js file

function Footer() {
    return (
        <FooterWrapper>
            <FooterDetails>
                <LeftDetails>
                    <LogoHolder>
                        <img src="Panda.png" alt="logo" width="40px" height="40px" />
                        <h3>Panda NFT</h3>
                    </LogoHolder>
                    <Footerpara>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).
                        Buy, sell, and discover exclusive digital items.</Footerpara>
                </LeftDetails>
                <RightDetails>
                    <HyperLinks>
                        <HyperOne>
                            <HyperTitle>Resources</HyperTitle>
                            <ul>
                                <p>Help Center</p>
                                <p>Platform Status</p>
                                <p>Partners</p>
                                <p>Gas-Free Marketplace</p>
                                <p>Blog</p>
                            </ul>
                        </HyperOne>
                        <HyperOne>
                            <HyperTitle>Company</HyperTitle>
                            <ul>
                                <p>Our Team</p>
                                <p>About Us</p>
                                <p>Contact Us</p>
                                <p>Careers</p>
                            </ul>
                        </HyperOne>
                        <HyperOne>
                            <HyperTitle>Contact</HyperTitle>
                            <ul>
                                <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                            </ul>
                        </HyperOne>
                    </HyperLinks>
                </RightDetails>
            </FooterDetails>
        </FooterWrapper>
    )
}
export default Footer;