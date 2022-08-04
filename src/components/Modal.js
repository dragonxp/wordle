export default function Modal({ isCorrect, turn, solution }) {
    return (
        <div className="modal">
            {isCorrect && (
                <div>
                    <h1>You Win !!</h1>
                    <p className="solution">{solution}</p>
                    <p>You won in {turn} guesses :)</p>
                </div>

            )}

            {!isCorrect && (
                <div>
                    <h1>You Lost !!</h1>
                    <p className="solution">{solution}</p>
                    <p>Better luck next time :)</p>
                </div>
            )}
        </div>
    )
}