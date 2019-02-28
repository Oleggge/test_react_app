import React from 'react'




class Test extends React.Component {

	state = {
		username: ''
	}

	handleChange = (e) => {
		this.setState({ username: e.target.value })
		console.log('34', e.target.value)
	}

	render() {
		return (
			<div>
				Hello {this.state.username} <br />
				Change Name:
        <input
					type="text"
					value={this.state.username}
					onChange={this.handleChange}
				/>
			</div>
		)
	}
}

export default Test