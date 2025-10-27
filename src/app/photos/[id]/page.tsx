import Image from 'next/image';
import { hikingImages } from '@/lib/images';
import { FC } from 'react';

interface GalleryImagePageProps {
  params: Promise<{ id: number }>;
}

const GalleryImagePage: FC<GalleryImagePageProps> = async ({ params }) => {
  const { id } = await params;
  const image = hikingImages.find((i) => i.id === +id);
  if (!image) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center  p-8">
      <Image src={image.src} alt={image.title} width={900} height={600} className="rounded-xl" />
      <h2 className="text-2xl font-semibold mt-4">{image.title}</h2>
      <p className="text-sm  mt-2">{image.desc}</p>
      <p className="text-sm ">
        <span>Tags:</span>{' '}
        {image.tags.map((tag, index) => (
          <span className="text-xs" key={index}>
            {tag}
            {index < image.tags.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
    </main>
  );
};

export default GalleryImagePage;
