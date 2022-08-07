import { ViewMoreButton } from "../Auctions/AuctionStyles";
import { CtaText } from "../Navbar/NavStyles";
import { Avatar, Bid, BottomCardDetails, ButtonsTray, CardImage, Creator, HotSalesHeader, HotSalesWrapper, NameTitle, NameWrapper, PriceDiv, SalesCard, SalesCardDetails, SalesCardWrapper, SalesChip, SalesPrice, SalesTitle, StoreButtons, Title, TitleText } from "./HotSalesStyles";

// time to use css grid for the Hot sales cards

function HotSales() {
    return (
        <HotSalesWrapper>
            <HotSalesHeader>
                <SalesTitle>Hot NFTs</SalesTitle>
                <ButtonsTray>
                    <StoreButtons>🎧 Music</StoreButtons>
                    <StoreButtons>🎨 Art</StoreButtons>
                    <StoreButtons>🏆 Sports</StoreButtons>
                    <StoreButtons>💻 Virtual</StoreButtons>
                    <StoreButtons>🎥 Videos</StoreButtons>
                    <StoreButtons>More</StoreButtons>
                </ButtonsTray>
            </HotSalesHeader>
            <SalesCardWrapper>
                <SalesCard>
                <CardImage><img src="N2.png" alt="Nft1" /></CardImage>
                    <SalesCardDetails>
                        <Title><TitleText>"Lamalamaspit..</TitleText><SalesChip></SalesChip></Title>
                        <BottomCardDetails>
                            <Avatar><img src="c1.png" alt="avatar" /></Avatar>
                            <NameWrapper>
                                <NameTitle>Creator</NameTitle>
                                <Creator>Mark</Creator>
                            </NameWrapper>
                            <PriceDiv>
                                <Bid>Current Bid</Bid>
                                <SalesPrice>4.99 ETH</SalesPrice>
                            </PriceDiv>
                        </BottomCardDetails>
                    </SalesCardDetails>
                </SalesCard>
                <SalesCard>
                    <CardImage><img src="N1.png" alt="Nft1" /></CardImage>
                    <SalesCardDetails>
                        <Title><TitleText>"Lamalamaspit..</TitleText><SalesChip></SalesChip></Title>
                        <BottomCardDetails>
                            <Avatar><img src="c2.png" alt="avatar" /></Avatar>
                            <NameWrapper>
                                <NameTitle>Creator</NameTitle>
                                <Creator>Mark</Creator>
                            </NameWrapper>
                            <PriceDiv>
                                <Bid>Current Bid</Bid>
                                <SalesPrice>4.99 ETH</SalesPrice>
                            </PriceDiv>
                        </BottomCardDetails>
                    </SalesCardDetails>
                </SalesCard>
                <SalesCard>
                <CardImage><img src="N3.png" alt="Nft1" /></CardImage>
                    <SalesCardDetails>
                        <Title><TitleText>"Lamalamaspit..</TitleText><SalesChip></SalesChip></Title>
                        <BottomCardDetails>
                            <Avatar><img src="c3.png" alt="avatar" /></Avatar>
                            <NameWrapper>
                                <NameTitle>Creator</NameTitle>
                                <Creator>Mark</Creator>
                            </NameWrapper>
                            <PriceDiv>
                                <Bid>Current Bid</Bid>
                                <SalesPrice>4.99 ETH</SalesPrice>
                            </PriceDiv>
                        </BottomCardDetails>
                    </SalesCardDetails>
                </SalesCard>
            </SalesCardWrapper>
            <ViewMoreButton><CtaText>View More</CtaText></ViewMoreButton>
        </HotSalesWrapper>
    )
}

export default HotSales;