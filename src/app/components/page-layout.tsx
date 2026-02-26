type HeaderWrapperProps = {
    children: React.ReactNode;
};

export default function HeaderWrapper(props: HeaderWrapperProps) {
    const { children } = props;

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full flex-col items-center bg-white dark:bg-black">
                {children}
            </main>
        </div>
    );
}
