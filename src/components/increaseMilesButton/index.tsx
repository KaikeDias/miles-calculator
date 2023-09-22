import "./styles.css"

interface IncreaseMilesButtonProps{
    increaseMilesBy1K: () => void;
    increaseMilesBy10K: () => void;
}

export default function IncreaseMilesButton({increaseMilesBy1K, increaseMilesBy10K}: IncreaseMilesButtonProps) {
  return (
    <div>
      <button onClick={increaseMilesBy1K} id='increase-1k'>+1K</button>
      <button onClick={increaseMilesBy10K} id='increase-10k'>+10K</button>
    </div>
  );
}
