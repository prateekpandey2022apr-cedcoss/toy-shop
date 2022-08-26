export function CartTotal(cart) {
  return cart.reduce((total, current) => {
    return total + current.price * current.quantity;
  }, 0);
}
