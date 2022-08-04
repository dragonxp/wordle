import { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

export default function Wordle({ solution }) {
	const { handleKeyUp, turn, currentGuess, guesses, isCorrect, usedKeys } = useWordle(solution)
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		window.addEventListener('keyup', handleKeyUp)

		if (isCorrect || turn > 5) {
			window.removeEventListener('keyup', handleKeyUp)
			setTimeout(() => setShowModal(true), 2000)
		}

		return () => window.removeEventListener('keyup', handleKeyUp)
	}, [handleKeyUp, isCorrect, turn])

	return (
		<div>
			<Grid turn={turn} currentGuess={currentGuess} guesses={guesses} />
			<Keypad usedKeys={usedKeys} />
			{showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
		</div>
	)
}