import { Section } from "../../Section";

interface SpeakingSectionProps {
  title: string;
  children: React.ReactNode;
  [key: string]: any;
}

export const SpeakingSection = ({
  title,
  children,
  ...props
}: SpeakingSectionProps) => {
  return (
    <Section title={title} {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  );
};
