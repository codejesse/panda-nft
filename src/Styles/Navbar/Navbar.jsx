import { NavContainer, NavWrapper, NavLogo, NavItems, LogoText, NavCta, NavList, ItemsList, CtaText } from "./NavStyles";


function Navbar() {
    return (
        <NavWrapper>
            <NavContainer>
                <NavLogo>
                    <img src="/panda.png" alt="logo" width="40px" height="40px" />
                    <LogoText>Panda NFT</LogoText>
                </NavLogo>
                <NavItems>
                    <NavList>
                        <ItemsList>Home</ItemsList>
                        <ItemsList>Discover</ItemsList>
                        <ItemsList>Docs</ItemsList>
                        <ItemsList>Blog</ItemsList>
                        <ItemsList>About Us</ItemsList>
                        <ItemsList>Contact Us</ItemsList>
                    </NavList>
                </NavItems>
                <NavCta><CtaText>Connect Wallet</CtaText></NavCta>
            </NavContainer>
        </NavWrapper>
    )
}
export default Navbar;