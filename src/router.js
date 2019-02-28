import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components'
import MainPage from './pages/mainPage/MainPage'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import Goods from './pages/goods/'
import Layout from './layouts/Layout'
import AirBnb from './pages/airbnb/AirBnb'
import Header from './components/Header'
import Test from './pages/test/Test'


class AppRoutes extends PureComponent {
	render() {
		return (
			<Router>
				<Wrapper>
					<Header />
					<Layout>
						<Switch>
							<Route exact path='/' component={MainPage} />
							<Route path='/goods' component={Goods} />
							<Route path='/shopping_cart' component={ShoppingCart} />
							<Route path='/airbnb' component={AirBnb} />
							<Route path='/test' component={Test} />
						</Switch>
					</Layout>
				</Wrapper>
			</Router>
		)
	}
}

export default AppRoutes

const Wrapper = styled.div`
	margin: 0 auto;
`