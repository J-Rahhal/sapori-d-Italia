import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
};

export default Template;
