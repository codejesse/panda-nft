import { ViewMoreButton } from "../Auctions/AuctionStyles";
import { CtaText } from "../Navbar/NavStyles";
import { ArtistName, ArtistProfilePic, ArtistStats, CardImageHolder, FeaturedCard, FeaturedCardContainer, FeaturedHeader, FeaturedTitle, FeaturedWrapper, Stats } from "./FeaturedStyles";

//implement logic to map over this data when the data json file is created

function Featured() {
    return (
        <FeaturedWrapper>
            <FeaturedHeader>
                <FeaturedTitle>Featured Artists</FeaturedTitle>
                <ViewMoreButton><CtaText>View More</CtaText></ViewMoreButton>
            </FeaturedHeader>
            <FeaturedCardContainer>
                <FeaturedCard>
                    <CardImageHolder><img src="b1.png" alt="background" /></CardImageHolder>
                    <ArtistProfilePic><img src="Artist1.png" alt="artist-1"/></ArtistProfilePic>
                    <ArtistName>CryptoPunks</ArtistName>
                    <ArtistStats>
                        <Stats>818.2k</Stats>
                    </ArtistStats>
                </FeaturedCard>
                <FeaturedCard>
                <CardImageHolder><img src="b2.png" alt="background" /></CardImageHolder>
                    <ArtistProfilePic><img src="Artist2.png" alt="artist-2"/></ArtistProfilePic>
                    <ArtistName>CryptoPunks</ArtistName>
                    <ArtistStats>
                        <Stats>818.2k</Stats>
                    </ArtistStats>
                </FeaturedCard>
                <FeaturedCard>
                <CardImageHolder><img src="b3.png" alt="background" /></CardImageHolder>
                    <ArtistProfilePic><img src="Artist3.png" alt="artist-3"/></ArtistProfilePic>
                    <ArtistName>CryptoPunks</ArtistName>
                    <ArtistStats>
                        <Stats>818.2k</Stats>
                    </ArtistStats>
                </FeaturedCard>
                <FeaturedCard>
                <CardImageHolder><img src="b4.png" alt="background" /></CardImageHolder>
                    <ArtistProfilePic><img src="Artist4.png" alt="artist-4"/></ArtistProfilePic>
                    <ArtistName>CryptoPunks</ArtistName>
                    <ArtistStats>
                        <Stats>818.2k</Stats>
                    </ArtistStats>
                </FeaturedCard>
            </FeaturedCardContainer>
        </FeaturedWrapper>
    )
}
export default Featured;