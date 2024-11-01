import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex, Input } from 'antd';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { AmericanFlag } from '../../assets/icons/AmericanFlag';
import { IconPhone } from '../../assets/icons/IconPhone';
import { IconSearch } from '../../assets/icons/IconSearch';
import { IndiaFlag } from '../../assets/icons/IndiaFlag';
import Logo from '../../assets/icons/Logo';
import './header.scss';
import { useUser } from '../../context';
import { useNavigate } from 'react-router-dom';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Header = memo(() => {
    const { user, logout } = useUser();
    
    const navigate = useNavigate();

    const handleProfileClick = () => {
        if (!user) {
            navigate('/login');
        } else {
            navigate('/profile-page');
        }
    };

    return (
        <>
            <div className="header">
                <Flex align="center" justify="space-between" className="header-top">
                    <Flex align="center" gap={24} className="left-content">
                        <Link to="/">Home</Link>
                        <Link to="/find-job">Find Job</Link>
                        <Link to="/find-employer">Find Employers</Link>
                        <Link to="">Dashboard</Link>
                        <Link to="">Job Alerts</Link>
                        <Link to="">Customer Supports</Link>
                    </Flex>
                    <Flex align="center" gap={24} className="right-content">
                        <Flex align="center" gap={8}>
                            <IconPhone />
                            <span>+1-202-555-0178</span>
                        </Flex>
                        <Flex align="center" gap={8}>
                            <AmericanFlag />
                            <span>English</span>
                        </Flex>
                    </Flex>
                </Flex>
            </div>
            <Flex justify="space-between" className="header-bottom">
                <Flex gap={12}>
                    <Logo />
                    <Flex align="center" className="search-wrapper">
                        <Flex align="center" gap={8} className="flag-wrapper">
                            <IndiaFlag />
                            <span>India</span>
                        </Flex>
                        <Input
                            placeholder="Job title, keyword, company"
                            prefix={<IconSearch />}
                        />
                    </Flex>
                </Flex>
                <div 
                    onClick={handleProfileClick} 
                    className="flex items-center cursor-pointer p-2 hover:bg-gray-100 rounded transition duration-150"
                >
                    <Avatar className='mr-2' size={48} src={user?.profilePicture || <UserOutlined />} />
                    <Button className="mx-6 flex items-center h-8 hover:h-full" variant="outlined">{user ? user.username : 'Login'}</Button>
                </div>
                {user && (
                    
                    <div className='flex items-center'>
                        <Button className='flex items-center h-8 hover:h-full' variant="outlined" onClick={logout} >Logout</Button>
                    </div>
                )}
            </Flex>
        </>
    );
});

export default Header;
