import { FC } from 'react';

interface HomeLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}
const HomeLayout: FC<HomeLayoutProps> = ({ children, modal }) => {
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default HomeLayout;
