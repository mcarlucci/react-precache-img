jest.unmock('../src/ReactPreCacheImg');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ReactPreCacheImg from '../src/ReactPreCacheImg'

describe('<ReactPreCacheImg />', () => {
  it('', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <ReactPreCacheImg />
    );
    const dom = renderer.getRenderOutput();
    //expect(dom.props.//PROPS_NAME).toEqual('//TEXT');
  });
});
