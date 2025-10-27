import Image from 'next/image';
import Link from 'next/link';
import { hikingImages } from '@/lib/images';
import Container from '@/components/Container';

const Home = () => {
  return (
    <Container>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
        {hikingImages.map((img) => (
          <div key={img.id} className="mb-4 break-inside-avoid cursor-pointer">
            <Link href={`/photos/${img.id}`}>
              <Image
                src={img.src}
                alt={img.title}
                width={600}
                height={400}
                className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Home;
