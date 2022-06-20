// Icons
import Avatar from '@mui/material/Avatar'
import profilePicture from '../assets/images/profile.jpg'

// Components: TweetHeader, TweetFooter
import TweetFooter from './TweetFooter/TweetFooter'
import TweetHeader from './TweetHeader'

const TextTweet = ({ children }) => {
	return (
		<div className='flex w-full h-36 px-4 py-3 pb-8 border border-b-1 border-black/10 border-x-0 border-t-0'>
			<div className='mr-3'>
				<Avatar sx={{ width: 48, height: 48 }} src={profilePicture} />
			</div>
			<div className='w-full'>
				<TweetHeader name={'Bryan Martínez'} username={'thebryanmartinez'} hour={7}/>
				<div className=''>{!children ? <p>This is a tweet</p> : children}</div>
				<TweetFooter retweets={10} likes={2}/>
			</div>
		</div>
	)
}

export default TextTweet
