import React from 'react'
import './PharmacyCheckboxes.css'

const FilterPharmacies = (props) => {
	const {
		pharmacyFilter,
		setPharmacyFilter,
	} = props

	const Checkbox = ([pharmacyName, { checked }]) => (
		<div key={pharmacyName} className="checkbox">
			<input
				type="checkbox"
				checked={checked}
				name={pharmacyName}
				value={pharmacyName}
				onChange={(e) => setPharmacyFilter({
					...pharmacyFilter,
					[e.target.name]: {
						...pharmacyFilter[e.target.name],
						checked: !pharmacyFilter[e.target.name].checked,
					}
				})}
			/>
			<span>{pharmacyName}</span>
		</div>
	)

	const PharmacyCheckboxes = Object.entries(pharmacyFilter).map(Checkbox)

	return (
		<div id='checkboxesContainer'>
			<p id='pharmacyCheckboxesTitle'>
				Filter Pharmacies
			</p>

			{PharmacyCheckboxes}
		</div>
	)
}

export default FilterPharmacies