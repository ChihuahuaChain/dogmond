import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
}

export const Heading1: React.FC<TypographyProps> = ({ children }) => {
  return <h1>{children}</h1>;
};

export const Heading2: React.FC<TypographyProps> = ({ children }) => {
  return <h2>{children}</h2>;
};

export const Paragraph: React.FC<TypographyProps> = ({ children }) => {
  return <p>{children}</p>;
};

export const Button: React.FC<TypographyProps> = ({ children }) => {
  return (
    <button
      style={{
        fontFamily: 'Single Day',
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: '-0.01em',
        textAlign: 'right',
      }}
    >
      {children}
    </button>
  );
};