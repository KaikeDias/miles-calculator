export default function calculatePrice(miles: number, pricePerThousand: number, bonus: number, discount: number): number {
    const discountedValue = pricePerThousand - (pricePerThousand * (discount/100))
    const totalMiles = miles + (miles * bonus/100)
    const finalPrice = (discountedValue * 1000)/totalMiles

    return finalPrice;
}