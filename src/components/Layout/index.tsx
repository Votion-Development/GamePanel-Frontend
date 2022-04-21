import { AppShell } from '@mantine/core';
import { FC, ReactElement } from 'react';
import StolenNavbar from './Navbar';

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
	return <AppShell navbar={<StolenNavbar />}>{children}</AppShell>;
};

export default Layout;
