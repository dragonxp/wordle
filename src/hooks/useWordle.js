import { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState([])

    // format a guess into an array of letter objects 
    // e.g. [{key: 'a', color: 'yellow'}]
    const formatGuess = () => {
        const solutionArray = [...solution]
        const formattedGuess = [...currentGuess].map(guess => {
            return { key: guess, color: 'grey' }
        })

        // check for green letters
        formattedGuess.forEach((letter, index) => {
            if (solutionArray[index] === letter.key) {
                formattedGuess[index].color = 'green'
                solutionArray[index] = null
            }
        })

        // check for yellow letters
        formattedGuess.forEach((letter, index) => {
            if (solutionArray.includes(letter.key) && letter.color !== 'green') {
                formattedGuess[index].color = 'yellow'
                solutionArray[solutionArray.indexOf(letter.key)] = null
            }
        })

        return formattedGuess
    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addGuess = (formattedGuess) => {
        if (currentGuess === solution) setIsCorrect(true)

        setGuesses(prev => {
            let newGuesses = [...prev]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })
        
        setTurn(prev => prev + 1)
        setHistory(prev => [...prev, currentGuess])
        setUsedKeys(prev => {
            let newKeys = { ...prev }

            formattedGuess.forEach((l) => {
                const cc = newKeys[l.key]

                if (l.color === 'green') newKeys[l.key] = 'green'
                else if (l.color === 'yellow' && cc !== 'green') newKeys[l.key] = 'yellow'
                else if (l.color === 'grey' && cc !== 'green' && cc !== 'yellow') newKeys[l.key] = 'grey'
            })

            return newKeys
        })

        setCurrentGuess('')
    }

    // handle keyup event & track current guess
    // if user presses enter, add the new guess
    const handleKeyUp = ({ key }) => {
        if (key === 'Enter') {
            // turn is <= 5
            if (turn > 5) return console.log('No more turns available')
            // history doesn't include the currentGuess
            if (history.includes(currentGuess)) return console.log('word already guessed')
            //currentGuess length is 5
            if (currentGuess.length < 5) return console.log('Word must be 5 characters long')

            const formattedGuess = formatGuess()
            addGuess(formattedGuess)
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev) => prev.slice(0, -1))
            return
        }  

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => prev + key)
            }
        }
    }

    return { handleKeyUp, turn, currentGuess, guesses, isCorrect, usedKeys }
}

export default useWordle