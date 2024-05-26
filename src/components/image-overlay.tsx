import Image from "next/image";

type ImageOverlayProps = {
  src: string;
  alt?: string;
};

export function ImageOverlay({ src, alt }: ImageOverlayProps) {
  return (
    <figure className="absolute h-full w-full">
      <div className="absolute z-10 h-full w-full bg-zinc-900 opacity-40 shadow-inner" />
      <Image src={src} alt={alt ?? ""} objectFit="cover" fill />
    </figure>
  );
}
