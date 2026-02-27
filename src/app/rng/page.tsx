import { Metadata } from 'next';
import { PageHeader } from '../components/page-header';
import PageLayout from '../components/page-layout';
import RNG from './rng';

export const metadata: Metadata = {
    title: 'Random Number Generator',
    description:
        'A simple random number generator, generating numbers within a given range.',
};

export default function RNGPage() {
    return (
        <PageLayout>
            <PageHeader title="Random Number Generator" />
            <RNG />
        </PageLayout>
    );
}
