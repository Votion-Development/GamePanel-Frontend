import { createStyles } from '@mantine/core';

export default createStyles((theme, _params, getRef) => {
	const icon = getRef('icon');
	return {
		navbar: {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[8]
					: theme.colors[theme.primaryColor][4],
		},

		version: {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[2]
					: theme.colors[theme.primaryColor][7],
			color: theme.colorScheme === 'dark' ? theme.black : theme.white,
			fontWeight: 700,
		},

		header: {
			paddingBottom: theme.spacing.md,
			marginBottom: theme.spacing.md * 1.5,
			borderBottom: `1px solid ${
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors[theme.primaryColor][7]
			}`,
		},

		footer: {
			paddingTop: theme.spacing.md,
			marginTop: theme.spacing.md,
			borderTop: `1px solid ${
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors[theme.primaryColor][7]
			}`,
		},

		link: {
			...theme.fn.focusStyles(),
			display: 'flex',
			alignItems: 'center',
			textDecoration: 'none',
			fontSize: theme.fontSizes.sm,
			color: theme.white,
			padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
			borderRadius: theme.radius.sm,
			fontWeight: 500,

			'&:hover': {
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[5]
						: theme.colors[theme.primaryColor][5],
			},
		},

		linkIcon: {
			ref: icon,
			color: theme.white,
			opacity: 0.75,
			marginRight: theme.spacing.sm,
		},

		linkActive: {
			'&, &:hover': {
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[5]
						: theme.colors[theme.primaryColor][7],
				[`& .${icon}`]: {
					opacity: 0.9,
				},
			},
		},
	};
});