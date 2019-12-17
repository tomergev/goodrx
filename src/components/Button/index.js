import React from 'react'
import './Button.css'

const Button = (props) => {
	const {
		type,
		style,
		onClick,
		children,
		className,
	} = props

	return (
		<button
			id='defaultButtonStyles'
			className={className}
			onClick={onClick}
			style={style}
			type={type}
		>
			{children && children}
		</button>
	)
}

export default Button