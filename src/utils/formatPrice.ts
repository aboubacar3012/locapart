export function formatPrice(price:number) {
  const total = new Intl.NumberFormat('fr-FR', {maximumSignificantDigits:3}).format(price)
  return total + " GNF";
}