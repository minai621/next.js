import React from 'react'

export default function PostMeta(props: {
    title: string;
    subtitle: string;
    image: string;
    description?: string;
}) {
  return (
      <head>
          <title>{props.title}</title>
          <meta name="description" content={props.subtitle} />

          <meta property='og:title' content={props.title} />
          <meta property='og:description' content={props.description} />
          <meta property='og:image' content={props.image} />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content={props.title} />
          <meta name='twitter:description' content={props.description} />
          <meta name='twitter:image' content={props.image} />

    </head>

  )
}
