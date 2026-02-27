import { Metadata } from 'next';
import { PageHeader } from '../components/page-header';
import PageLayout from '../components/page-layout';
import PasswordGen from './password-gen';

export const metadata: Metadata = {
    title: 'Memorable Password Generator',
    description:
        'A password generation tool, based on combining words together. Includes options for adding symbols, digits, and capitalization.',
};

export default function PasswordGenPage() {
    return (
        <PageLayout>
            <PageHeader title="Memorable Password Generator" />
            <PasswordGen />
        </PageLayout>
    );
}
