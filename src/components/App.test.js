import React from 'react';
import {MockedProvider} from '@apollo/client/testing'
import TestRenderer from 'react-test-renderer';
import App  from './App';

jest.mock('./getdata', () => {
    return  (
      'jklk'
    );
  });
  jest.mock('./Create', () =>{
      return(
          'ced x'
      );
  });

jest.mock('./Create');
it('Wrapper RENDERER snapshot', () => {
    const tree = TestRenderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  })
