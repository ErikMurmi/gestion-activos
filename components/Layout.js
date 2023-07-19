import SideBar from "./SideBar";
export const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <SideBar />
      <div className="page">{children}</div>
    </div>
  );
};
