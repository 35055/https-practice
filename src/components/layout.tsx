import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "30px" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Layout;
