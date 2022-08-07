import styled from "styled-components";

export const FeaturedWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3.2rem;
    border: 1px solid red;
    padding-top: 3rem;
`;

export const FeaturedHeader = styled.div`
    display: flex;
    width: 100%;
`;

export const FeaturedTitle = styled.h1`
    color: #FFFFFF;
    font-size: 48px;
    line-height: 64px;
    font-style: normal;
    font-weight: 700;
    font-family: sans-serif;
    width: 84%;
`;

export const FeaturedCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    @media (max-width: 1200px) {
        flex-direction: column;
        width: 100%;
        margin: auto;
    }
`;

export const FeaturedCard = styled.div`
    width: 282px;
    height: 391px;
    background: #272D37;
    border-radius: 16px;
    @media (max-width: 1200px) {
        margin-bottom: 30px;
        width: 100%;
    }
`;

export const CardImageHolder = styled.div`
    width: 266px;
    height: 225px;
    border-radius: 16px;
    margin: auto;
    margin-top: 5px;
    @media (max-width: 1200px) {
        width: 100%;
        width: fit-content;
        justify-content: center;
        border: 1px solid white;
    }
`;

export const ArtistProfilePic = styled.div`
    width: 104px;
    height: 104px;
    border: 2px solid #FFFFFF;
    border-radius: 360px;
    margin: auto;
    margin-top: -50px;
`;

export const ArtistName = styled.div`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-transform: capitalize;
    color: #FFFFFF;
    text-align: center;
    margin: 10px;
`;

export const ArtistStats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Stats = styled.div`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
`;