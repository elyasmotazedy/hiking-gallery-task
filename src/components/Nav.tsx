import Container from './Container';
import ThemeToggle from './ThemeToggle';

const Nav = () => {
  return (
    <nav className="py-4 border-b mb-8">
      <Container className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
          Hiking Gallery
        </h1>
        <ThemeToggle />
      </Container>
    </nav>
  );
};

export default Nav;
