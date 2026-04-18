import { NavLink, Outlet } from "react-router";

function HomeLayout() {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/checkout">Checkout</NavLink>
          <NavLink to="/orders">Orders</NavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default HomeLayout;
