import Link from 'next/link';
import Container from './Container';
import ThemeToggle from './ThemeToggle';

const Nav = () => {
  return (
    <nav className="py-4 border-b mb-8">
      <Container className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-center ">Hiking Gallery</h1>
        </Link>
        <ThemeToggle />
      </Container>
    </nav>
  );
};

export default Nav;
