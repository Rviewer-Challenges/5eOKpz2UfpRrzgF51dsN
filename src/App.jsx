// Components: Header, Navigation, Feed, TextTweet
import Header from './components/Header'
import Navigation from './components/Navigation'
import Feed from './components/Feed'
import TextTweet from './components/TextTweet'

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
			</Feed>
		</>
	)
}

export default App
