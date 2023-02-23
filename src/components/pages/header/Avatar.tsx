import clsx from "clsx";

interface AvatarProps {
  accountId: number;
  large?: boolean;
  className?: string;
}

export const Avatar = ({
  accountId,
  large = false,
  className,
  ...props
}: AvatarProps & React.HTMLAttributes<HTMLAnchorElement>) => (
  <a
    href="/"
    aria-label="Home"
    className={clsx(className, "pointer-events-auto")}
    {...props}
  >
    <img
      src={`/images/${accountId}/avatar.jpg`}
      alt=""
      sizes={large ? "4rem" : "2.25rem"}
      className={clsx(
        "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
        large ? "h-16 w-16" : "h-9 w-9"
      )}
    />
  </a>
);
