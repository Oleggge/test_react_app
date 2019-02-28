import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Goods from './Goods'
import { toggleProduct } from '../../store/ordersReducer'

class GoodsContainer extends React.Component {
	render() {
		return (
			<Goods {...this.props} />
		)
	}
}

const mapStateToProps = (store) => ({
	selectedProducts: store.ordersReducer.selectedProducts
})

const mapDispatchToProps = dispatch => bindActionCreators({
	toggleProduct
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(GoodsContainer)

