import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function LogoutBtn() {
  const navigation = useNavigate();
  const handleLogout = () => {
    Cookies.remove("jwtToken");
    navigation("/login");
  };
  return (
    <Link to="/login">
      <button
        className="bg-buttonBackgroundColor p-2 rounded-md text-[14px] "
        onClick={handleLogout}
      >
        Logout
      </button>
    </Link>
  );
}

export default LogoutBtn;
