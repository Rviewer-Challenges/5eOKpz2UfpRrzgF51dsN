// Components: Header, Navigation, Feed, TextTweet
import Header from './components/Header'
import Navigation from './components/Navigation/Navigation'
import Feed from './components/Feed'
import TextTweet from './components/TextTweet'
import ImageTweet from './components/ImageTweet'
import GifTweet from './components/GifTweet'

// Images
import sampleImageHorizontal from './assets/images/sampleImageHorizontal.jpg'
import sampleImagePortrait from './assets/images/sampleImagePortrait.jpg'
import sampleGif from './assets/images/sampleGif.gif'

const App = () => {
	return (
		<>
			<Header />
			<Navigation />
			<Feed>
				<TextTweet>
					The Law of Eleventy™ demands that you create a starter project as the
					first step of your learning journey. 😅 So, here’s mine:
				</TextTweet>
				<TextTweet>
					The Law of Eleventy™ demands that you create a starter project as the
					first step of your learning journey. 😅 So, here’s mine:
				</TextTweet>
				<TextTweet>
					The Law of Eleventy™ demands that you create a starter project as the
					first step of your learning journey. 😅 So, here’s mine:
				</TextTweet>
				<ImageTweet image={sampleImagePortrait}>
					The Law of Eleventy™ demands that you create a starter project as the
					first step of your learning journey. 😅 So, here’s mine:
				</ImageTweet>
				<GifTweet gif={sampleGif}>
					The Law of Eleventy™ demands that you create a starter project as the
					first step of your learning journey. 😅 So, here’s mine:
				</GifTweet>
			</Feed>
		</>
	)
}

export default App
