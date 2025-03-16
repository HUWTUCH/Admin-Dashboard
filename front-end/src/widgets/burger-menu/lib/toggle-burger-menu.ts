import { useState } from 'react';

// TODO: змінити назву на useToggle і можна перемістити на shared/lib/hooks/useToggle.ts
export const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, toggleMenu };
};
