import React from 'react'
import styled from 'styled-components'
import Order from '../../components/Order'
import { Link } from 'react-router-dom'

// const array = [1, 2, 3, 4, 5, 6]

const products = [
	{
		id: 1, name: "Очень Хороший", raiting: "55", trend: "good", priceSegment: '324', reviews: 'df'
	},
	{
		id: 2, name: "Плохой", raiting: "20", trend: "good", priceSegment: '324', reviews: 'df'
	},
	{
		id: 3, name: "Не очень", raiting: "40", trend: "good", priceSegment: '324', reviews: 'df'
	},
	{
		id: 4, name: "Говно", raiting: "1", trend: "good", priceSegment: '324', reviews: 'df'
	},
	{
		id: 5, name: "JNF", raiting: "23", trend: "good", priceSegment: '324', reviews: 'df'
	},
	{
		id: 6, name: "JNF", raiting: "23", trend: "good", priceSegment: '324', reviews: 'df'
	}
]

const Goods = ({ selectedProducts, toggleProduct }) => {
	return (
		<Wrapper>
			<Title>Список товаров</Title>
			<List>
				<ItemList>#</ItemList>
				<ItemList>Название</ItemList>
				<ItemList>Рейтинг</ItemList>
				<ItemList>Тренд</ItemList>
				<ItemList>Ценовой сегмент</ItemList>
				<ItemList>Отзывы покупаттелей</ItemList>
				<ItemList>В корзину</ItemList>
			</List>
			{products.map(el => <Order key={el.id} product={el} isActive={selectedProducts.includes(el.id)} toggleProduct={toggleProduct} />)}
			<Selected>Выбрано {selectedProducts.length}</Selected>
			<Link to='/shopping_cart' >Заказы</Link>
		</Wrapper>
	);
}
export default Goods
const Wrapper = styled.div`
	display: flex;
	justify-content:flex-start;
	flex-direction: column;
	padding-top: 150px;
	
	
`
const Title = styled.div`
	font-size: 30px;
	padding-bottom: 50px;
`

const List = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #e3d4e3c4;
	padding-bottom: 5px;

`

const ItemList = styled.div`
`
const Selected = styled.div`
	padding-top: 50px;
`