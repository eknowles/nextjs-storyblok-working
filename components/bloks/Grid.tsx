import React from 'react';
import Component from '../index'
import SbEditable from 'storyblok-react'
import { SimpleGrid } from '@chakra-ui/core';

const Grid = ({blok}) => (
  <SbEditable content={blok}>
    <SimpleGrid minChildWidth="120px" spacing="40px">
      {blok.columns.map((blok) =>
        <Component blok={blok} key={blok._uid} />
      )}
    </SimpleGrid>
  </SbEditable>
)

export default Grid
