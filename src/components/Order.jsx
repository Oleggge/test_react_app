import React from 'react';
import styled from 'styled-components'


const Order = ({ product, isActive, toggleProduct }) => {
	return (
		<Container>
			<ItemList>{product.id}</ItemList>
			<ItemList>{product.name}</ItemList>
			<ItemList>{product.raiting}</ItemList>
			<ItemList>{product.trend}</ItemList>
			<ItemList>{product.priceSegment}</ItemList>
			<ItemList>{product.reviews}</ItemList>
			<InputCheck type='checkbox' checked={isActive} onChange={() => toggleProduct({ id: product.id })} />
		</Container>
	)
}

export default Order

const Container = styled.div`
	display: flex;
	justify-content: space-between; 
`
const ItemList = styled.div`

`
const InputCheck = styled.input`

`
