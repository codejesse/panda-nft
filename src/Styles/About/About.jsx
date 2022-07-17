import { AboutCard, AboutHeader, AboutIcon, AboutIconContainer, AboutWrapper, CardTitle, CardWrapper } from "./AboutStyles";


function About() {
    return (
        <AboutWrapper>
            <AboutHeader>Create And Sell Your NFTs</AboutHeader>
            <CardWrapper>
                <AboutCard>
                    <AboutIconContainer>
                        <AboutIcon></AboutIcon>
                        <CardTitle>Set Up Your Wallet</CardTitle>
                    </AboutIconContainer>
                </AboutCard>
                <AboutCard>
                    <AboutIconContainer>
                        <AboutIcon></AboutIcon>
                        <CardTitle>Add Your NFTs</CardTitle>
                    </AboutIconContainer>
                </AboutCard>
                <AboutCard>
                    <AboutIconContainer>
                        <AboutIcon></AboutIcon>
                        <CardTitle>List Them For Sale</CardTitle>
                    </AboutIconContainer>
                </AboutCard>
            </CardWrapper>
        </AboutWrapper>
    )
}
export default About;