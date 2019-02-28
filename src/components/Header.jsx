import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/Logo.svg'


const Header = () => {
	return (
		<Wrapper>
			<Link to='/'>
				<Img src={logo} />
			</Link>
			<Title>
				<Item>Become a host</Item>
				<Item>Host</Item>
				<Item>Sign Up</Item>
				<Item>Log In</Item>
			</Title>
		</Wrapper>
	)
}

export default Header

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top:26px;
`
const Img = styled.img`
	display: flex;
	margin-left: 24px;
	cursor: pointer;
`

const Title = styled.div`
	display: flex;
	
`
const Item = styled.div`
	padding-right: 30px;

	/* flex-direction: column; */
`