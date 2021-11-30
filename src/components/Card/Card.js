import React from "react";
import * as All from "./Card.styles"

export default class Card extends React.Component {


    render() {
        return (
            <All.Container>
                <All.Card>
                    <All.CardCover>
                        <img src={this.props.cover} alt={"Imagem do produto"}/>
                    </All.CardCover>

                    <All.CardContent>
                            <h3>{this.props.productName}</h3>

                            <p>R$ {this.props.productPrice.toLocaleString('pt-BR')}</p>

                    </All.CardContent>

                    <div>
                        <button onClick={() => this.props.addCarrinho(this.props.produtoId)}>Adicionar ao Carrinho</button>
                    </div>
                </All.Card>
            </All.Container>
        )
    }
}