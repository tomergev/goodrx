import React from 'react'
import './PharmacyView.css'
import Button from '../Button'
import Checkbox from '../Checkbox'

const PharmacyViewPresentation = (props) => {
	const {
		pharmacyFilter,
		setPharmacyFilter,
	} = props

	return (
		<React.Fragment>
			{/* <div id='seacrhContainer'>
				<input className='searchBarInput' placeholder='Address or Zip' />

				<Button className="searchBarButton">
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

			</div> */}

			<div id='checkboxesContainer'>
				<p style={{ flexBasis: '100%' }}>
					Filter Pharmacies
				</p>

				{Object.entries(pharmacyFilter).map(
					([pharmacyName, { checked }]) => <Checkbox
						key={pharmacyName}  {...{ pharmacyName, checked, setPharmacyFilter, pharmacyFilter }}
					/>
				)}
			</div>
		</React.Fragment>

	)
}

export default PharmacyViewPresentation