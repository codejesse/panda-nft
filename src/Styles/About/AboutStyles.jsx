import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid white;
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
    border: 1px solid white;
    width: 40%;
    margin: auto;
    padding: 1rem;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const AboutCard = styled.div`
    width: 384px;
    height: 368px;
    background: #272D37;
    border-radius: 16px;  
    margin: auto;
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