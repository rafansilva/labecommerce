import React from 'react';
import * as All from "./App.styles"

//Componentes aqui em baixo:
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer"
import Card from "./components/Card/Card";
import FiltroProdutos from "./components/Filtro/FiltroProdutos"
import {ShoppingCart} from "./components/Carrinho/ShoppingCart";

class App extends React.Component {
    state = {
        produtos: [
            {
                id: 1,
                name: "Foguete da Missão Apollo 11",
                value: 10000.00,
                imageUrl: "https://picsum.photos/id/231/300/300",
                quantidadeProduto: 0
            },
            {
                id: 2,
                name: "Traje Espacial",
                value: 550.00,
                imageUrl: "https://picsum.photos/id/335/300/300",
                quantidadeProduto: 0
            },
            {
                id: 3,
                name: "Bateria",
                value: 123.43,
                imageUrl: "https://picsum.photos/id/423/300/300",
                quantidadeProduto: 0
            },
            {
                id: 4,
                name: "Tanque de oxigênio",
                value: 200.00,
                imageUrl: "https://picsum.photos/id/321/300/300",
                quantidadeProduto: 0
            },
            {
                id: 5,
                name: "Capacete",
                value: 330.49,
                imageUrl: "https://picsum.photos/id/223/300/300",
                quantidadeProduto: 0
            },
            {
                id: 6,
                name: "Roda",
                value: 30.29,
                imageUrl: "https://picsum.photos/id/243/300/300",
                quantidadeProduto: 0
            }

        ],
        ordenaProdutos: "decrescente",
        valorMinimo: 0,
        valorMaximo: 400,
        buscarProduto: "",
        carrinho: [],
        total: 0.00,
        clickHome: true,
        clickCart: false
    }

