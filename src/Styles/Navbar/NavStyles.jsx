import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
`;

export const NavContainer = styled.div`
  display: flex;
  /* position: fixed; */
  flex-direction: row;
  height: 65px;
  width: 95%;
  /* border: 1px solid white; */
`;

export const NavLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin: 1rem;
  cursor: pointer;
  margin-left: -1px;
`;

export const LogoText = styled.h1`
    font-size: 1rem;
    color: white;
    font-family: sans-serif;
    margin-left: 10px;
`;

export const NavItems = styled.div`
   display: flex;
   justify-content: center;
   margin: auto;
   width: 70%;
   justify-content: space-around;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ItemsList = styled.div`
    color: white;
    font-family: sans-serif;
    margin-right: 20px;
    margin-left: 20px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        text-decoration-color: #1E50FF;
        text-decoration-thickness: 3px;
    }
    @media (max-width: 800px) {
        display: none;
    }
`;

export const NavCta = styled.button`
   display: flex;
   flex-direction: row;
   margin: auto;
   justify-content: center;
   align-items: flex-start;
   padding: 12px 16px;
   gap: 10px;
   width: 175px;
   height: 56px;
   border: 1px solid #1E50FF;
   border-radius: 16px;  
   background: none;
   color: white;
   cursor: pointer;
   margin-right: -14px;
   &:hover {
    background-color: #1E50FF;
   }
`;

export const CtaText = styled.p`
   margin: auto;
   text-align: center;
   color: white;
`;