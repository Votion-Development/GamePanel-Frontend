import { useForm } from '@mantine/form';
import {
	Anchor,
	Box,
	Button,
	Center,
	Group,
	PasswordInput,
	TextInput,
} from '@mantine/core';

const LoginPage = () => {
	const form = useForm({
		initialValues: {
			username_email: '',
			password: '',
		},
	});

	return (
		<>
			<Center sx={{ height: '100vh', width: '100vw' }}>
				<Box
					sx={(t) => ({
						maxWidth: '800px',
						width: '550px',
						backgroundColor:
							t.colorScheme === 'dark' ? t.colors.dark[6] : t.colors.gray[3],
						padding: '2rem',
						boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
					})}
				>
					<form onSubmit={form.onSubmit((values) => console.log(values))}>
						<TextInput
							sx={{ width: '100%' }}
							label="Username / Email"
							name="username_email"
						/>

						<PasswordInput
							my="md"
							sx={{ width: '100%' }}
							label="Password"
							name="password"
						/>

						<Group position="apart">
							<Anchor href="/register" size="sm">
								Don&apos;t have an account?
							</Anchor>
							<Button type="submit">Login</Button>
						</Group>
					</form>
				</Box>
			</Center>
		</>
	);
};

export default LoginPage;
