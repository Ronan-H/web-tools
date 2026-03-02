import { Metadata } from 'next';
import { HomeButton } from '../components/HomeButton';
import { PageHeader } from '../components/page-header';
import PageLayout from '../components/page-layout';
import YourIp from './your-ip';

export const metadata: Metadata = {
    title: 'Your IP',
    description: "Displays the user's IP address",
};

export default function YourIpPage() {
    return (
        <PageLayout>
            <PageHeader title="Your IP" leftContent={<HomeButton />} />
            <YourIp />
        </PageLayout>
    );
}
