import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleProduct } from '../../store/ordersReducer'

class ShoppingCart extends Component {
	render() {
		const { selectedProducts, productList } = this.props
		return (
			<Wrapper>
				Вы выбрали {selectedProducts.length} товары: {
					selectedProducts.map(id => {
						return (
							(productList.find(product => product.id === id) || { name: '' }).name
						)
					})
				}
			</Wrapper>
		);
	}
}

const Wrapper = styled.div`
	
`

const mapStateToProps = (store) => ({
	selectedProducts: store.ordersReducer.selectedProducts,
	productList: store.ordersReducer.productList
})

const mapDispatchToProps = dispatch => bindActionCreators({
	toggleProduct
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)