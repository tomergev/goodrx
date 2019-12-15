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
}




export default Checkbox