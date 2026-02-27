import { Metadata } from 'next';
import { PageHeader } from '../components/page-header';
import PageLayout from '../components/page-layout';
import Base64Tool from './base-64';

export const metadata: Metadata = {
    title: 'Base 64 Encode/Decode',
    description: 'A simple Base 64 encoding and decoding tool.',
};

export default function Base64Page() {
    return (
        <PageLayout>
            <PageHeader title="Base 64 Encode/Decode" />
            <Base64Tool />
        </PageLayout>
    );
}
