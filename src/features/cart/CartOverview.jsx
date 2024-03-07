import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const quantity = useSelector(getTotalQuantity);
  const price = useSelector(getTotalPrice);
  if (quantity === 0) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 md:py-6">
      <p className="space-x-4 font-semibold text-stone-200 sm:space-x-6">
        <span>
          {quantity} {quantity === 1 ? "pizza" : "pizzas"}
        </span>
        <span>{formatCurrency(price)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
