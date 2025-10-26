'use client';
import Image from 'next/image';
import Link from 'next/link';
import { hikingImages } from '@/lib/images';
import Container from '@/components/Container';

const Home = () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
        Hiking Gallery
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {hikingImages.map((img) => (
          <Link key={img.id} href={`/gallery/${img.id}`} scroll={false}>
            <Image
              src={img.src}
              alt={img.title}
              width={600}
              height={400}
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Home;
