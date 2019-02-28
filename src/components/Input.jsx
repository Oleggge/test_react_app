import React from 'react';
import styled from 'styled-components'


const Input = () => {
	return (
		<Wrap>
			<InputWrap type="text" placeholder='Try “Osaka”' />
			<Button>
				<Text>Search</Text>
			</Button>
		</Wrap>
	)
}

export default Input

const Wrap = styled.div`
	display: flex;
	width: 1030px ;
	height: 72px ;
	box-sizing: border-box;
	background: #FFFFFF;
	border: 1px solid #DBDBDB;
	box-sizing: border-box;
	box-shadow: 0px 2px 16px #ECECEC;
	border-radius: 5px;
	font-size: 19px;
	color: black;
`
const Button = styled.div`
	width: 95px;
	height: 48px;
	margin:12px;
	background: #FF5661;
	border-radius: 5px;
	text-align:center;
	cursor: pointer;
`
const Text = styled.div`
	font-style: normal;
	padding-top: 10px;
	font-weight: 500;
	line-height: 25px;
	font-size: 19px;
	color: #FFFFFF;

`
const InputWrap = styled.input`
	display: flex;
	width: 100%;
	border:none;
	outline: none;
	

/* &::placeholder {
	font-style: normal;
	font-weight: normal;
	line-height: 30px;
	font-size: 19px;
	color: #767676;

	} */
			
`