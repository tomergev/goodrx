import React from 'react'
import styles from './Button.css'

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
			// style={{...styles.defaultButtonStyles ,...style}}
			style={style}
			onClick={onClick}
			// className={className}
			className={`${className} defaultButtonStyles`}
		>
			{children && children}
		</button>
	)
}

export default Button