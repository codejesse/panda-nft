import { CompaniesContainer, CompaniesWrapper } from "./CompanyStyles";

//move images to images file later
function Companies() {
    return (
        <CompaniesWrapper>
            <CompaniesContainer>
                <img src="/Binance-logo.png" width="206.9px" height="40px" alt="Binance" />
                <img src="/Trust-logo.png" width="206.9px" height="40px"alt="Trust" />
                <img src="/TokyoCrypto-logo.png"width="206.9px" height="40px" alt="TokyoCrypto" />
                <img src="/Metamask-logo.png" width="206.9px" height="40px" alt="Metamask" />
                <img src="/Coinbase-logo.png" width="206.9px" height="40px" alt="Coinbase" />
            </CompaniesContainer>
        </CompaniesWrapper>
    )
}
export default Companies;