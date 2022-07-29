import { CtaText } from "../Navbar/NavStyles";
import { AunctionHeader, AunctionsWrapper, AunctionTitle, ViewMoreButton } from "./AuctionStyles";


//implement logic to map over this data when the data json file is created

function Auctions() {
    return (
        <AunctionsWrapper>
            <AunctionHeader>
                <AunctionTitle>Live Auctions</AunctionTitle>
                <ViewMoreButton><CtaText>View More</CtaText></ViewMoreButton>
            </AunctionHeader>
        </AunctionsWrapper>
    )
}
export default Auctions;