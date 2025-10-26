import { cn } from '@/lib/utils';
import { FC } from 'react';
interface Props {
  className?: string;
  children: React.ReactNode;
  [key: string]: unknown;
}
const Container: FC<Props> = ({ className, children, ...other }) => {
  return (
    <div className={cn(' mx-auto max-w-7xl', className)} {...other}>
      {children}
    </div>
  );
};
export default Container;
