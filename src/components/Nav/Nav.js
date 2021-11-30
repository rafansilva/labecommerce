import React from "react";
import styled from "styled-components";

const MainNav = styled.div`
  display: flex;
  align-items: center;
  margin: 10px auto;

  button {
    padding: 4px;
    border-radius: 5px;
    cursor: pointer;

    :hover {
      color: #c44f00;
    }
  }
`

const Separator = styled.div`
  margin: 0 8px;
`

export default function Nav(props) {
    return (
        <MainNav>
            <button onClick={props.home}>Home</button>
            <Separator>/</Separator>
            <button onClick={props.cart}>Carrinho</button>
        </MainNav>
    )
}