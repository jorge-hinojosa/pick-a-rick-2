import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header
      style={{
        borderBottom: `1px solid #efefef`,
        padding: '16px',
      }}
    >
      <Link to="/">
        <img src="./logo.svg" alt="match" width="110" />
      </Link>
    </header>
  );
}
