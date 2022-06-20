import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'

const TweetFooter = ({ comments, likes, retweets }) => {
	return (
		<div className='flex items-center my-4 w-full justify-between text-[13px]'>
			<div className='flex items-center hover:text-blue'>
				<div className='hovershadow hover:bg-blue hover:bg-opacity-10'>
					<ModeCommentOutlinedIcon sx={{ width: 18.75, height: 18.75 }} />
				</div>
				<span>{comments}</span>
			</div>
			<div className='flex items-center hover:text-[#00BA7C]'>
				<div className='hovershadow hover:bg-[#00BA7C] hover:bg-opacity-10'>
					<LoopOutlinedIcon sx={{ width: 18.75, height: 18.75 }} />
				</div>
				<span>{retweets}</span>
			</div>
			<div className='flex items-center hover:text-[#f91881]'>
				<div className='hovershadow hover:bg-[#f91881] hover:bg-opacity-10'>
					<FavoriteBorderOutlinedIcon sx={{ width: 18.75, height: 18.75 }} />
				</div>
				<span>{likes}</span>
			</div>
			<div className='flex items-center hover:text-blue'>
				<div className='hovershadow hover:bg-blue hover:bg-opacity-10'>
					<FileUploadOutlinedIcon sx={{ width: 18.75, height: 18.75 }} />
				</div>
			</div>
		</div>
	)
}

export default TweetFooter
