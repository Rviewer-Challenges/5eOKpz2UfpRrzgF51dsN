import HomeIcon from '@mui/icons-material/Home'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import NavigationButton from './NavigationButton'

const Navigation = () => {
	return (
		<nav className='flex fixed left-0 z-10 bottom-0 w-full h-[52px] bg-white border items-center justify-around'>
			<NavigationButton>
				<HomeIcon />
			</NavigationButton>
			<NavigationButton>
				<SearchOutlinedIcon />
			</NavigationButton>
			<NavigationButton>
				<EmailOutlinedIcon />
			</NavigationButton>
			<NavigationButton>
				<NotificationsOutlinedIcon />
			</NavigationButton>
		</nav>
	)
}

export default Navigation
