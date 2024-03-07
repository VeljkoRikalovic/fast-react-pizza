import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decriseItem, incriseItem } from "./cartSlice";

function UpdateCartQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button onClick={() => dispatch(incriseItem(pizzaId))} type="round">
        +
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button onClick={() => dispatch(decriseItem(pizzaId))} type="round">
        -
      </Button>
    </div>
  );
}

export default UpdateCartQuantity;
