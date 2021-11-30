import React from "react";
import styled from "styled-components";

import Logo from "../../images/logo.png"

const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div{
    display: flex;
    align-items: center;

    h2 {
      font-weight: 500;
      font-size: 20px;
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-right: 30px;
    }
    
    button {
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      
      :hover{
        color: #c44f00;
      }
    }
  }
  

  img {
    width: 50%;
  }
`


export default class Footer extends React.Component {
    state = {
        inputValue: ""
    }

    onRegisterEmail = () => {
        if (this.state.inputValue === ""){
            alert("Informe seu e-mail!")
        } else if(this.state.inputValue.includes("@")){
            alert("E-mail cadastrado, Obrigado(a)!")
            this.setState({inputValue: ""})
        } else {
            alert("informe um email válido!")
        }

    }

    onChangeInput = (e) => {
        this.setState({inputValue: e.target.value})
    }

    render() {
        return (
            <ContainerFooter>
                <FooterContent>
                    <div>
                        <h2>Receba Ofetas Exclusivas No Seu E-mail!</h2>
                    </div>

                    <div>
                        <input type="email"
                               value={this.state.inputValue}
                               onChange={this.onChangeInput}
                               placeholder={"Informe seu melhor e-mail..."}
                        />

                        <button onClick={this.onRegisterEmail}>Cadastrar</button>
                    </div>
                </FooterContent>

                <FooterContent>
                    <img src={Logo} alt="Logo footer"/>
                </FooterContent>
            </ContainerFooter>
        )
    }
}