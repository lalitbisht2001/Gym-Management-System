import { createContext, useState, useEffect } from 'react';

export const sharedContext = createContext();

export const SharedProvider = ({ children }) => {
    // State to store the email and user ID
    const [sharedData, setSharedData] = useState('');
    const [userId, setUserId] = useState('');  // For storing the user ID

    // State for login status
    const [isLogin, setIsLogin] = useState(() => {
        return localStorage.getItem('isLogin') === 'true';
    });

    // Class pricing data
    const Price = {
        cycling: {
            Beginner: 1000,
            Intermediate: 1500,
            Advanced: 3000,
        },
        bodybuilding: {
            Beginner: 1200,
            Intermediate: 1500,
            Advanced: 5000,
        },
        meditation: {
            Beginner: 500,
            Intermediate: 1000,
            Advanced: 1500,
        },
        running: {
            Beginner: 700,
            Intermediate: 1500,
            Advanced: 10000,
        },
        martialarts: {
            Beginner: 3000,
            Intermediate: 4500,
            Advanced: 7000,
        },
        karate: {
            Beginner: 1000,
            Intermediate: 1500,
            Advanced: 2000,
        },
    };

    // Load email and user ID from localStorage when component mounts
    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        const storedUserId = localStorage.getItem('userId');
        if (storedEmail) setSharedData(storedEmail);
        if (storedUserId) setUserId(storedUserId);
    }, []);

    // Store isLogin status in localStorage
    useEffect(() => {
        localStorage.setItem('isLogin', isLogin);
    }, [isLogin]);

    // Store email and user ID in localStorage and context state when they change
    useEffect(() => {
        if (sharedData) {
            localStorage.setItem('email', sharedData);
        }
        if (userId) {
            localStorage.setItem('userId', userId);
        }
    }, [sharedData, userId]);

    // Function to store email and user ID in shared data and localStorage
    const storeEmailInSharedData = (email, id) => {
        if (sharedData !== email || userId !== id) {
            localStorage.setItem('email', email);
            localStorage.setItem('userId', id);
            setSharedData(email);
            setUserId(id);
        }
    };

    // Clear email, user ID, and login status from localStorage and context
    const clearSharedData = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('userId');
        localStorage.removeItem('isLogin');
        setSharedData('');
        setUserId('');
        setIsLogin(false);
    };

    return (
        <sharedContext.Provider
            value={{
                sharedData,              // Email of the user
                userId,                  // User ID
                setSharedData,           // Function to set shared data (email)
                setUserId,               // Function to set user ID
                Price,                   // Class pricing data
                storeEmailInSharedData,  // Function to store email and user ID
                isLogin,                 // Login status
                setIsLogin,              // Function to set login status
                clearSharedData,         // Function to clear shared data and logout
            }}
        >
            {children}
        </sharedContext.Provider>
    );
};
