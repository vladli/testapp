import { menu } from '@/utils/menu';
import { Link } from '@inertiajs/react';

export default function Header() {
    return (
        <header className="bg-blue-400 p-4">
            <nav className="flex text-lg font-medium">
                {menu.map((item) => (
                    <Link
                        key={item.title}
                        href={item.href}
                        className="px-2 hover:rounded-lg hover:bg-black/20"
                    >
                        {item.title}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
