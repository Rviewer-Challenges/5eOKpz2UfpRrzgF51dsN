// Image
import profilePicture from '../assets/images/profile.jpg'

// Components: TweetHeader, TweetFooter
import TweetFooter from './TweetFooter/TweetFooter'
import TweetHeader from './TweetHeader'
import TweetAvatar from './TweetAvatar'

const TextTweet = ({ children }) => {
	return (
		<div className='flex w-full h-36 px-4 py-3 pb-8 border border-b-1 border-black/10 border-x-0 border-t-0 hover:cursor-pointer'>
			<TweetAvatar picture={profilePicture} />
			<div className='w-full'>
				<TweetHeader name={'Bryan Martínez'} username={'thebryanmartinez'} hour={7}/>
				<div className=''>{!children ? <p>This is a tweet</p> : children}</div>
				<TweetFooter retweets={10000} comments={1000} likes={2}/>
			</div>
		</div>
	)
}

export default TextTweet
