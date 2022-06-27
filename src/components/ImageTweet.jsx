// Components: TweetHeader, TweetFooter, TweetAvatar
import TweetFooter from './TweetFooter/TweetFooter'
import TweetHeader from './TweetHeader'
import TweetAvatar from './TweetAvatar'

const ImageTweet = ({
	children,
	image,
	time,
	retweets,
	comments,
	likes,
	name,
	username,
	profilePicture,
}) => {
	return (
		<div className='noSelect flex w-full px-4 pt-3 border border-b-1 border-black/10 border-x-0 border-t-0 hover:cursor-pointer'>
			<TweetAvatar profilePicture={profilePicture} />
			<div className='w-full'>
				<TweetHeader name={name} username={username} time={time} />
				<div>{!children ? <p>This is a tweet</p> : children}</div>
				<img className='mt-4 rounded-xl' src={image} loading='lazy' />
				<TweetFooter retweets={retweets} comments={comments} likes={likes} />
			</div>
		</div>
	)
}

export default ImageTweet
