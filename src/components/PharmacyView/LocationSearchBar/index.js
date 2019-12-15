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

	const detectMyLocationClick = async () => {
		const { lat, lng } = await getLocation()
		setUserLocation({ lat, lng })
	}

	return (
		<div id='seacrhContainer'>
			<input
				id='searchBarInput'
				value={searchBarValue}
				placeholder='Address or Zip'
				onChange={(e) => setSearchBarValue(e.target.value)}
			/>

			<Button onClick={detectMyLocationClick} className="searchBarButton">
				<p>
					Detect My Location
				</p>
			</Button>

			<Button className="searchBarButton">
				<p>
					Reset
				</p>
			</Button>

			<p style={{ flexBasis: '100%' }}>
				<u>
					My Location:
			</u>
				{/* Todo: Add proper spacing here */}
				{lat}, {lng}
			</p>

		</div>
	)
}

export default LocationSearchBar