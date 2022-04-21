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

const RegisterPage = () => {
	const form = useForm({
		initialValues: {
			email: '',
			username: '',
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
						<TextInput sx={{ width: '100%' }} label="Email" name="email" />
						<TextInput
							my="md"
							sx={{ width: '100%' }}
							label="Username"
							name="username"
						/>
						<PasswordInput
							mb="md"
							sx={{ width: '100%' }}
							label="Password"
							name="password"
						/>

						<Group position="apart">
							<Anchor href="/login" size="sm">
								Already have an account?
							</Anchor>
							<Button type="submit">Register</Button>
						</Group>
					</form>
				</Box>
			</Center>
		</>
	);
};

export default RegisterPage;
