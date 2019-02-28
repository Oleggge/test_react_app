import React from 'react';
import styled from 'styled-components'


const Card = (props) => {
	const { text, src } = props
	return (
		<Cont>
			<Img src={src} />
			<Text>{text}</Text>
		</Cont>
	)
}

export default Card

const Cont = styled.div`
	display: flex;
	width: 244px;
	background: #FFFFFF;
	border: 1px solid #E5E5E5;
	box-sizing: border-box;
	box-shadow: 0px 2px 8px #EFEFEF;
	border-radius: 3px;
`
const Text = styled.div`
	display: flex;
	justify-content:center;
	align-items:center;
	font-weight: 600;
	line-height: 29px;
	font-size: 17px;
	color: #484848;
	padding-left: 13px;

`
const Img = styled.img`

`
