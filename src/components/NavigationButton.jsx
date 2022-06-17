import { useState } from 'react'

const NavigationButton = ({ children }) => {
	return (
		<a href='#' className='w-full h-full flex items-center justify-center'>
			<div className=' flex w-[34px] h-[34px] items-center justify-center rounded-full hover:bg-black hover:bg-opacity-10 hover:cursor-pointer'>
				{children}
			</div>
		</a>
	)
}

export default NavigationButton
