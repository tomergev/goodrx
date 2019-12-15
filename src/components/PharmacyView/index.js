import React, { useState, useEffect, useMemo } from 'react'

import api from '../../services/api'
import getLocation from '../../services/geolocation'

import PharmacyList from './PharmacyList'
import LocationSearchBar from './LocationSearchBar'
import PharmacyCheckboxes from './PharmacyCheckboxes'

const PharmacyViewContainer = () => {
	const [searchBarValue, setSearchBarValue] = useState('')
	const [userLocation, setUserLocation] = useState({ lat: null, lng: null })

	useEffect(() => {
		const updateUserLocation = async () => {
			const { lat, lng } = await getLocation()
			setUserLocation({ lat, lng })
		}

		updateUserLocation()
	}, [])

	const [pharmacyFilter, setPharmacyFilter] = useState({
		Walmart: { checked: false, chainId: 1 },
		CVS: { checked: false, chainId: 2 },
		Walgreens: { checked: false, chainId: 3 },
		Target: { checked: false, chainId: 6 },
		'Rite-Aid': { checked: false, chainId: 23357 },
		Ralphs: { checked: false, chainId: 20052 },
		Vons: { checked: false, chainId: 93177 },
		Costco: { checked: false, chainId: 31240 },
	})

	const [pharmacies, setPharmacies] = useState([])

	useEffect(() => {
		const fetchPharmacyList = async () => {
			const { lat, lng } = userLocation
			if (!lat && !lng && searchBarValue.length === 0) return

			const chainIdsToFetch = [
				...(pharmacyFilter.Walmart.checked && [{ chain_id: pharmacyFilter.Walmart.chainId }]),
				...(pharmacyFilter.CVS.checked && [{ chain_id: pharmacyFilter.CVS.chainId }]),
				...(pharmacyFilter.Walgreens.checked && [{ chain_id: pharmacyFilter.Walgreens.chainId }]),
				...(pharmacyFilter.Target.checked && [{ chain_id: pharmacyFilter.Target.chainId }]),
				...(pharmacyFilter['Rite-Aid'].checked && [{ chain_id: pharmacyFilter['Rite-Aid'].chainId }]),
				...(pharmacyFilter.Ralphs.checked && [{ chain_id: pharmacyFilter.Ralphs.chainId }]),
				...(pharmacyFilter.Vons.checked && [{ chain_id: pharmacyFilter.Vons.chainId }]),
				...(pharmacyFilter.Costco.checked && [{ chain_id: pharmacyFilter.Costco.chainId }]),
			]

			const params = [
				...chainIdsToFetch,
				...[{ location: searchBarValue.length === 0 ? `${lat},${lng}` : searchBarValue }],
			]

			const { pharmacies } = await api({ params })
			setPharmacies(pharmacies)
		}

		fetchPharmacyList()
	}, [userLocation, searchBarValue, pharmacyFilter])

	const memoizedLocationSearchBar = useMemo(() => (
		<LocationSearchBar
			{...{
				userLocation,
				setUserLocation,
				searchBarValue,
				setSearchBarValue,
			}}
		/>
	), [userLocation, searchBarValue])

	const memoizedPharmacyCheckboxes = useMemo(() => (
		<PharmacyCheckboxes
			{...{
				pharmacyFilter,
				setPharmacyFilter,
			}}
		/>
	), [pharmacyFilter])

	const memoizedPharmacyList = useMemo(() => (
		<PharmacyList
			{...{
				pharmacies
			}}
		/>
	), [pharmacies])

	// Todo: Set Values not to display until the lat and lng of the user are known
	return (
		<React.Fragment>
			{memoizedLocationSearchBar}
			{memoizedPharmacyCheckboxes}
			{memoizedPharmacyList}
		</React.Fragment>
	)
}

export default PharmacyViewContainer