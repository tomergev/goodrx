import React from 'react'
import './NavBar.css'
// import goodrxLogo from './goodrx.svg'
import Button from '../Button'

const NavBar = () => {
	return (
		<div id='navBarOuterContainer'>
			<div id="navBarInnerContainer">
				{/* <img src={goodrxLogo} alt='Logo' width={200} /> */}
				<div className="navBarItemContainer">
					<h1 style={{ fontSize: '1.5em' }}>GoodRx</h1>
				</div>

				<div className="navBarItemContainer">
					<input type="text" placeholder="Search.." />
					<Button><i className="fa fa-search"></i></Button>
				</div>

				<div className="navBarItemContainer">
					<p >How GoodRx Works</p>
					<p >Discount Card</p>
					<p >More</p>
				</div>
			</div>

		</div>
	)
}

export default NavBar