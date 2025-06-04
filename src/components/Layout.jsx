import { Outlet } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";

export default function Layout() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center p-4">
        <ToastContainer
          position="top-center"
          theme="colored"
          transition={Bounce}
        />
        <Outlet />
      </div>
    </>
  );
}
