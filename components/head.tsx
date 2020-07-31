import React from 'react';
import NextHead from 'next/head';
import StoryblokService from '../utils/storyblok-service';

const Head: React.FC<any> = ({ title, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ''}</title>
    <meta name="description" content={description || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,700" />
    {StoryblokService.bridge()}
  </NextHead>
);

export default Head;
