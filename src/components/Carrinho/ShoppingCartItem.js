import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    p {
      margin-right: 20px;
      font-size: 20px;
      font-weight: 300;
      text-align: justify;
      max-width: 100px;
      min-width: 100px;
    }
  }
  
  button {
    padding: 5px;
    border-radius: 5px;

    :hover {
      color: #c44f00;
      cursor: pointer;
    }
  }

`

const ProductAndImage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 20%;
    margin-right: 20px;
  }
`

export default class ShoppingCartItem extends React.Component {
    render() {
        return (
            <ItemContainer>
                <ProductAndImage>
                    <img src={this.props.produtoCart.imageUrl} alt={"imagem" + this.props.produtoCart.name}/>
                    <p>{this.props.produtoCart.name}</p>
                </ProductAndImage>

                <div>
                    <p>{this.props.produtoCart.quantidadeProduto}X</p>

                    <button onClick={() => this.props.removerDoCarrinho(this.props.produtoCart.id)}>Remover</button>
                </div>
            </ItemContainer>
        )
    }
}