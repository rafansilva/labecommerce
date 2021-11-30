import React from "react"
import styled from "styled-components";
import Logo from "../../images/logo.png"

const ContainerHeader = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
  }
`


export default function Header() {
    return (
        <ContainerHeader>
            <img src={Logo} alt="Logo principal"/>
        </ContainerHeader>
    )
}