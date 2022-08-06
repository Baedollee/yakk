import styled from "styled-components"

const Header = () => {

  return (
    <>
      <HaaderLogo>YAKK</HaaderLogo>
    </>
  )
}

export default Header

const HaaderLogo = styled.h1`
  font-size: 3.6em;

  color:#fff;
  text-shadow: 1px 3px 3px gray;

  cursor: pointer;
`