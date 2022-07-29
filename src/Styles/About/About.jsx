import { AboutCard, AboutHeader, AboutIcon, AboutIconContainer, AboutWrapper, CardPara, CardTitle, CardWrapper } from "./AboutStyles";


function About() {
    return (
        <AboutWrapper>
            <AboutHeader>Create And Sell Your NFTs</AboutHeader>
            <CardWrapper>
                <AboutCard>
                    <AboutIconContainer>
                        <AboutIcon></AboutIcon>
                        <CardTitle>Set Up Your Wallet</CardTitle>
                        <CardPara>Once you’ve set up your wallet of choice,
                            connect it to OpenSea by clicking
                            the wallet icon in the top right corner.</CardPara>
                    </AboutIconContainer>
                </AboutCard>
                <AboutCard>
                    <AboutIconContainer>
                        <AboutIcon></AboutIcon>
                        <CardTitle>Add Your NFTs</CardTitle>
                        <CardPara>Once you’ve set up your wallet of choice,
                            connect it to OpenSea by clicking
                            the wallet icon in the top right corner.</CardPara>
                    </AboutIconContainer>
                </AboutCard>
                <AboutCard>
                    <AboutIconContainer>
                        <AboutIcon></AboutIcon>
                        <CardTitle>List Them For Sale</CardTitle>
                        <CardPara>Once you’ve set up your wallet of choice,
                            connect it to OpenSea by clicking
                            the wallet icon in the top right corner.</CardPara>
                    </AboutIconContainer>
                </AboutCard>
            </CardWrapper>
        </AboutWrapper>
    )
}
export default About;