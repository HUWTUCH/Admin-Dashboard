import { useState } from 'react';

export const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, toggleMenu };
};
