import React from "react";

interface PriceDisplayProps {
    price: number;
}

export default function PriceDisplay({price}: PriceDisplayProps) {
    return (
        <div className="price-display">
            Custo por milherio: R$ {price.toFixed(2)} &#x1F44D;
        </div>
    );
}