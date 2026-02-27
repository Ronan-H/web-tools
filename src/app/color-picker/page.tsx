import { Metadata } from 'next';
import { HomeButton } from '../components/HomeButton';
import { PageHeader } from '../components/page-header';
import PageLayout from '../components/page-layout';
import { ToolInfo } from '../components/tool-info';
import ColorPicker from './color-picker';

export const metadata: Metadata = {
    title: 'Color Picker',
    description: 'A simple hex based color picker tool.',
};

export default function ColorPickerPage() {
    return (
        <PageLayout>
            <PageHeader title="Color Picker" leftContent={<HomeButton />} />
            <ToolInfo>
                Use this tool to choose colors visually, which are encoded to a
                hex value.
                <br />
                <br />A hex value can also be entered, in order to load the
                color into the picker.
            </ToolInfo>
            <ColorPicker />
        </PageLayout>
    );
}
