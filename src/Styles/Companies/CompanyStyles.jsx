import styled from "styled-components";


export const CompaniesWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 60px;
    /* border: 1px solid white; */
    @media (max-width: 1000px) {
        //for now
        display: none;
    }
`;

export const CompaniesContainer = styled.div`
    display: flex;
    justify-content: center;
    /* border: 1px solid red; */
    width: 90%;
    margin: auto;
    justify-content: space-between;
    @media (max-width: 800px) {
        flex-direction: column;
        margin: auto;
    }
`;