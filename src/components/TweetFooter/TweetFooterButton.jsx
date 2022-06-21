const TweetFooterButton = ({ children, color, number }) => {
	return (
		<div className={`flex items-center hover:cursor-pointer hover:${color} transition-all`}>
			<div className={`hovershadow hover:${color} hover:bg-opacity-10 transition-all`}>
				{children}
			</div>
			<span>{number}</span>
		</div>
	)
}

export default TweetFooterButton
