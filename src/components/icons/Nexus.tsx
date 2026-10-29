import Image from 'next/image';
import NexusArt from '@/components/assets/favicon.png';

interface Props {
  className?: string;
}

function NexusIcon({ className }: Props) {
  return (
    <Image
      src={NexusArt}
      alt="Nexus.Art"
      className={className}
    />
  );
}

export default NexusIcon;
