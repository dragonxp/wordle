// import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'

function App() {
	const solutions = [
		{"id": 1, "word": "ninja"},
		{"id": 2, "word": "spade"},
		{"id": 3, "word": "pools"},
		{"id": 4, "word": "drive"},
		{"id": 5, "word": "relax"},
		{"id": 6, "word": "times"},
		{"id": 7, "word": "train"},
		{"id": 8, "word": "cores"},
		{"id": 9, "word": "pours"},
		{"id": 10, "word": "blame"},
		{"id": 11, "word": "banks"},
		{"id": 12, "word": "phone"},
		{"id": 13, "word": "bling"},
		{"id": 14, "word": "coins"},
		{"id": 15, "word": "hello"}
	  ]
	const solution = solutions[Math.floor(Math.random() * 15)].word
	// const [solution, setSolution] = useState(null)

	// --> Was using json server to fetch a word. Now keeping solutions in the app for deployment

	// useEffect(() => {
	// 	fetch('http://localhost:3001/solutions')
	// 		.then(res => res.json())
	// 		.then(json => {
	// 			const _t = json[Math.floor(Math.random() * 15)]
	// 			setSolution(_t.word)
	// 		})
	// }, [])

	return (
		<div className="App">
			<h1>Wordle</h1>
			{solution && <Wordle solution={solution} />}
		</div>
	);
}

export default App
