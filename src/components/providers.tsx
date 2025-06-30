'use client';

import React from 'react';
import { CartProvider } from '../app/context/CartContext';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers;
