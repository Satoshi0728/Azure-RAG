'use client';

import React from "react";
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import SideMenu from '@/components/Sidemenu/SideMenu';

    const MainLayout = ({children} :{children: React.ReactNode}) => {
        return (
            <div className="flex h-screen">
                <Provider store={store}>
                {<SideMenu />}
                <main className="bg-state-50 flex-1 overflow-auto">{children}</main>
                </Provider>
            </div>
        )
    }

export default MainLayout