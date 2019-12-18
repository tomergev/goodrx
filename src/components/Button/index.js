import React, { useContext } from 'react'
import './Button.css'
import { ThemeContext } from '../../App'

const Button = (props) => {
	const {
		id,
		type,
		onClick,
		children,
		className,
	} = props

	const { buttonColor } = useContext(ThemeContext)
	const buttonStyle = { background: buttonColor }

	return (
		<button
			id={id}
			type={type}
			onClick={onClick}
			style={buttonStyle}
			className={`defaultButtonStyles ${className}`}
		>
			{children && children}
		</button>
	)
}

export default Button