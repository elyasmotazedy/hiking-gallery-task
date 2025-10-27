import ImageModalClient from '@/components/ImageModalClient';
import { FC } from 'react';

interface GalleryModalPageProps {
  params: Promise<{ id: number }>;
}

const GalleryModalPage: FC<GalleryModalPageProps> = async ({ params }) => {
  const { id } = await params;
  return <ImageModalClient id={id} />;
};

export default GalleryModalPage;
