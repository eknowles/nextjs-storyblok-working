import React from 'react';
import Teaser from './bloks/Teaser';
import Feature from './bloks/Feature';
import Grid from './bloks/Grid';
import Placeholder from './bloks/Placeholder';

const Components = {
  'teaser': Teaser,
  'feature': Feature,
  'grid': Grid,
};

const Component: React.FC<{ blok: any }> = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default Component;
