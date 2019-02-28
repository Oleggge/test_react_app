import React, { Component } from 'react';
import styled from 'styled-components'
import Input from '../../components/Input'
import Card from '../../components/Card'
import home from '../../assets/home.png'
import boat from '../../assets/boat.png'
import eat from '../../assets/eat.png'
import Exp from '../../components/Exp'
import party from '../../assets/party.png'
import man from '../../assets/man.png'
import girl from '../../assets/girl.png'
import photo from '../../assets/photo.png'


export default class AirBnb extends Component {
	render() {
		return (
			<Wrapper>
				<Cont>
					<Title>Airbnb</Title>
					<SubTitle>Book unique homes and <br /> experience a city like a local</SubTitle>
					<Input />
					<Text>Explore Airbnb</Text>
					<CardCont>
						<Card text='Homes' src={home} />
						<Card text='Experiences' src={boat} />
						<Card text='Restaurants' src={eat} />
					</CardCont>
					<Text>Experiences</Text>
					<ExpCont>
						<Exp src={party} text='Nightlife · New York' subtext='Discover the citys party scence' price='$35 per person' />
						<Exp src={man} text='Entertainment · Vancouver' subtext='Tour with an Enthusiastic Local' price='$3 per person' />
						<Exp src={girl} text='photo class · Los Angeles' subtext='Must Have L.A.Pictures' price='$39 per person' />
						<Exp src={photo} text='photography · New York' subtext='Retro Photoshoot in NYC' price='$49 per person' />
					</ExpCont>
				</Cont>
			</Wrapper >
		);
	}
}

const Wrapper = styled.div`
	display: flex;
	padding-top: 100px;

`
const Cont = styled.div`
	display: flex;
	flex-direction:column;
`
const Title = styled.div`
	font-weight: 600;
	line-height: 76px;
	font-size: 45px;

	color: #FC3C4F;

`

const SubTitle = styled.div`
	font-weight: 500;
	line-height: 56px;
	font-size: 43px;

	color: #383838;
`
const Text = styled.div`
	padding-top: 107px;
	font-weight: 600;
	line-height: 43px;
	font-size: 26px;

	color: #484848;
`
const CardCont = styled.div`
	display: flex;
	justify-content: space-between;
	width: 768px;
`
const ExpCont = styled.div`
	display: flex;
	justify-content:space-between;
	margin: 2px;
`