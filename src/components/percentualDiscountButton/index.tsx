import "./styles.css"

interface PercentualDiscountButtonProps {
    set80: () => void;
    set100: () => void;
    set150: () => void;
    set200: () => void;
    set250: () => void;
    set300: () => void;
}

export default function PercentualDiscountButton({set80, set100, set150, set200, set250, set300}: PercentualDiscountButtonProps) {
    return (
        <div className="percentual-buttons">
            <button onClick={set80}>80%</button>
            <button onClick={set100}>100%</button>
            <button onClick={set150}>150%</button>
            <button onClick={set200}>200%</button>
            <button onClick={set250}>250%</button>
            <button onClick={set300}>300%</button>
        </div>
    )
}