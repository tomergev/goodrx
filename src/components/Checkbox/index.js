import React from 'react'
import './Checkbox.css'

const Checkbox = (props) => {
	const {
		checked,
		pharmacyName,
		pharmacyFilter,
		setPharmacyFilter, 
	} = props

	return (
		<div key={pharmacyName} className="checkbox">
			<input
				value={pharmacyName}
				name={pharmacyName}
				checked={checked}
				type="checkbox"
				onChange={(e) => setPharmacyFilter({
					...pharmacyFilter,
					[e.target.name]: { checked: !pharmacyFilter[e.target.name].checked }
				})}
			/>
			<span>{pharmacyName}</span>
		</div>
	)
}




export default Checkbox