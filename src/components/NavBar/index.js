import React, { useContext } from 'react'
import './NavBar.css'
import goodrxLogo from './goodrx.svg'
import { ThemeContext } from '../../App'
import Button from '../Button'

const NavBar = () => {
	const {
		navBarColor,
		buttonColor,
	} = useContext(ThemeContext)

	const navBarStyle = { backgroundColor: navBarColor }
	const buttonStyle = { background: buttonColor }

	const onSubmit = (e) => {
		e.preventDefault()
		const inputVal = document.getElementById('navBarSearchBar').value
		window.history.replaceState(null, null, `?${inputVal}`)
	}

	return (
		<React.Fragment>
			<div id='mobileFlexContainer' style={navBarStyle}>
				<h2 className='mobileFlexItem'>
					<img src={goodrxLogo} alt='Logo' width={80} />
				</h2>

				<i
					className="fa fa-search mobileFlexItem"
					onClick={() => console.log('search')}
				>
				</i>
			</div>


			<div id='navBarContainer' style={navBarStyle}>
				<h2 >
					<img src={goodrxLogo} alt='Logo' width={80} />
				</h2>

				<div id='navBarSearchBarAndButton'>
					<form onSubmit={onSubmit}>
						<input type="text" id='navBarSearchBar' />
						<Button
							type='submit'
							style={buttonStyle}
							id='navBarSearchButton'
						>
							<i className="fa fa-search"></i>
						</Button>
					</form>
				</div>

				<div id="navBarLinks">
					<a href='/pharmacies'>How GoodRx Works</a>
					<a href='/pharmacies'>Discount Card</a>
					<a href='/pharmacies'>More</a>
				</div>
			</div>
		</React.Fragment>

	)
}

export default NavBar