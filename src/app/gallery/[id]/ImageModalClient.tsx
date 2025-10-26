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

  if (!img) return null;

  return (
    <Modal isOpen={open} onClose={() => setOpen(false)} className="max-w-2xl w-full">
      <Image src={img.src} alt={img.title} width={800} height={600} className="rounded-lg mb-3" />
      <h2 className="text-lg font-semibold">{img.title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">{img.desc}</p>
    </Modal>
  );
}
