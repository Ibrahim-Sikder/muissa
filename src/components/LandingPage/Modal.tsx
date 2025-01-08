import { Close } from '@mui/icons-material';
import React from 'react';
import QuoteRequestForm from './RegForm';

interface ModalProps {
  open: any;
  onClose: () => void;
}

const MuissaModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[99]   flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white lg:py-8 rounded-lg shadow-lg w-[90%] sm:w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
          aria-label="Close modal"
        >
          <Close />
        </button>
        <QuoteRequestForm onClose={onClose}/>
      </div>
    </div>
  );
};

export default MuissaModal;
