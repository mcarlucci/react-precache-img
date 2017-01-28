jest.unmock('../src/ReactPreCacheImgDemo');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ReactPreCacheImgDemo from '../src/ReactPreCacheImgDemo.jsx'

describe('<ReactPreCacheImgDemo />', () => {
  it('', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <ReactPreCacheImgDemo />
    );
    const dom = renderer.getRenderOutput();
    //expect(dom.props.//PROPS_NAME).toEqual('//TEXT');
  });
});
