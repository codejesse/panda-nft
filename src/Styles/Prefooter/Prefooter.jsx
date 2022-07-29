import { ParaWrapper, PrefooterButton, PrefooterButtonWrapper, PrefooterCard, PrefooterDetails, PrefooterHeader, Prefooterpara, PrefooterTitle, Prefooterwrapper } from "./PrefooterStyles";


function Prefooter() {
    return (
        <Prefooterwrapper>
            <PrefooterCard>
                <PrefooterDetails>
                    <PrefooterHeader>
                        <PrefooterTitle>Create Your Own NFTs</PrefooterTitle>
                    </PrefooterHeader>
                    <ParaWrapper>
                        <Prefooterpara>
                            We have a large scale group to support each other in this game,
                            Join us to get the news as soon as possible and follow our latest announcements!
                        </Prefooterpara>
                    </ParaWrapper>
                    <PrefooterButtonWrapper>
                        <PrefooterButton>Join Community Now</PrefooterButton>
                    </PrefooterButtonWrapper>
                </PrefooterDetails>
            </PrefooterCard>
        </Prefooterwrapper>
    )
}
export default Prefooter;