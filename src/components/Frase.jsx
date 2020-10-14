import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
  padding: 3rem;
  border-radius: .5rem;
  background: #fff;
  max-width: 800px;

  @media (min-width: 992px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    paddind-left: 8rem;
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Frase = ({ frase }) => {

  const {quote, author} = frase;
  return (
    <ContenedorFrase>
      <h1>{ quote }</h1>
      <p>{ author }</p>
    </ContenedorFrase>
  );
}

export default Frase;