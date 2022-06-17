import Avatar from '@mui/material/Avatar'
import profilePicture from '../assets/images/profile.jpg'
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined'
const Header = () => {
	return (
		<header className='flex fixed z-10 left-0 top-0 h-[53px] w-full bg-white px-4 items-center border'>
			<div className='mr-[21px]'>
				<Avatar sx={{ width: 32, height: 32 }} src={profilePicture} />
			</div>
			<h1 className='font-bold text-black text-[17px] w-[80%]'>Home</h1>
			<div className='flex w-[34px] h-[34px] justify-center items-center rounded-full hover:bg-black hover:bg-opacity-10 hover:cursor-pointer '>
				<FlareOutlinedIcon /> 
			</div>
		</header>
	)
}

export default Header
