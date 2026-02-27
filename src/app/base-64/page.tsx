import { Metadata } from 'next';
import { HomeButton } from '../components/HomeButton';
import { PageHeader } from '../components/page-header';
import PageLayout from '../components/page-layout';
import { TextLink } from '../components/text-link';
import { ToolInfo } from '../components/tool-info';
import Base64Tool from './base-64';

export const metadata: Metadata = {
    title: 'Base 64 Encode/Decode',
    description: 'A simple Base 64 encoding and decoding tool.',
};

export default function Base64Page() {
    return (
        <PageLayout>
            <PageHeader
                title="Base 64 Encode/Decode"
                leftContent={<HomeButton />}
            />
            <ToolInfo>
                Use this tool to encode to/from{' '}
                <TextLink href="https://en.wikipedia.org/wiki/Base64">
                    Base 64
                </TextLink>
                .
            </ToolInfo>
            <Base64Tool />
        </PageLayout>
    );
}
