import styled from "styled-components";

export const HotSalesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3.1rem;
    padding-top: 5rem;
    border: 1px solid white;
    @media (max-width: 800px) {
        margin: 5px;
        width: 100%;
    }
`;

export const HotSalesHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const ButtonsTray = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-right: 22px;
    @media (max-width: 800px) {
        display: none;
    }
`;

export const StoreButtons = styled.button`
    width: 116px; 
    height: 56px;
    border: 1px solid #1E50FF;
    border-radius: 8px;
    background: rgba(30, 80, 255, 0.1);
    padding: 16px;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    margin-left: 22px;
    cursor: pointer;
    //create a drop-shadow effect here
    &:hover {
        background-color: #1E50FF;
        box-shadow: 20px, #1E50FF;
    }
`;

export const SalesTitle = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    text-transform: capitalize;
    color: #FFFFFF;
    @media (max-width: 900px) {
        text-align: center;
        width: 100%;
    }
`;

export const SalesCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 30px;
    flex-wrap: wrap;
    @media (max-width: 500px) {
        margin: auto;
        width: 100%;
        flex-direction: column;
    }
`;

export const SalesCard = styled.div`
    width: 384px;
    height: 536px;
    background: #272D37;
    border-radius: 24px;
    @media (max-width: 1200px) {
        margin: auto;
        width: auto;
        flex-direction: column;
        padding: 10px;
    }
`;

export const CardImage = styled.div`
    height: 352px;
    margin: 25px;
    border-radius: 24px;
    cursor: pointer;
    width: fit-content;
    border: 2px solid white;
    @media (max-width: 800px) {
        width: fit-content;
        margin: auto;
    }
`;

export const SalesCardDetails = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: auto;
    margin-top: -7px;
`;

//for the bottom information for the hot sales card
export const BottomCardDetails = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.22rem;
    margin: auto;
`;

export const Avatar = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 16\px;
    margin: auto;
    margin-top: -5px;
    margin-right: 5px;
`;

export const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: -17px;
`;

export const NameTitle = styled.p`
    font-size: 20px;
    color: #8F9CA9;
    font-family: sans-serif;
`;

export const Creator = styled.p`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;
    margin-top: -1.2rem;
`;

export const PriceDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 120px;
    margin-top: -0.9rem;
    @media (max-width: 800px) {
        margin-left: 14px;
    }
`;

export const Bid = styled.p`
    font-size: 20px;
    color: #8F9CA9;
    font-family: sans-serif;
`;

export const SalesPrice = styled.p`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    color: #FFFFFF;
    margin-top: -1rem;
    margin-left: 10px;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: sans-serif;
    color: white;
    
`;

export const TitleText = styled.p`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    margin: 20px;
`;

export const SalesChip = styled.div`
    width: 59px;
    height: 29px;
    background: #1E50FF;
    border-radius: 8px;
    text-align: center;
    margin: auto;
    margin-left: 110px;
`;