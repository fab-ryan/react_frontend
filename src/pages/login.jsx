import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

import { loginUser } from '../redux/action/loginAction';
import NavBar from '../components/navbar';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLogin, token, user, error, loading } = useSelector(
    (state) => state.login
  );

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      loginUser({
        email: email,
        password: password,
      })
    );
  };
  return (
    <>
      <NavBar islogin={isLogin} />
      <LoginContianer>
        <Form.Label htmlFor='inputPassword5'>Email</Form.Label>
        <Form.Control
          type='email'
          id='inputEmail5'
          aria-describedby='emailHelpBlock'
          onChange={(value) => setEmail(value.target.value)}
        />
        <Form.Text id='emailHelpBlock' muted>
          Your email must be 8-20 characters long, contain letters and numbers,
          and must not contain spaces, special characters, or emoji.
        </Form.Text>
        <br />
        <Form.Label htmlFor='inputPassword5'>Password</Form.Label>
        <Form.Control
          type='password'
          id='inputPassword5'
          aria-describedby='passwordHelpBlock'
          onChange={(value) => setPassword(value.target.value)}
        />
        <Form.Text id='passwordHelpBlock' muted>
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text>
        <br />
        <Button variant='primary' onClick={handleSubmit}>
          Login
          {loading && <Spinner animation='border' />}
        </Button>
      </LoginContianer>
    </>
  );
};

export default Login;

const LoginContianer = styled.section`
  width: 50%;
  align-self: center;
  margin: 0 auto;
`;
