import Header from '@/Components/Layout/Header';
import { Toaster } from 'react-hot-toast';

type Props = {
    children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
    return (
        <>
            <div className="flex min-h-dvh flex-col">
                <Header />

                <div className="flex flex-1 flex-col">{children}</div>
            </div>
            <Toaster />
        </>
    );
}
