import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-right: auto;
  padding-left: auto;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  padding: 10px;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 150px;
  padding: 10px 20px;
`;

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${login}`);
  };

  return (
    <div>
      <Container>
        <Card>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <Button type="submit">Submit</Button>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
