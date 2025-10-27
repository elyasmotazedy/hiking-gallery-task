import Image from 'next/image';
import Head from 'next/head';
import { blurDataURL, hikingImages } from '@/lib/images';

const Home = () => {
  const aboveFoldImages = hikingImages.slice(0, 3);

  return (
    <>
      <Head>
        {aboveFoldImages.map((img) => (
          <link key={img.id} rel="preload" as="image" href={img.src} />
        ))}
      </Head>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
        {hikingImages.map((img, index) => (
          <div key={img.id} className="mb-4 break-inside-avoid">
            <Image
              src={img.src}
              alt={img.title}
              width={600}
              height={400}
              className="rounded-xl object-cover"
              priority={index < 3}
              loading={index < 3 ? 'eager' : 'lazy'}
              quality={index < 3 ? 90 : 75}
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
