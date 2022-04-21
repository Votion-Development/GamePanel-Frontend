import '#styles/globals.css';
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from '@mantine/core';
import { AppPropsWithLayout } from '#lib/types';
import { useLocalStorage } from '@mantine/hooks';
import { useCallback } from 'react';
import { Provider } from 'react-redux';
import store from '#app/store';
//wat

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: 'eggpanel-color-scheme',
		defaultValue: 'dark',
	});

	const getLayout = Component.getLayout ?? ((page) => page);

	const toggleColorScheme = useCallback(
		(value?: ColorScheme) => {
			setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'));
		},
		[colorScheme, setColorScheme]
	);

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider theme={{ colorScheme }} withGlobalStyles>
				<Provider store={store}>
					{getLayout(<Component {...pageProps} />)}
				</Provider>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export default MyApp;
