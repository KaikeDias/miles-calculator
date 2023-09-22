import "./styles.css"

interface DecreaseMilesButtonProps{
    decreaseMilesBy1K: () => void;
    decreaseMilesBy10K: () => void;
}

export default function DecreaseMilesButton({decreaseMilesBy1K, decreaseMilesBy10K}: DecreaseMilesButtonProps) {
    return (
        <div>
            <button onClick={decreaseMilesBy1K} id="decrease-1k">-1K</button>
            <button onClick={decreaseMilesBy10K}id="decrease-10k">-10K</button>
        </div>
    )
}