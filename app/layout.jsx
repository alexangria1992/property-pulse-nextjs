import React from 'react';
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
