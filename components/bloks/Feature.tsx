import { Box } from '@chakra-ui/core';
import React from 'react';
import SbEditable from 'storyblok-react';

const Feature = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <Box>
        <h2>{blok.name}</h2>
        <div>
          {blok.description}
        </div>
        <style jsx>{``}</style>
      </Box>
    </SbEditable>
  );
};

export default Feature;
