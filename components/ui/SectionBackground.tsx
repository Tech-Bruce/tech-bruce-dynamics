import Image from "next/image";

interface SectionBackgroundProps {
  src: string;
  alt: string;
  overlayClassName?: string;
  priority?: boolean;
}

export function SectionBackground({ 
  src, 
  alt, 
  overlayClassName = "bg-background/90", 
  priority = false 
}: SectionBackgroundProps) {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
      </div>
      <div className={`absolute inset-0 z-0 ${overlayClassName}`} />
    </>
  );
}
