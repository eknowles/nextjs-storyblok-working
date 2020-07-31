import React, { useEffect, useState } from 'react';
import Page from '../components/bloks/Page';
import Layout from '../components/layout';
import StoryblokService from '../utils/storyblok-service';

const Index = (props) => {
  const [state, setState] = useState(props.page.data.story.content);

  useEffect(() => {
    StoryblokService.initEditor(state, setState);
  }, [props.page.data._uid]);

  return (
    <Layout settings={{}}>
      <Page body={state.body} />
    </Layout>
  );
};

Index.getInitialProps = async (props) => {
  const slug = (props.query?.slug || ['home']).join('/');

  StoryblokService.setQuery(props.query);

  let [page] = await Promise.all([
    StoryblokService.get(`cdn/stories/${slug}`)
  ]);

  return {
    page
  };
};

export default Index;
