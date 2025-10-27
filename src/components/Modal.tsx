// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import { FC, ReactNode, useEffect } from 'react';
// import { createPortal } from 'react-dom';

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children: ReactNode;
//   className?: string;
// }

// const Modal: FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
//   useEffect(() => {
//     if (isOpen) document.body.style.overflow = 'hidden';
//     else document.body.style.overflow = 'auto';
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isOpen]);

//   if (typeof window === 'undefined') return null;

//   return createPortal(
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           key="modal"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.2 }}
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.95, opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             onClick={(e) => e.stopPropagation()}
//             className={`relative bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-xl ${
//               className || ''
//             }`}
//           >
//             <button
//               onClick={onClose}
//               className="absolute cursor-pointer top-3 right-3 text-gray-600 dark:text-gray-300 text-xl hover:scale-110 transition-transform"
//             >
//               ✕
//             </button>

//             {children}
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>,
//     document.body
//   );
// };

// export default Modal;

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FC, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from 'next-themes';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, className = '' }) => {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkMode = currentTheme === 'dark';

  const modalContent = (
    <div
      className={`
      relative 
      rounded-2xl 
      p-6 
      shadow-xl 
      border
      ${
        isDarkMode
          ? 'bg-gray-900 text-white border-gray-700'
          : 'bg-white text-gray-900 border-gray-200'
      }
      ${className}
    `}
    >
      <button
        onClick={onClose}
        className={`absolute top-3 right-3 text-xl hover:scale-110 transition-transform cursor-pointer ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}
      >
        ✕
      </button>

      {children}
    </div>
  );

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md mx-4"
          >
            {modalContent}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
