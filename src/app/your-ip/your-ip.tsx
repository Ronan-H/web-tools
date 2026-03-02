import { getClientIp } from 'next-request-ip';
import { headers } from 'next/headers';
import CopyButton from '../components/copy-button';

export default async function YourIp() {
    const headersList = await headers();
    const clientIp = getClientIp(headersList);

    return (
        <div className="w-60 max-w-screen flex flex-col gap-3 items-center">
            <h2 className="text-3xl">{clientIp ?? 'Not Found'}</h2>
            {clientIp && <CopyButton content={clientIp} />}
        </div>
    );
}
