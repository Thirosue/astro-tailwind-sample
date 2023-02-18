import { Popover } from "@headlessui/react";

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export const MobileNavItem = ({ href, children }: LinkProps) => (
  <li>
    <Popover.Button as={undefined} href={href} className="block py-2">
      {children}
    </Popover.Button>
  </li>
);
