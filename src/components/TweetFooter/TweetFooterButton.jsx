const TweetFooterButton = ({ children, color, number }) => {
	return (
		<div className={`flex items-center hover:cursor-pointer hover:${color}`}>
			<div className={`hovershadow hover:${color} hover:bg-opacity-10`}>
				{children}
			</div>
			<span>{number}</span>
		</div>
	)
}

export default TweetFooterButton
