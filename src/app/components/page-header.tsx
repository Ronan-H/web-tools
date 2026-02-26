'use client';

import { HomeButton } from './HomeButton';
import { InfoButton } from './info-button';

type PageHeaderProps = {
    title: string;
    hideHomeButton?: boolean;
};

export function PageHeader(props: PageHeaderProps) {
    const { title, hideHomeButton } = props;

    return (
        <div className="w-full grid grid-cols-[1fr_auto_1fr] border-b border-border p-3 mb-3 items-center">
            <div className="justify-self-start">
                <HomeButton invisible={hideHomeButton} />
            </div>
            <h1 className="text-3xl font-bold leading-none text-center">
                {title}
            </h1>
            <div className="justify-self-end">
                <InfoButton />
            </div>
        </div>
    );
}
