export default function Row({ guess, currentGuess }) {

	if (guess) {
		return (
			<div className="row past">
				{guess.map((letter, index) => (
					<div key={index} className={letter.color}>{letter.key}</div>
				))}
			</div>
		)
	}

	if (currentGuess) {
		let letters = currentGuess.split('')
		letters = [...letters, ...Array(5 - letters.length)]

		return (
			<div className="row current">
				{letters.map((letter, index) => (
					<div key={index} className={letter ? 'filled' : ''}>{letter}</div>
				))}
			</div>
		)
	}

	return (
		<div className="row">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}