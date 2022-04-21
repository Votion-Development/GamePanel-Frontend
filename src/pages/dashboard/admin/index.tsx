import Layout from '#components/Layout';
import { ReactElement } from 'react';

const AdminPage = () => {
	return <div>AdminPage</div>;
};

AdminPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default AdminPage;
