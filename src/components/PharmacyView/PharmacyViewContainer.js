import React, { useState, useEffect, useMemo } from 'react'
import getLocation from '../../services/geolocation'
import PharmacyViewPresentation from './PharmacyViewPresentation'
import LocationSearchBar from './LocationSearchBar'

const PharmacyViewContainer = () => {
	const [userLocation, setUserLocation] = useState({ lat: null, lng: null })

	useEffect(() => {
		const updateUserLocation = async () => {
			const { lat, lng } = await getLocation()
			setUserLocation({ lat, lng })
		}

		updateUserLocation()
	}, [])

	const [pharmacyFilter, setPharmacyFilter] = useState({
		Walmart: { checked: false },
		CVS: { checked: false },
		Walgreens: { checked: false },
		Target: { checked: false },
		'Rite-Aid': { checked: false },
		Ralphs: { checked: false },
		Vons: { checked: false },
		Costco: { checked: false },
	})

	const memoizedLocationSearchBar = useMemo(() => (
		<LocationSearchBar
			{...{
				userLocation,
				setUserLocation,
			}}
		/>
	), [userLocation])

	return (
		<React.Fragment>
			{memoizedLocationSearchBar}

			<PharmacyViewPresentation
				{...{
					pharmacyFilter,
					setPharmacyFilter,
				}}
			/>
		</React.Fragment>
	)
}

export default PharmacyViewContainer