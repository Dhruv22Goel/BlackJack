import React from "react";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  border: none;
  background: #d0d0d0;
  margin: 10px;
  width: 10vw;
`;
const NameDiv = styled.div`
  display: flex;
  align-items: center;
`;
export default function SignIn() {
  return (
    <Div>
      <form>
        <fieldset>
          <NameDiv>
            <h4>Name: </h4>
            <Input type="text" placeholder="Name" id="Name" />
          </NameDiv>
          <NameDiv>
            <h4>Email: </h4>
            <Input type="email" placeholder="E-Mail" />
          </NameDiv>
          <button type="submit">Play Game</button>
        </fieldset>
      </form>
    </Div>
  );
}
