import Header from '@/Components/Layout/Header';

type Props = {
    children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
    return (
        <div className="flex min-h-dvh flex-col">
            <Header />

            <div className="flex-1 p-2">{children}</div>
            <footer className="h-10 bg-red-400/40">Footer</footer>
        </div>
    );
}
