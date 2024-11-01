import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { getMe } from '../service/Apis/auth';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            // Khôi phục token từ cookie
            const savedToken = Cookies.get('token');
            if (savedToken) {
                setToken(savedToken);
            }

            if (!user) {
                try {
                    const response = await getMe();
                    handleSetUser(response.data); // Sử dụng dữ liệu từ phản hồi API
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchUserData();
    }, [user]); // Gọi lại API khi `user` là null

    const handleSetUser = (userData) => {
        const user = {
            username: userData.username,
            profilePicture: userData.profilePicture || '',
        };
        setUser(user);
        Cookies.set('user', JSON.stringify(user)); // Lưu user vào cookie
    };

    const handleSetToken = (tokenData) => {
        setToken(tokenData);
        Cookies.set('token', tokenData);
    };

    const handleLogout = () => {
        setUser(null);
        setToken('');
        Cookies.remove('user');
        Cookies.remove('token');
    };

    return (
        <UserContext.Provider value={{ user, token, setUser: handleSetUser, setToken: handleSetToken, logout: handleLogout }}>
            {children}
        </UserContext.Provider>
    );
};
