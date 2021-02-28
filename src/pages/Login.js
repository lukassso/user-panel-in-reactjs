import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import loginImg from '../images/undraw_authentication_fsn5.svg';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
    max-height: 500px;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;

const Login = props => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={loginImg} alt='github user' />
        <h1>github user</h1>
        <button className='btn'>
          Log In / Sign Up
        </button>
      </div>
    </Wrapper>
  )
}

Login.propTypes = {

}

export default Login
