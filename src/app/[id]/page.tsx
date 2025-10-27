import Image from 'next/image';
import { hikingImages } from '@/lib/images';

export default async function GalleryImagePage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const image = hikingImages.find((i) => i.id === +id);
  if (!image) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-8">
      <Image src={image.src} alt={image.title} width={900} height={600} className="rounded-xl" />
      <h2 className="text-2xl font-semibold mt-4">{image.title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{image.desc}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
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
}
