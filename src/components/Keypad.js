export default function Keypad({ usedKeys }) {
    const letters = [
        { "key": "a" },
        { "key": "b" },
        { "key": "c" },
        { "key": "d" },
        { "key": "e" },
        { "key": "f" },
        { "key": "g" },
        { "key": "h" },
        { "key": "i" },
        { "key": "j" },
        { "key": "k" },
        { "key": "l" },
        { "key": "m" },
        { "key": "n" },
        { "key": "o" },
        { "key": "p" },
        { "key": "q" },
        { "key": "r" },
        { "key": "s" },
        { "key": "t" },
        { "key": "u" },
        { "key": "v" },
        { "key": "w" },
        { "key": "x" },
        { "key": "y" },
        { "key": "z" }
    ]

    return (
        <div className='keypad'>
            {letters.map((l) => {
                return <div key={l.key} className={usedKeys[l.key] ? usedKeys[l.key] : ''} >{l.key}</div>
            })}
        </div>
    )
}