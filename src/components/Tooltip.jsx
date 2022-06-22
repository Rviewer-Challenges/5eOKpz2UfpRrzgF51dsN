import { useState } from 'react'

const Tooltip = ({ children, text }) => {
	const [isHovering, setIsHovering] = useState(false)

	const hoverMouseEnter = () => {
		setTimeout(() => {
			setIsHovering(true)
		}, 1000)
	}
	const hoverMouseLeave = () => {
		setIsHovering(false)
	}

	return (
		<div onMouseEnter={hoverMouseEnter} onMouseLeave={hoverMouseLeave}>
			{children}
			{isHovering && (
				<p className='absolute bg-[#0A1419] bg-opacity-70 text-white text-[10px] mt-[2px] right-1 p-[2px]'>
					{text}
				</p>
			)}
		</div>
	)
}

export default Tooltip
