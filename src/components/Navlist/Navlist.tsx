import React from 'react';
import { BsRocketTakeoff } from 'react-icons/bs';
import { FaRocket } from 'react-icons/fa';
import NavItem from './NavItem';
import { LuPiggyBank } from "react-icons/lu";


interface NavItemType {
    id: number;
    label: string;
    link: string;
    icon: React.ReactNode;
}

const NavList = () => {
    const navList: NavItemType[] = [
        { id: 1, label: 'On Your Data', link: '/', icon: <LuPiggyBank className='size-5' /> },
        // { id: 2, label: 'On Your Data2', link: '/', icon: <LuPiggyBank className='size-5' /> },
    ]

    return (
        <div className='mt-12'>
            {
                navList.map((navItem) => {
                    return (
                        <NavItem
                            label={navItem.label}
                            link={navItem.link}
                            icon={navItem.icon}
                            key={navItem.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default NavList;