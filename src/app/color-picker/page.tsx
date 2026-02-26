import { PageHeader } from '../components/page-header';
import PageLayout from '../components/page-layout';
import ColorPicker from './color-picker';

export default function ColorPickerPage() {
    return (
        <PageLayout>
            <PageHeader title="Color Picker" />
            <ColorPicker />
        </PageLayout>
    );
}
