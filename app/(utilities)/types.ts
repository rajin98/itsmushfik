interface TypeWriterTextProps {
  lines: string[];
  typeDelay?: number;
  forwardDelay?: number;
  backwardDelay?: number;
  className?: string;
}

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  url: string;
  tags?: TagData[] | undefined;
}

interface TagData {
  name: string;
  version?: string;
  icon?: string;
  iconUrl?: string;
  className?: string;
}

interface SectionProps {
  title: string;
}

interface TimelineItemProps {
  id: number;
  onLeft?: boolean;
  isLast?: boolean;
  className?: string;
  title: string;
  subtitle?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

interface TimelineProps {
  itemData: TimelineItemProps[];
}

interface ScrollAnimationProps {
  delay: number;
  duration: number;
  direction: string;
  className?: string;
}

interface CustomLinkProps {
  href: string;
  target?: string;
  className?: string;
}

interface GalleryFrameProps {
  id: number;
  className?: string;
  src: string;
  alt?: string;
}

interface ImageGalleryProps {
  className?: string;
  images: GalleryFrameProps[];
}
