import { Outlet } from "react-router";

function HomeLayout() {
  return (
    <>
      <nav>
        <span className="text-primary text-4xl">Comfy</span>
      </nav>
      <Outlet />
    </>
  );
}

export default HomeLayout;
