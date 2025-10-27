import ImageModalClient from '@/components/ImageModalClient';

export default async function GalleryModalPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  return <ImageModalClient id={id} />;
}
