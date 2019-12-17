import React, { useContext } from 'react'
import './PharmacyList.css'
import { ThemeContext } from '../../../App'

const PharmacyCard = ({ pharmacy, pharmacyCardColor }) => {
	const {
		name,
		address,
		phone_number,
	} = pharmacy

	const {
		city,
		state,
		line1,
		zip_code,
	} = address

	return (
		<div key={phone_number} className='cardOuter'>
			<div className='cardInner'>
				<div className='cardHeader'>
					{name}
				</div>
				<div className='cardContent' style={{ backgroundColor: pharmacyCardColor }}>
					<span className="pharmacyInfo">
						{line1} <br />
						{city}, {state}, {zip_code} <br />
						{phone_number} <br />
					</span>
				</div>
			</div>
		</div>
	)
}

const PharmacyList = ({ pharmacies }) => {
	const { pharmacyCardColor } = useContext(ThemeContext)
	const PharmacyCards = pharmacies.map((pharmacy) => PharmacyCard({ pharmacy, pharmacyCardColor }))

	return (
		<div id='pharmacyListContainer'>
			<p id='pharmacyListTitle'>
				Pharmacy List
			</p>

			{PharmacyCards}
		</div>
	)
}

export default PharmacyList