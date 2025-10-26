import ImageModalClient from './ImageModalClient';

const ImagePage = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  return <ImageModalClient id={id} />;
};

export default ImagePage;
