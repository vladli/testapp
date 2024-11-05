import { Link } from '@inertiajs/react';

type Props = {
    children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
    return (
        <div className="flex min-h-dvh flex-col">
            <header className="h-10">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </header>
            <div className="flex-1">{children}</div>
            <footer className="h-10">Footer</footer>
        </div>
    );
}
