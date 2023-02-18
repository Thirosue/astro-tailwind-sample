import { Card } from "../../Card";

interface AppearanceProps {
  title: string;
  description: string;
  event: string;
  cta: string;
  href: string;
}

export const Appearance = ({
  title,
  description,
  event,
  cta,
  href,
}: AppearanceProps) => {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  );
};
