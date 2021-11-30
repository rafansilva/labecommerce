import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding-bottom: 20px;
  border: 1px solid #000;
  border-radius: 5px;


  div{
    text-align: center;
  }
  
  button{
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    
    :hover{
      color: #c44f00;
    }
  }
`

export const CardCover = styled.div`
  //height: 150px;
  //width: 100%;
`

export const CardContent = styled.div`
  /* Take available height */
  flex: 1;
  margin: 20px;
`
