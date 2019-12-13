import React from 'react'
import './LocationSearchBar.css'
import Button from '../../Button'
import getLocation from '../../../services/geolocation'

const LocationSearchBar = (props) => {
	const {
		userLocation,
		setUserLocation,
	} = props

	const { lat, lng } = userLocation

	const onClick = async () => {
		const { lat, lng } = await getLocation()
		setUserLocation({ lat, lng })
	}

	console.log('here')

	return (
		<div id='seacrhContainer'>
			<input className='searchBarInput' placeholder='Address or Zip' />

			<Button onClick={onClick} className="searchBarButton">
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
				{lat, lng}
			</p>

		</div>
	)
}

export default LocationSearchBar