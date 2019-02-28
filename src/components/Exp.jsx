import React from 'react';
import styled from 'styled-components'

const Exp = (props) => {
	const { src, text, subtext, price } = props
	return (
		<Cont>
			<Img src={src} />
			<Text>{text}</Text>
			<SubText>{subtext}</SubText>
			<Price>{price}</Price>
		</Cont>
	)
}

export default Exp


const Cont = styled.div`
	display: flex;
	flex-direction: column;
`
const Img = styled.img`
	width: 244px;
	
	border-radius: 5px;
`
const Text = styled.div`
	font-style: normal;
	font-weight: 600;
	line-height: 20px;
	font-size: 11px;
	letter-spacing: 0.11px;
	text-transform: uppercase;

	color: #002B37;
`
const SubText = styled.div`
	font-style: normal;
	font-weight: 600;
	line-height: 22px;
	font-size: 17px;
	letter-spacing: 0.17px;
	color: #464646;

`
const Price = styled.div`
	padding-top: 6px;
	font-style: normal;
	font-weight: 300;
	line-height: 24px;
	font-size: 14px;
	letter-spacing: 0.14px;
	color: #464646;

`