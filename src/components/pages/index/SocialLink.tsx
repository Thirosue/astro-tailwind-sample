interface SocialLinkProps {
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const SocialLink = ({ icon: Icon, href, ...props }: SocialLinkProps) => (
  <a href={href} className="group -m-1 p-1" {...props}>
    <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
  </a>
);
