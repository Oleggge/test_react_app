import React from 'react'
import styled from 'styled-components'


const Layout = (props) => (
	<Wrapper>
		<Container>
			{props.children}
		</Container>
	</Wrapper>
)

export default Layout;

const Container = styled.div`
	margin: 0 auto;
	max-width: 1030px;
	
	


	
`
const Wrapper = styled.div`
`



