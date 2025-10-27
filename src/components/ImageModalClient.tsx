'use client';

import Modal from '@/components/ui/Modal';
import { hikingImages } from '@/lib/images';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ImageModalClient({ id }: { id: number }) {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const img = hikingImages.find((i) => i.id === +id);

  useEffect(() => {
    if (!open) router.back();
  }, [open, router]);
  console.log('[DBG] ImageModalClient loaded for id:', id);
  useEffect(() => {
    console.log('[DBG] ImageModalClient mounted');
  }, []);
  if (!img) return null;

  return (
    <Modal
      isOpen={open}
      onClose={() => setOpen(false)}
      className="max-w-2xl w-full  overflow-auto max-h-[98vh]"
    >
      <div className="max-w-full max-h-full overflow-auto">
        <Image
          src={img.src}
          alt={img.title || 'Hiking Image'}
          width={800}
          height={600}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
      </div>
      <h2 className="text-lg font-semibold">{img.title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">{img.desc}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        <span>Tags:</span>{' '}
        {img.tags.map((tag, index) => (
          <span className="text-xs" key={index}>
            {tag}
            {index < img.tags.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
    </Modal>
  );
}
