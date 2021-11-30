import React from 'react'
import styled from "styled-components";

import ShoppingCartItem from "./ShoppingCartItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 1px solid #000;
  max-width: 50%;
`

const CarrinhoContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

`

export class ShoppingCart extends React.Component {
    render() {
        return (
            <Container>
                <CarrinhoContent>

                    <ShoppingCartItem
                        produtoCart={this.props.produto}
                        removerDoCarrinho={this.props.removerDoCarrinho}
                    />

                </CarrinhoContent>
            </Container>
        )
    }
}
