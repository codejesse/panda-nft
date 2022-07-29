import styled from "styled-components";


export const AunctionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3.2rem;
    border: 1px solid red;
    padding-top: 6rem;
`;

export const AunctionHeader = styled.div`
    display: flex;
    border: 1px solid white;
    width: 100%;
`;

export const AunctionTitle = styled.h1`
    color: #FFFFFF;
    font-size: 48px;
    line-height: 64px;
    font-style: normal;
    font-weight: 700;
    font-family: sans-serif;
    width: 84%;
`;

export const ViewMoreButton = styled.button`
    display: flex;
    margin: auto;
    justify-content: right;
    padding: 12px 16px;
    gap: 10px;
    width: 176px;
    height: 56px;
    border: 2px solid #1E50FF;
    border-radius: 16px;
    color: white;
    background: none;
    font-family: sans-serif;
    cursor: pointer;
        //create a drop-shadow effect here
        &:hover {
        background-color: #1E50FF;
        box-shadow: 20px, #1E50FF;
    }
`;

export const CardContainer = styled.div`
   display: flex;
   flex-direction: row;
   margin: auto;
`;