import { useEffect, useState } from "react";
import axios from "axios";

const Middleware = ({ children = null }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get('http://localhost:3030/api/course', {
                    withCredentials: true, // Ensure cookies are sent with the request
                });
                setIsAuthenticated(res.data.isAuthenticated);
            } catch (err) {
                console.error("Error checking authentication:", err);
                setIsAuthenticated(false); // Set to false if an error occurs
            }
        };

        checkAuth();
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    if (isAuthenticated === null) {
        return <div>Loading...</div>; // Loading state while checking authentication
    }

    if (!isAuthenticated) {
        window.location.href = "/login"; // Redirect to login if not authenticated
        return null; // Prevent further rendering
    }

    return children; // Render children if authenticated
};

export default Middleware;
