import { Metadata } from 'next';
import { PageHeader } from '../components/page-header';
import PageLayout from '../components/page-layout';
import ColorPicker from './color-picker';

export const metadata: Metadata = {
    title: 'Color Picker',
    description: 'A simple hex based color picker tool.',
};

export default function ColorPickerPage() {
    return (
        <PageLayout>
            <PageHeader title="Color Picker" />
            <ColorPicker />
        </PageLayout>
    );
}
