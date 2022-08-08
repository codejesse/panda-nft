import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 3.5rem;
`;

export const AboutHeader = styled.h1`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    width: 40%;
    margin: auto;
    padding: 1rem;
    @media (max-width: 1200px) {
        font-size: 30px;
        width: fit-content;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 1200px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const AboutCard = styled.div`
    width: 384px;
    height: 368px;
    background: #272D37;
    border-radius: 16px;  
    margin: auto;
    @media (max-width: 1200px) {
        flex-direction: column;
        width: 100%;
        margin-bottom: 30px;
    }
`;

export const AboutIconContainer = styled.div`
    padding: 3rem;
`;

export const AboutIcon = styled.div`
    width: 80px;
    height: 80px;
    background: #1E50FF;
    border-radius: 360px;
    margin: auto;
`;

export const CardTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const CardTitle = styled.h2`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-transform: capitalize;
    color: #FFFFFF;
    text-align: center;
`;

export const CardPara = styled.p`
    font-family: sans-serif;
    width: 306px;
    height: 72px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #ADB9C7;
    @media (max-width: 1200px) {
        width: 100%;
    }
`;