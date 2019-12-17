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

	const detectMyLocationClick = async () => {
		const { lat, lng } = await getLocation()
		setUserLocation({ lat, lng })
	}

	const resetClick = () => setSearchBarValue('')
	const { buttonColor } = useContext(ThemeContext)

	return (
		<div id='seacrhContainer'>
			<input
				id='searchBarInput'
				value={searchBarValue}
				placeholder='	Address or Zip'
				onChange={(e) => setSearchBarValue(e.target.value)}
			/>

			<Button
				style={{ background: buttonColor }}
				onClick={detectMyLocationClick}
				className="searchBarButton"
			>
				<p>
					Detect My Location
				</p>
			</Button>

			<Button
				style={{ background: buttonColor }}
				className="searchBarButton"
				onClick={resetClick}
			>
				<p>
					Reset
				</p>
			</Button>

			<p id='userLatLng' >
				<u>
					My Location:
			</u>
				{'   '  /* Adding Space */}
				{lat}, {lng}
			</p>

		</div>
	)
}

export default LocationSearchBar