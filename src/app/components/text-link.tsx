
type TextLinkProps = {
    href: string;
    children: React.ReactNode;
}

export function TextLink(props: TextLinkProps) {
    const { href, children } = props;

    return (
        <a
            href={href}
            target="_blank"
            className="text-blue-500 hover:underline"
        >
            {children}
        </a>
    );
}