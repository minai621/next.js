import { GetServerSideProps } from 'next';
import React from 'react';

export default function Greet({ params: { name } }: { params: { name: string } }) {
    
  return <div>{name}</div>;
}
