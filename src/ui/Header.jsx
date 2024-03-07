import { Link } from "react-router-dom";
import SreachOrder from "../features/order/SreachOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3">
      <Link className="uppercase tracking-widest" to="/">
        Fast react pizza co.
      </Link>

      <SreachOrder />
      <Username />
    </header>
  );
}

export default Header;
