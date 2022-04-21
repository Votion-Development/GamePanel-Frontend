import type { NextPage } from 'next';
import Head from 'next/head';
import { Button, useMantineColorScheme } from '@mantine/core';

const Home: NextPage = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<>
			<Head>
				<title>EggPanel</title>
			</Head>

			<div>
				<Button onClick={() => toggleColorScheme()}>
					{colorScheme === 'dark' ? 'Light' : 'Dark'}
				</Button>
				<h1>EggPanel</h1>
			</div>
		</>
	);
};

export default Home;
