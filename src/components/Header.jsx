// Icons
import Avatar from '@mui/material/Avatar'
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined'

// Image
import profilePicture from '../assets/images/profile.jpg'

const Header = () => {
	return (
		<header className='flex fixed z-10 left-0 top-0 h-[53px] w-full bg-white px-4 items-center'>
			<div className='mr-[21px]'>
				<Avatar sx={{ width: 32, height: 32 }} src={profilePicture} />
			</div>
			<h1 className='font-bold text-black text-[17px] w-[80%]'>Home</h1>
			<div className='hovershadow hover:bg-black hover:bg-opacity-10'>
				<FlareOutlinedIcon />
			</div>
		</header>
	)
}

export default Header
