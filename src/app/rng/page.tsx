import { Metadata } from 'next';
import { HomeButton } from '../components/HomeButton';
import { PageHeader } from '../components/page-header';
import PageLayout from '../components/page-layout';
import { ToolInfo } from '../components/tool-info';
import RNG from './rng';

export const metadata: Metadata = {
    title: 'Random Number Generator',
    description:
        'A simple random number generator, generating numbers within a given range.',
};

export default function RNGPage() {
    return (
        <PageLayout>
            <PageHeader
                title="Random Number Generator"
                leftContent={<HomeButton />}
            />
            <ToolInfo>
                Use this tool to generate random numbers within a given range.
                <br />
                <br />
                The range 1 to 6 can be used to simulate a dice roll, and 1 to 2
                can be used to simulate a coin flip.
            </ToolInfo>
            <RNG />
        </PageLayout>
    );
}
