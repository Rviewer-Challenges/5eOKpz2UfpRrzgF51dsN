import CircleIcon from '@mui/icons-material/Circle'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const TweetHeader = ({ name, username, hour }) => {
	return (
		<div className='w-full flex items-center mt-[-8px] justify-between'>
			<div>
				<span className='name'>{name} </span>
				<span className='username'>@{username}</span>
				<span className='text-gray mx-2'>
					<CircleIcon sx={{ fontSize: 3 }}></CircleIcon>
				</span>
				<span className='text-gray'>{hour}h</span>
			</div>
			<div className='hovershadow hover:text-blue hover:bg-blue hover:bg-opacity-10'>
				<MoreHorizIcon />
			</div>
		</div>
	)
}

export default TweetHeader
