import React from 'react'
import './PharmacyCheckboxes.css'
import Checkbox from '../../Checkbox'

const PharmacyCheckboxes = (props) => {
	const {
		pharmacyFilter,
		setPharmacyFilter,
	} = props

	return (
		<div id='checkboxesContainer'>
			<p id='pharmacyCheckboxesTitle' style={{ flexBasis: '100%' }}>
				Filter Pharmacies
			</p>

			{
				// Todo: Place checkbox component in this file or make it able to use more globally
				Object.entries(pharmacyFilter).map(
					([pharmacyName, { checked }]) => <Checkbox
						key={pharmacyName}  {...{ pharmacyName, checked, setPharmacyFilter, pharmacyFilter }}
					/>
				)
			}
		</div>
	)
}

export default PharmacyCheckboxes