    //LocalStorage
    componentDidMount() {
        let prevCart = JSON.parse(localStorage.getItem("carrinho"))

        if (prevCart === null) {
            prevCart = []
        }

        this.setState({
            carrinho: prevCart
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.carrinho !== this.state.carrinho) {
            localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho))
        }
    }

    //Troca de tela
    onClickHome = () => {
        this.setState({
            clickHome: true,
            clickCart: false
        })
    }

    onClickCart = () => {
        this.setState({
            clickHome: false,
            clickCart: true
        })
    }

    //Metodos adicionar e remover produtos do carrinho
    addCarrinho = (id) => {
        const productInCart = this.state.carrinho.find((product) => {
            return product.id === id
        })

        if (productInCart) {
            let newProduct = this.state.carrinho.map((produto) => {
                if (produto.id === id) {
                    return {
                        ...produto,
                        quantidadeProduto: produto.quantidadeProduto + 1,
                    }
                }
                return produto
            })
            this.setState({
                carrinho: newProduct
            })
        } else {
            const addProduct = this.state.produtos.find((produto) => {
                return produto.id === id
            })

            const newCart = [
                ...this.state.carrinho,
                {
                    ...addProduct,
                    quantidadeProduto: addProduct.quantidadeProduto + 1
                }
            ]

            this.setState({
                carrinho: newCart
            })
        }
    }

    removeDoCarrinho = (id) => {
        const productCart = this.state.carrinho.map((produto) => {
            if (produto.id === id) {
                return {
                    ...produto,
                    quantidadeProduto: produto.quantidadeProduto - 1
                }
            }
            return produto
        }).filter((produto) => produto.quantidadeProduto > 0)

        this.setState({carrinho: productCart})
    }

    getTotalValue = () => {
        let totalValue = 0

        if (this.state.carrinho === null) {
            return totalValue
        } else {
            for (let product of this.state.carrinho) {
                totalValue += product.value + product.quantidadeProduto
            }

            return totalValue.toLocaleString('pt-BR')
        }
    }

    //Metodos ordena produtos crescente e decrescente
    ordenaProdutos = (e) => {
        const option = e.target.value
        let listaProdutosFiltrados

        if (option === "crescente") {
            listaProdutosFiltrados = this.state.produtos.sort((a, b) => {
                return a.value - b.value
            })

            this.setState({
                produtos: listaProdutosFiltrados,
                ordenaProdutos: option
            })
        } else {
            listaProdutosFiltrados = this.state.produtos.sort((a, b) => {
                return a.value - b.value
            }).reverse()

            this.setState({
                produtos: listaProdutosFiltrados,
                ordenaProdutos: option
            })
        }
    }

    //Inputs passado do cp filho para o estado do cp pai
    filtroMenorValor = (e) => {
        this.setState({
            valorMinimo: e
        })
    }

    filtroMaiorValor = (e) => {
        this.setState({
            valorMaximo: e
        })
    }

    filtroBuscar = (e) => {
        this.setState({
            buscarProduto: e
        })
    }


    render() {

        const listaFiltrada = this.state.produtos.filter((produto) => {
            return produto.value >= this.state.valorMinimo
        }).filter((produto) => {
            return produto.value <= this.state.valorMaximo
        }).filter((produto) => {
            return produto.name.toLowerCase().includes(this.state.buscarProduto)
        }).sort((a, b) => this.state.ordenaProdutos === 'crescente' ? a.value - b.value : b.value - a.value)

        return (
            <All.Container>
                <All.Header>
                    <Header/>
                </All.Header>

                <All.Nav>
                    <Nav
                        home={this.onClickHome}
                        cart={this.onClickCart}
                    />
                </All.Nav>
                {this.state.clickHome === true
                    ? (
                        <All.Main>
                            {/*{Left sidebar }*/}
                            <All.Left>
                                <All.FiltroHeader>
                                    <h2>Filtro:</h2>
                                </All.FiltroHeader>

                                <FiltroProdutos
                                    min={this.state.valorMinimo}
                                    max={this.state.valorMaximo}
                                    maiorValor={this.filtroMaiorValor}
                                    menorValor={this.filtroMenorValor}
                                    buscarProduto={this.filtroBuscar}
                                />
                            </All.Left>


                            <All.Center>
                                <All.CardHeader>
                                    <div>
                                        <h4>Quantidade de Produtos: {listaFiltrada.length}</h4>
                                    </div>

                                    <div>
                                        <label>Ordenar por:</label>
                                        <select value={this.state.ordenaProdutos} onChange={this.ordenaProdutos}>
                                            <option value="decrescente">Decrescente</option>
                                            <option value="crescente">Crescente</option>
                                        </select>
                                    </div>
                                </All.CardHeader>

                                <All.CardContainer>
                                    {listaFiltrada.length === 0
                                        ? (
                                            <All.CardEmpty>
                                                <h3>Produto Não Encontrado!</h3>
                                            </All.CardEmpty>
                                        )
                                        : (
                                            listaFiltrada.map((produto) => {
                                                return (
                                                    <Card key={produto.id}
                                                          produtoId={produto.id}
                                                          cover={produto.imageUrl}
                                                          productName={produto.name}
                                                          productPrice={produto.value}
                                                          addCarrinho={this.addCarrinho}
                                                    />
                                                )
                                            })
                                        )
                                    }


                                </All.CardContainer>
                            </All.Center>


                        </All.Main>
                    )
                    : (
                        <All.CarrinhoContainer>
                            <All.CarrinhoHeader>
                                <h2>Carrinho:</h2>
                            </All.CarrinhoHeader>

                            {this.state.carrinho.length === 0
                                ? (<div>Carrinho Vazio.</div>)
                                : (this.state.carrinho.map((produto, index) => {
                                    return (
                                        <ShoppingCart key={index}
                                                      produto={produto}
                                                      removerDoCarrinho={this.removeDoCarrinho}
                                        />
                                    )
                                }))}

                            <All.CarrinhoFooter>
                                <p>Valor Total: {this.getTotalValue()}</p>
                            </All.CarrinhoFooter>

                        </All.CarrinhoContainer>
                    )
                }

                <All.Footer>
                    <All.Banner>
                        <Footer/>
                    </All.Banner>

                </All.Footer>

            </All.Container>
        )
    }

}

export default App;
