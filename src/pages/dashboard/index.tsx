import Layout from '#components/Layout';
import { ReactElement } from 'react';

const DashboardPage = () => {
	return <div>Dashboard</div>;
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default DashboardPage;
