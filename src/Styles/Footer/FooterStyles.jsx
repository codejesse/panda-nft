import styled from "styled-components";

export const FooterWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    border: 1px solid white;
`;

export const FooterDetails = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid white;
    width: 100%;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;

export const LeftDetails = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    margin: auto;
    margin-top: 32px;
    margin-left: 42px;
    @media (max-width: 1200px) {
        margin: auto;
        width: 100%;
    }

`;

export const LogoHolder = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid white;
    color: white;
    font-family: 'Poppins', sans-serif;
    margin: auto;
`;

export const Footerpara = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: white;
    width: 393px;
    height: 128px;
`;

export const RightDetails = styled.div`
    display: flex;
    width: auto;
    margin: auto;
`;

export const HyperLinks = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid red;
    @media (max-width: 1200px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const HyperTitle = styled.h5`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    margin-right: 4rem;
    margin-left: 2.3rem;
`;

export const HyperOne = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    & ul {
        margin-top: -1rem;
        text-decoration: none;
        border: 1px solid orange;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        text-align: left;
    }
    & p {
        cursor: pointer;
    }
`;