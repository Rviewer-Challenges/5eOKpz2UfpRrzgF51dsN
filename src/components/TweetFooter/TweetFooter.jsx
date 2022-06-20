// Icons
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'

// Component: TweetFooterButton
import TweetFooterButton from './TweetFooterButton'

const TweetFooter = ({ comments, likes, retweets }) => {
	return (
		<div className='flex items-center my-4 w-full justify-between text-[13px]'>
			<TweetFooterButton color={'text-blue'} number={comments}>
				<ModeCommentOutlinedIcon sx={{ width: 18.75, height: 18.75 }} />
			</TweetFooterButton>
			<TweetFooterButton color={'text-[#00BA7C]'} number={retweets}>
				<LoopOutlinedIcon sx={{ width: 18.75, height: 18.75 }} />
			</TweetFooterButton>
			<TweetFooterButton color={'text-[#f91881]'} number={likes}>
				<FavoriteBorderOutlinedIcon sx={{ width: 18.75, height: 18.75 }} />
			</TweetFooterButton>
			<TweetFooterButton color={'text-blue'}>
				<FileUploadOutlinedIcon sx={{ width: 18.75, height: 18.75 }} />
			</TweetFooterButton>
		</div>
	)
}

export default TweetFooter
