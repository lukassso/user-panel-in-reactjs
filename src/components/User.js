import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card';
import Followers from './Followers';
import styled from 'styled-components';


const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

const User = props => {
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Card></Card>
        <Followers></Followers>
      </Wrapper>
    </section>
  )
}

User.propTypes = {

}

export default User
