// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import { LanguageSelector } from './language-selector';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
    return (
        <header className="bg-white dark:bg-gray-900 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Link href="/">
                        <Image src="/logo-no-bg.svg" alt="Company Logo" width={120} height={60} className="h-12 w-auto" />
                    </Link>
                </div>

                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/transport" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 transition-colors">
                        Transport
                    </Link>
                    <Link href="/it-solutions" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
                        IT Solutions
                    </Link>
                    <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
                        Contact
                    </Link>

                    <div className="flex items-center space-x-2">
                        <LanguageSelector />
                        <ThemeToggle />
                    </div>
                </nav>
            </div>
        </header>
    );
}
