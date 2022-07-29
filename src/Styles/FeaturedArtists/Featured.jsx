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
                    <CardImageHolder />
                    <ArtistProfilePic />
                    <ArtistName>CryptoPunks</ArtistName>
                    <ArtistStats>
                        <Stats>818.2k</Stats>
                    </ArtistStats>
                </FeaturedCard>
                <FeaturedCard>
                    <CardImageHolder />
                    <ArtistProfilePic />
                    <ArtistName>CryptoPunks</ArtistName>
                    <ArtistStats>
                        <Stats>818.2k</Stats>
                    </ArtistStats>
                </FeaturedCard>
                <FeaturedCard>
                    <CardImageHolder />
                    <ArtistProfilePic />
                    <ArtistName>CryptoPunks</ArtistName>
                    <ArtistStats>
                        <Stats>818.2k</Stats>
                    </ArtistStats>
                </FeaturedCard>
                <FeaturedCard>
                    <CardImageHolder />
                    <ArtistProfilePic />
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