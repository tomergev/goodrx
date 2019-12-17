import React, { useContext } from 'react'
import './LocationSearchBar.css'
import Button from '../../Button'
import { ThemeContext } from '../../../App'
import getLocation from '../../../services/geolocation'

const LocationSearchBar = (props) => {
	const {
		userLocation,
		setUserLocation,
		searchBarValue,
		setSearchBarValue,
	} = props

	const { lat, lng } = userLocation
	const { buttonColor } = useContext(ThemeContext)

	const resetSearchBar = () => setSearchBarValue('')
	const detectMyLocationClick = async () => {
		resetSearchBar()
		const { lat, lng } = await getLocation()
		setUserLocation({ lat, lng })
	}


	return (
		<div id='seacrhContainer'>
			<input
				id='searchBarInput'
				value={searchBarValue}
				placeholder='	Address or Zip'
				onChange={(e) => setSearchBarValue(e.target.value)}
			/>

			<Button
				className="searchBarButton"
				onClick={detectMyLocationClick}
				style={{ background: buttonColor }}
			>
				<p id='tabletDesktopView'>
					Detect My Location
				</p>

				<p id='mobileView'>
					Detect Location
				</p>
			</Button>

			<Button
				className="searchBarButton"
				style={{ background: buttonColor }}
				onClick={resetSearchBar /* Resetting the value of the search bar */}
			>
				<p>
					Reset
				</p>
			</Button>

			<p id='userLatLng' >
				<span id='underline'>
					My Location:
			</span>
				{'   '  /* Adding Space */}
				{lat}, {lng}
			</p>

		</div>
	)
}

export default LocationSearchBar