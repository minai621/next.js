import { GetServerSideProps } from 'next';
import React from 'react';

export default function Greet() {
  return <div>Greet</div>;
}

export const getServerSideProps: GetServerSideProps<{ name: string }> = async (
  context
) => {
    const name = context.params?.name as string;
  return {
    props: {
      name: name,
    },
  };
};
 