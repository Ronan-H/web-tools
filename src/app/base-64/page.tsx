import { PageHeader } from '../components/page-header';
import PageLayout from '../components/page-layout';
import Base64Tool from './base-64';

export default function Base64Page() {
    return (
        <PageLayout>
            <PageHeader title="Base 64 Encode/Decode" />
            <Base64Tool />
        </PageLayout>
    );
}
