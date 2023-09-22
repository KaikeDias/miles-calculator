import React, { useState } from 'react';
import './styles.css'
import MilesInput from '../milesInput';
import PriceDisplay from '../priceDisplay';
import calculatePrice from '../../utils/calculatePrice';
import IncreaseMilesButton from '../increaseMilesButton';
import DecreaseMilesButton from '../decreaseMilesButton';
import PercentualDiscountButton from '../percentualDiscountButton';

export default function MilesCalculator() {
  const [miles, setMiles] = useState<number>(0);
  const [pricePerThousand, setPricePerThousand] = useState<number>(0);
  const [bonus, setBonus] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0)
  const [showPrice, setShowPrice] = useState<boolean>(false)
  const [finalPricePerThousand, setFinalPricePerThousand] = useState<number>(0);

  const handleCalculate = () => {
    const result = calculatePrice(miles,pricePerThousand,bonus, discount);
    setFinalPricePerThousand(result);
    setShowPrice(true)
  };

  const increaseMilesBy1K = () => {
    setMiles(miles+1000);
  }

  const increaseMilesBy10K = () => {
    setMiles(miles+10000);
  }

  const decreaseMilesBy1K = () => {
    setMiles(miles-1000);
  }

  const decreaseMilesBy10K = () => {
    setMiles(miles-10000);
  }

  const set80 = () => {
    setBonus(80);
  }

  const set100 = () => {
    setBonus(100);
  }

  const set150 = () => {
    setBonus(150);
  }

  const set200 = () => {
    setBonus(200);
  }

  const set250 = () => {
    setBonus(250);
  }

  const set300 = () => {
    setBonus(300);
  }

  return (
    <div>
    <div className="form-group">
    <div className="miles-container">
      <DecreaseMilesButton decreaseMilesBy1K={decreaseMilesBy1K} decreaseMilesBy10K={decreaseMilesBy10K}/>
      <MilesInput
        label="Milhas"
        value={miles}
        onChange={(value) => setMiles(value)}
      />
      <IncreaseMilesButton increaseMilesBy1K={increaseMilesBy1K} increaseMilesBy10K={increaseMilesBy10K}/>
    </div>
      <MilesInput
        label="Preço por Milheiro"
        value={pricePerThousand}
        onChange={(value) => setPricePerThousand(value)}
      />

      <MilesInput
        label="Desconto"
        value={discount}
        onChange={(value) => setDiscount(value)}
      />

      <MilesInput
        label="Bonus"
        value={bonus}
        onChange={(value) => setBonus(value)}
      />

      <PercentualDiscountButton set80={set80} set100={set100} set150={set150} set200={set200} set250={set250} set300={set300}/>
    </div>

    <button onClick={handleCalculate}>Calcular</button>

    {showPrice && <PriceDisplay price={finalPricePerThousand}/>}

  </div>
  );
}
