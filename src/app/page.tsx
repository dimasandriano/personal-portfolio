'use client';
import { useTheme } from 'next-themes';
import React from 'react';

export default function Page() {
  const { setTheme } = useTheme();
  return (
    <div>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('system')}>System</button>
    </div>
  );
}
