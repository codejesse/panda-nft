import styled from "styled-components";

export const HeroWrapper = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   margin: 3rem;
   padding-top: 1.5rem;
`;

export const HeroContainer = styled.div`
    display: flex;
    width: 95%;
    height: auto;
    @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
   }
`;

// export const GradientDiv = styled.div`
//    width: 638px;
//    height: 444.28px;
//    left: -313px;
//    top: -209px;
//    background: rgba(30, 80, 255, 0.75);
//    filter: blur(700px);  
// `;

export const HeroDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 50%;
    margin: auto;
    margin-left: -0.1rem;
    @media (max-width: 800px) {
        width: 100%;
        text-align: center;
    }
`;

export const HeroTextHeader = styled.h1`
    font-size: 56px;
    font-family: "Poppins", sans-serif;
    color: white;
    font-weight: 700;
    font-style: normal;
    line-height: 80px;
    @media (max-width: 1300px) {
        text-align: left;
    }
`;

export const HeroPara = styled.p`
    font-family: "Poppins", sans-serif;
    color: white;
    font-weight: 400;
    font-size: 16px;
    margin-top: -1rem;
    line-height: 32px;
    @media (max-width: 1300px) {
        text-align: left;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: inherit;
    width: 100%;
    @media (max-width: 800px) {
        justify-content: left;
    } 
`;

export const HeroCta = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 12px 16px;
    gap: 10px;
    width: 176px;
    height: 56px;
    background: #1E50FF;
    border-radius: 16px;
    border: 0;
    color: white;
    text-align: center;
    cursor: pointer;
    @media (max-width: 800px) {
        justify-content: center;
    }
`;

export const HeroImages = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    /* border: 2px solid blue; */
    margin: -1rem;
    @media (max-width: 800px) {
        padding-top: 2rem;
        margin: auto;
        width: 100%;
    }
`;

export const HeroCard = styled.div`
    width: 300px;
    height: 400px;
    background: #272D37;
    border-radius: 24px;
    @media (max-width: 800px) {
        margin: auto;
    }
`;

//for the top information in the hero card
export const CardDetails = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 10px;
    margin-top: -1px;
`;

// for the bottom information in the hero card
export const CardBottomDetails = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.22rem;
`;

export const CreatorAvatar = styled.div`
    width: 56px;
    height: 56px;
    left: 823px;
    top: 733px;
    background: url("panda.png");
    background-repeat: no-repeat;
    border-radius: 16px;
`;

export const CreatorNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -1rem;
`;

export const CreatorTitle = styled.p`
    font-size: 14px;
    color: #8F9CA9;
    font-family: sans-serif;
`;

export const CreatorName = styled.p`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 28px;
    color: #FFFFFF;
    margin-top: -1rem;
`;

//price text in card
export const PriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-top: -0.9rem;
`;

export const CurrentBid = styled.p`
    font-size: 14px;
    color: #8F9CA9;
    font-family: sans-serif;
`;

export const PriceText = styled.p`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 28px;
    color: #FFFFFF;
    margin-top: -1rem;
`;

export const CardTitle = styled.div`
    display: flex;
    flex-direction: row;
    font-family: sans-serif;
    color: white;
    justify-content: center;
`;

export const CardTitleText = styled.p`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 28px;
    color: #FFFFFF;
`;

export const Chip = styled.div`
    width: 59px;
    height: 29px;
    background: #1E50FF;
    border-radius: 8px;
    text-align: center;
    margin: auto;
`;

export const HeroImage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
    height: auto;
`

export const HeroCard2 = styled.div`
    width: 300px;
    height: 315px;  
    background: #272D37;
    border-radius: 24px;
    margin: auto;
    margin-top: 15px;
    margin-left: 20px;
    @media (max-width: 800px) {
        margin-left: 2px;
        margin: auto;
        height: 220px;
        margin-top: 0;
        display: none;
    }
`;
