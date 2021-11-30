import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: 1px solid #000;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: 1px solid #000;
`
export const Main = styled.main`
  /* Take the remaining height */
  flex-grow: 1;

  /* Layout the left sidebar, main content and right sidebar */
  display: grid;
  grid-template-columns: 400px 1fr;
  margin: 10px 0;
  gap: 10px;
  padding-bottom: 100px;
`

//PRODUTOS

export const Center = styled.article`
  /* Take the remaining width */
  flex-grow: 1;
  border: 1px solid #000;
  padding: 10px;
  margin: auto 10px;
  height: 100%;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;

  label{
    padding-right: 10px;
  }
  
  select {
    cursor: pointer;
  }
`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const CardEmpty = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  text-align: center;
`

//FILTRO

export const Left = styled.aside`
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  padding: 10px;
  margin: auto 10px;
`

export const FiltroHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;
  margin-top: 10px;
`


//CARRINHO
export const CarrinhoContainer = styled.div`
  width: 100%;
  padding: 10px;
  margin: 10px auto;
  
  div{
    margin: 20px;
  }
`

export const CarrinhoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px;
`

export const CarrinhoFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px;
  
  p{
    font-weight: 700;
    font-size: 20px;
  }
`


//FOOTER

export const Footer = styled.footer`
  /* Banner is displayed at the bottom */
  bottom: 0;
  left: 0;
  position: static;
  width: 100%;

  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;
`

export const Banner = styled.div`
  /* Take available width */
  flex: 1;
  background-color: #2C3531;
  padding: 10px;
`


