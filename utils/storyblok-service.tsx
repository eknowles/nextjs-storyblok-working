import React from 'react';
import StoryblokClient from 'storyblok-js-client';

class StoryblokService {
  client: StoryblokClient;
  token: string;
  devMode: boolean;
  query: any;

  constructor() {
    this.devMode = false; // Always loads draft
    this.token = 'xYUN1irTQrj4ublVmvn0bAtt';
    this.client = new StoryblokClient({
      accessToken: this.token,
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    });

    this.query = {};
  }

  getCacheVersion() {
    return this.client.cacheVersion;
  }

  get(slug, params?) {
    params = params || {};

    if (this.getQuery('_storyblok') || this.devMode || (typeof window !== 'undefined' && window.storyblok)) {
      params.version = 'draft';
    }

    // StoryblokCacheVersion
    if (typeof window !== 'undefined' && typeof (window as any).StoryblokCacheVersion !== 'undefined') {
      params.cv = (window as any).StoryblokCacheVersion;
    }

    return this.client.get(slug, params);
  }

  initEditor(state, setState) {
    if (window.storyblok) {
      window.storyblok.init();
      window.storyblok.on(['change', 'published'], () => location.reload(true));

      // this will alter the state and replaces the current story with a current raw story object (no resolved
      // relations or links)
      window.storyblok.on('input', (event) => {
        if (event.story.content._uid === state._uid) {
          setState(window.storyblok.addComments(event.story.content, event.story.id));
        }
      });
    }
  }

  setQuery(query) {
    this.query = query;
  }

  getQuery(param) {
    return this.query[param];
  }

  bridge() {
    if (!this.getQuery('_storyblok') && !this.devMode) {
      return null;
    }
    return (<script src={`//app.storyblok.com/f/storyblok-latest.js?t=${this.token}`} />);
  }
}

const storyblokInstance = new StoryblokService();

export default storyblokInstance;
