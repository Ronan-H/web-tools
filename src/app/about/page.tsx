import { Metadata } from 'next';
import { HomeButton } from '../components/HomeButton';
import { PageHeader } from '../components/page-header';
import PageLayout from '../components/page-layout';
import { TextLink } from '../components/text-link';

export const metadata: Metadata = {
    title: 'About',
    description:
        'A description of the site and what it is for, along with information about the author.',
};

export default function About() {
    return (
        <PageLayout>
            <PageHeader title="About" leftContent={<HomeButton />} />
            <div className="ml-2 mr-2 text-center">
                <p>Simple, streamlined, mobile-friendly web tools.</p>
                <p>Because nobody likes ads or consent popups!</p>
                <p>
                    Created by{' '}
                    <TextLink href="https://github.com/Ronan-H">
                        Ronan Hanley
                    </TextLink>
                    .
                </p>
                <div className="italic mt-2">
                    <p>This site is in early development.</p>
                    <p>
                        Create a bug report or suggestion{' '}
                        <TextLink href="https://github.com/Ronan-H/web-tools/issues">
                            here
                        </TextLink>
                        .
                    </p>
                </div>
            </div>
        </PageLayout>
    );
}
