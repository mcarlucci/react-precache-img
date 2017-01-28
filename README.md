react-precache-img
================

> React component that pre-caches images in the browser

Key features:

- Preload a list of images in the browser for immediate use later in a user session


Install
-------

```bash
npm install react-precache-img --save
```

Usage
-------

```js
import React from 'react';
import PreCacheImg from 'react-precache-img';

return (
    <PreCacheImg
      images={[
        'http://searchengineland.com/figz/wp-content/seloads/2015/12/google-amp-fast-speed-travel-ss-1920.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg'
      ]}
    />
);
```


API
---
#### `images="Array" [required]`

Image urls
