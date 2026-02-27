import { Metadata } from 'next';
import { HomeButton } from '../components/HomeButton';
import { PageHeader } from '../components/page-header';
import PageLayout from '../components/page-layout';
import { TextLink } from '../components/text-link';
import { ToolInfo } from '../components/tool-info';
import PasswordGen from './password-gen';

export const metadata: Metadata = {
    title: 'Memorable Password Generator',
    description:
        'A password generation tool, based on combining words together. Includes options for adding symbols, digits, and capitalization.',
};

export default function PasswordGenPage() {
    return (
        <PageLayout>
            <PageHeader
                title="Memorable Password Generator"
                leftContent={<HomeButton />}
            />
            <ToolInfo>
                Use this tool to generate a password which is both easy to
                remember and type.
                <br />
                <br />
                The idea is to{' '}
                <TextLink href="https://xkcd.com/936/">
                    combine words to form a password
                </TextLink>
                , optionally including a digit, symbol, or capital letter.
                <br />
                <br />
                Passwords are generated within the browser, and are never sent
                over the network or stored anywhere.
            </ToolInfo>
            <PasswordGen />
        </PageLayout>
    );
}
