interface TypeWriterTextProps {
  lines: string[];
  typeDelay?: number;
  forwardDelay?: number;
  backwardDelay?: number;
  className?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  tags?: TagData[] | undefined;
}

interface TagData {
  name: string;
  version?: string;
  icon?: string;
  color?: string;
}

interface SectionProps {
  title: string;
}
