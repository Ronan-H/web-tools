import { Metadata } from 'next';
import { PageHeader } from '../components/page-header';
import PageLayout from '../components/page-layout';
import AbvCalculator from './abv-calculator';

export const metadata: Metadata = {
    title: 'ABV Calculator',
    description: 'A simple ABV calculator, based on gravity readings.',
};

export default function AbvCalculatorPage() {
    return (
        <PageLayout>
            <PageHeader title="ABV Calculator" />
            <AbvCalculator />
        </PageLayout>
    );
}
