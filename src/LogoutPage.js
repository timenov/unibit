import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogoutPage() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("user");
        window.dispatchEvent(new Event('storage'))
        navigate("/");
    }, [navigate]);
}

export default LogoutPage;