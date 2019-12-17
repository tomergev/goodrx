import React from 'react'
import './Button.css'

const Button = (props) => {
	const {
		id,
		type,
		style,
		onClick,
		children,
		className,
	} = props

	return (
		<button
			id={id}
			type={type}
			style={style}
			onClick={onClick}
			className={`defaultButtonStyles ${className}`}
		>
			{children && children}
		</button>
	)
}

export default Button