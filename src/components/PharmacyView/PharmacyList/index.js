import React from 'react'
import './PharmacyList.css'

const PharmacyCard = (props) => {
	const {
		name,
		address,
		phone_number,
	} = props

	const {
		city,
		state,
		line1,
		zip_code,
	} = address

	return (
		<div key={phone_number} className='card'>
			<div className='cardHeader'>
				{name}
			</div>
			<div className='cardContent'>
				<span>{line1}</span>
				<p>{city} {state}, {zip_code}</p>
				<p>{phone_number}</p>
			</div>
		</div>
	)
}

const PharmacyList = ({ pharmacies }) => {
	const PharmacyCards = pharmacies.map(PharmacyCard)

	return (
		<div id='pharmacyListContainer'>
			<p style={{ flexBasis: '100%' }}>
				Pharmacy List
			</p>

			{PharmacyCards}
		</div>
	)
}

export default PharmacyList