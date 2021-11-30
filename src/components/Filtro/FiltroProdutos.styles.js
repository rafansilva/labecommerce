import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
`

export const Inputs = styled.div`
  padding: 10px;
  margin: 10px;
  
  h5 {
    padding: 10px 0;
    font-size: 20px;
    font-weight: 500;
  }
  
  input {
    padding: 5px;
    border-radius: 5px;
  }
`