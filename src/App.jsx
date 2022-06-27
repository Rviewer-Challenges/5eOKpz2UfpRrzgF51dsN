// Components: Header, Navigation, Feed, TextTweet, ImageTweet, GifTweet, ImagesTweet
import Header from './components/Header'
import Navigation from './components/Navigation/Navigation'
import Feed from './components/Feed'
import TextTweet from './components/TextTweet'
import ImageTweet from './components/ImageTweet'
import GifTweet from './components/GifTweet'
import ImagesTweet from './components/ImagesTweet'

// Images
import profilePicture from './assets/images/profile.jpg'
import sampleImageHorizontal from './assets/images/sampleImageHorizontal.jpg'
import sampleImagePortrait from './assets/images/sampleImagePortrait.jpg'
import sampleGif from './assets/images/sampleGif.gif'
import sampleAvatar1 from './assets/images/sampleAvatar1.jpg'
import sampleAvatar2 from './assets/images/sampleAvatar2.jpg'
import sampleAvatar3 from './assets/images/sampleAvatar3.jpg'


const App = () => {
	return (
		<>
			<Header />
			<Navigation />
			<Feed>
				<TextTweet profilePicture={profilePicture} name={'Bryan Martínez'} username={'thebryanmartz'} time={'7w'} likes={700699} comments={675401} retweets={78252}>
					The Law of Eleventy™ demands that you create a starter project as the
					first step of your learning journey. 😅 So, here’s mine:
				</TextTweet>
				<TextTweet profilePicture={sampleAvatar1} name={'Jeanie Sullivan'} username={'jsully840'} time={'23h'} likes={2870} comments={101251} retweets={329297}>
					The Law of Eleventy™ demands that you create a starter project as the
					first step of your learning journey. 😅 So, here’s mine:
				</TextTweet>
				<ImageTweet profilePicture={sampleAvatar2} name={'Walker Fritz'} username={'walkerfrights7'} time={'18d'} likes={824954} comments={14607} retweets={652049} image={sampleImagePortrait}>
					The Law of Eleventy™ demands that you create a starter project as the
					first step of your learning journey. 😅 So, here’s mine:
				</ImageTweet>
				<GifTweet profilePicture={sampleAvatar3} name={'Alicia Cooley'} username={'aliceinwonderland'} time={'18d'} likes={514843} comments={367409} retweets={99366} gif={sampleGif}>
					The Law of Eleventy™ demands that you create a starter project as the
					first step of your learning journey. 😅 So, here’s mine:
				</GifTweet>
				<ImagesTweet profilePicture={profilePicture} name={'Bryan Martínez'} username={'thebryanmartz'} time={'27s'} likes={819654} comments={859543} retweets={781}>

				</ImagesTweet>
			</Feed>
		</>
	)
}

export default App
