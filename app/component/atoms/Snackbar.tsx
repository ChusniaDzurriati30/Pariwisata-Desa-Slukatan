"use client";
import React, { useEffect } from "react";

interface SnackbarProps {
  message: string;
  onClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Hide after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-primary/30 text-primary px-4 py-2 rounded shadow-lg">
      {message}
    </div>
  );
};

export default Snackbar;
