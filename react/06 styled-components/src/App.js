import React, { useState } from 'react';
import { Header, Form, Overview, Result, Spinner } from './components';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
background-color: white;
padding: 3rem;
`;
const MessageContainer = styled.div`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;
function App() {
  const [overview, setOverview] = useState(undefined);
  const [loading, setLoading] = useState(false);
  return (
    <Container>
    <Header titulo="Assurance"/>
    <FormContainer>
      <Form setOverview={setOverview} setLoading={setLoading} />
      { loading ? <Spinner /> : null }
    { overview  ? (
    <><Overview overview={overview} />
    <Result value={overview.value} /></>) : <MessageContainer>Choose brand, model and type</MessageContainer>}

    </FormContainer>
    </Container>
  );
}

export default App;
