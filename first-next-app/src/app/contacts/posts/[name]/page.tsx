import PostMeta from '@/components/PostHead';
import { GetServerSideProps } from 'next';
import React from 'react';

export default function Greet({ params: { name } }: { params: { name: string } }) {
    const title = 'title';
    const subtitle = 'subtitle';
    const image = 'x';
    return <div>
        <PostMeta title={title} subtitle={subtitle} image={image} />
        <div>{title}</div>
        <div>{subtitle}</div>
        </div>;
}
