import React, { useMemo, useState } from 'react';
import useStyles from './Layout.styles';
import { Navbar, Code, Group } from '@mantine/core';
import {
	Settings,
	SwitchHorizontal,
	Logout,
	Home,
	Server,
	Users,
	DeviceGamepad,
} from 'tabler-icons-react';

const data = [
	{ link: '/dashboard/', label: 'Home', icon: Home },
	{ link: '/dashboard/admin/settings', label: 'Settings', icon: Settings },
	{ link: '/dashboard/admin/users', label: 'Users', icon: Users },
	{ link: '/dashboard/admin/nodes', label: 'Nodes', icon: Server },
	{ link: '/dashboard/admin/services', label: 'Services', icon: DeviceGamepad },
];

const StolenNavbar = () => {
	const { classes, cx } = useStyles();
	const [active, setActive] = useState('Home');

	const links = useMemo(() => {
		return data.map((item) => (
			<a
				className={cx(classes.link, {
					[classes.linkActive]: item.label === active,
				})}
				href={item.link}
				key={item.label}
				onClick={(event) => {
					event.preventDefault();
					setActive(item.label);
				}}
			>
				<item.icon className={classes.linkIcon} />
				<span>{item.label}</span>
			</a>
		));
	}, [active, classes, cx]);

	return (
		<Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
			<Navbar.Section grow>
				<Group className={classes.header} position="apart">
					EggPanel
					<Code className={classes.version}>v1.0.0</Code>
					{/* TODO: GET ACTUAL VERSION */}
				</Group>
				{links}
			</Navbar.Section>

			<Navbar.Section className={classes.footer}>
				<a
					href="#"
					className={classes.link}
					onClick={(event) => event.preventDefault()}
				>
					<SwitchHorizontal className={classes.linkIcon} />
					<span>Edit your account</span>
				</a>

				<a
					href="#"
					className={classes.link}
					onClick={(event) => event.preventDefault()}
				>
					<Logout className={classes.linkIcon} />
					<span>Logout</span>
				</a>
			</Navbar.Section>
		</Navbar>
	);
};

export default StolenNavbar;
