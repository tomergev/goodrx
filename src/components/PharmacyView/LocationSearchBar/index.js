import React from 'react'
import './LocationSearchBar.css'
import Button from '../../Button'
import getLocation from '../../../services/geolocation'

const LocationSearchBar = (props) => {
	const {
		userLocation,
		setUserLocation,
		searchBarValue,
		setSearchBarValue,
	} = props

	const { lat, lng } = userLocation
	const reset = () => setSearchBarValue('')

	const detectMyLocationClick = async () => {
		reset()
		const { lat, lng } = await getLocation()
		setUserLocation({ lat, lng })
	}

	return (
		<div id='seacrhContainer'>
			<input
				id='searchBarInput'
				value={searchBarValue}
				placeholder='  Address or Zip'
				onChange={(e) => setSearchBarValue(e.target.value)}
			/>

			<Button
				className="searchBarButton"
				onClick={detectMyLocationClick}
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
				onClick={reset /* Resetting the value of the search bar */}
			>
				<p>
					Reset
				</p>
			</Button>

			{(lat && lng) && (
				<p id='userLatLng' >
					<span id='underline'>
						My Location:
					</span>
					{'   '  /* Adding a Space */} {lat}, {lng}
				</p>
			)}
		</div>
	)
}

export default LocationSearchBar