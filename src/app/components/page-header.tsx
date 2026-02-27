'use client';

type PageHeaderProps = {
    title: string;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
};

export function PageHeader(props: PageHeaderProps) {
    const { title, leftContent, rightContent } = props;

    return (
        <div className="w-full grid grid-cols-[1fr_auto_1fr] border-b border-border p-3 mb-3 items-center">
            <div className="justify-self-start">{leftContent || <span />}</div>
            <h1 className="text-3xl font-bold leading-none text-center">
                {title}
            </h1>
            <div className="justify-self-end">{rightContent || <span />}</div>
        </div>
    );
}
