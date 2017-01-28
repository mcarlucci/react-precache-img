import React, { Component } from 'react';
import { render } from 'react-dom';
import PreCacheImg from './react-precache-img';

class PreCacheImgDemo extends Component {

  render() {
    return (
      <div>
        <h1>PreCacheImg Component Demo</h1>
        <span>In Chrome, copy and paste this in a new tab to view your cache: <code>chrome://cache/</code></span>
        <p>You should see <code>http://searchengineland.com/figz/wp-content/seloads/2015/12/google-amp-fast-speed-travel-ss-1920.jpg</code> and <code>https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg</code> at the top of the list</p>
        <PreCacheImg images={['http://searchengineland.com/figz/wp-content/seloads/2015/12/google-amp-fast-speed-travel-ss-1920.jpg', 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg']} />
      </div>
    );
  }
}

render(<PreCacheImgDemo />, document.getElementById('root')); // eslint-disable-line no-undef
