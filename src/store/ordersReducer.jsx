import { createAction, handleActions } from 'redux-actions'

const initialState = {
	selectedProducts: [],
	productList: [
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
}

export const TOGGLE_PRODUCT = 'ordersReducer/TOGGLE_PRODUCT'

// ACTION CREATORS
export const toggleProduct = createAction(TOGGLE_PRODUCT)

export default handleActions({

	[TOGGLE_PRODUCT]: (state, { payload: { id } }) => {
		if (state.selectedProducts.includes(id)) {
			return ({
				...state,
				selectedProducts: state.selectedProducts.filter(el => el !== id)
			})
		} else {
			return ({
				...state,
				selectedProducts: [...state.selectedProducts, id]
			})
		}
	}

}, initialState)
