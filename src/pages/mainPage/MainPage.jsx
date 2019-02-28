import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class MainPage extends Component {
	render() {
		return (
			<Wrapper>
				<Title>Главная страница</Title>
				<StyledLink to='/goods' >Заказы</StyledLink>
				<StyledLink to='/shopping_cart' >Корзина</StyledLink>
				<StyledLink to='/airbnb' >AirBnb</StyledLink>
				<StyledLink to='/test' >Test</StyledLink>
			</Wrapper>
		);
	}
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items:center;
	flex-direction: column;
	padding-top: 150px;
	
	
	
`
const Title = styled.div`
	font-size: 25px;
`
const StyledLink = styled(Link)`
	font-size: 20px;
	padding:10px;
	cursor: pointer;
	color: red;
`