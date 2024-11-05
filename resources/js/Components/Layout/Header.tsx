import { menu } from '@/utils/menu';
import { Link } from '@inertiajs/react';

export default function Header() {
    return (
        <header className="m-4 h-10">
            <nav className="flex divide-x divide-black">
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
