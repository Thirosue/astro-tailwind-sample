import { Section } from "../../Section";

interface ToolsSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ToolsSection = ({
  title,
  children,
  ...props
}: ToolsSectionProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Section title={title} {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
};
