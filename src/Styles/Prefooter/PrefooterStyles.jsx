import styled from "styled-components";

export const Prefooterwrapper = styled.div`
    display: flex;
    margin: 10rem;
    @media (max-width: 1200px) {
        margin: auto;
    }
`;

export const PrefooterCard = styled.div`
    width: 1200px;
    height: 352px;
    background: radial-gradient(151.95% 463.58% at -44.29% -62.34%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(74px);
    border-radius: 16px;
    @media (max-width: 1200px) {
        width: 100%;
        height: auto;
    }
`;

export const PrefooterDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
`;

export const PrefooterHeader = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;
`;

export const PrefooterTitle = styled.h3`
   font-family: 'Poppins', sans-serif;
   font-style: normal;
   font-weight: 700;
   font-size: 48px;
   line-height: 64px; 
   color: white;
   text-align: center;
`;

export const ParaWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -32px;
`

export const Prefooterpara = styled.p`
    font-family: 'Poppins', sans-serif; 
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    width: 62%;
    color: white;
`;

export const PrefooterButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const PrefooterButton = styled.button`
    width: 239px;
    height: 64px;
    background: #1E50FF;
    border-radius: 16px;
    border: none;
    color: white;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
`;