import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";


const RequestSignInPage = () => {
  const { loginWithRedirect } = useUserContext();

  return (
    <Wrapper className="page-100">
      <section>
        <h2>Acesso negado!</h2>
        <h3>Você deve estar logado para acessar esta página!</h3>
        <Link to="/" className="btn">
          Voltar
        </Link>
        <button type="button" className="btn entrar" onClick={loginWithRedirect}>
          Entrar
        </button>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .entrar {
      margin-left: 1rem;
  }
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default RequestSignInPage;
