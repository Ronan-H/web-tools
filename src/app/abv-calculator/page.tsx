import { Metadata } from 'next';
import { HomeButton } from '../components/HomeButton';
import { PageHeader } from '../components/page-header';
import PageLayout from '../components/page-layout';
import { TextLink } from '../components/text-link';
import { ToolInfo } from '../components/tool-info';
import AbvCalculator from './abv-calculator';

export const metadata: Metadata = {
    title: 'ABV Calculator',
    description: 'A simple ABV calculator, based on gravity readings.',
};

export default function AbvCalculatorPage() {
    return (
        <PageLayout>
            <PageHeader title="ABV Calculator" leftContent={<HomeButton />} />
            <ToolInfo>
                When brewing (wine, cider, beer, etc.),{' '}
                <TextLink href="https://en.wikipedia.org/wiki/Alcohol_by_volume">
                    ABV
                </TextLink>{' '}
                can by estimated by measuring the sugar content (via{' '}
                <TextLink href="https://en.wikipedia.org/wiki/Relative_density">
                    specific gravity
                </TextLink>{' '}
                readings) of the batch before fermentation begins ("Original
                Gravity"), and after it finishes ("Final Gravity"), and entering
                it into a simple formula:
                <br />
                <span className="italic">ABV = (OG - FG) x 131.25</span>
                <br />
                <br />
                <TextLink href="https://en.wikipedia.org/wiki/Attenuation_(brewing)">
                    Apparent attenuation
                </TextLink>{' '}
                is a measure of what percentage of the available sugars have
                been consumed, using the formula:
                <br />
                <span className="italic">AA = (OG - FG) ÷ (OG - 1) x 100</span>
                <br />
                <br />
                Enter your measured OG and FG values below to get estimates
                based on the above formulas.
            </ToolInfo>
            <AbvCalculator />
        </PageLayout>
    );
}
