import clsx from 'clsx'

interface LinkProps {
    children: React.ReactNode
    href: string
}

export const NavItem = ({ href, children }: LinkProps) => {
    let isActive = window.location.pathname === href

    return (
        <li>
            <a
                href={href}
                className={clsx(
                    'relative block px-3 py-2 transition',
                    isActive
                        ? 'text-teal-500 dark:text-teal-400'
                        : 'hover:text-teal-500 dark:hover:text-teal-400'
                )}
            >
                {children}
                {isActive && (
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                )}
            </a>
        </li>
    )
}