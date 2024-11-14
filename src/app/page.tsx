'use client';
import { useEffect } from 'react';
import { createSwapy } from 'swapy';

import { cn } from '@/lib/utils';

export default function Page() {
  useEffect(() => {
    const container = document.querySelector('.container');
    const swapy = createSwapy(container, {
      animation: 'dynamic',
    });
    swapy.enable(true);
  }, []);

  const data = [
    {
      slot: 'foo',
      item: 'a',
      content: '123',
      colSpan: true,
      rowSpan: true,
    },
    {
      slot: 'bar',
      item: 'b',
      content: '456',
      colSpan: false,
      rowSpan: false,
    },
    {
      slot: 'baz',
      item: 'c',
      content: '789',
      colSpan: false,
      rowSpan: false,
    },
    {
      slot: 'qux',
      item: 'd',
      content: '101112',
      colSpan: false,
      rowSpan: false,
    },
    {
      slot: 'quux',
      item: 'e',
      content: '131415',
      colSpan: false,
      rowSpan: false,
    },
    {
      slot: 'corge',
      item: 'f',
      content: '161718',
      colSpan: false,
      rowSpan: false,
    },
    {
      slot: 'grault',
      item: 'g',
      content: '192021',
      colSpan: false,
      rowSpan: false,
    },
    {
      slot: 'garply',
      item: 'h',
      content: '222324',
      colSpan: false,
      rowSpan: false,
    },
    {
      slot: 'waldo',
      item: 'i',
      content: '252627',
      colSpan: false,
      rowSpan: false,
    },
  ];
  return (
    <div className='container max-w-[1200px] max-lg:max-w-[800px] max-md:max-w-[375px] max-sm:max-w-[320px]'>
      <div className='grid grid-cols-4 grid-rows-4 gap-4'>
        {data.map((item) => (
          <div
            className={cn(
              'h-full rounded border bg-gray-200',
              item.colSpan ? 'col-span-2' : 'col-span-1',
              item.rowSpan ? 'row-span-2' : 'row-span-1',
            )}
            data-swapy-slot={item.slot}
            key={item.slot}
          >
            <div
              className='bg-mat-top z-50 h-full rounded border bg-white p-4'
              data-swapy-item={item.item}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
