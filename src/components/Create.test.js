import React from 'react';
import CreateLink ,{CREATE_LINK_MUTATION} from './Create';
import {MockedProvider} from '@apollo/client/testing'
import TestRenderer from 'react-test-renderer';

it('should render loading state initially', async () => {
    const post = { email: 'Bk', message: 'Poodle' };
    const mocks = [
      {
        request: {
          query: CREATE_LINK_MUTATION ,
          variables: { email: 'Buck',message:'poodle' },
        },
        result: { data: { post } },
      },
    ];
  
    const component = TestRenderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        < CreateLink/>
      </MockedProvider>,
    );
    await new Promise(resolve => setTimeout(resolve, 0));
 
   const button = component.root.findByType('form')
    button.props.onSubmit(); // fires the mutation
  
    const tree = component.toJSON();
    expect(tree.children).toContain('loading');
  });