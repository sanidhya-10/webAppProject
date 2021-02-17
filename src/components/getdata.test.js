import React from 'react';
import Getdata ,{GET_DATA} from './getdata';
import {MockedProvider} from '@apollo/client/testing'
import TestRenderer from 'react-test-renderer';
import { act } from "react-dom/test-utils";
const mocks = [
    {
        request:{
            query:GET_DATA,
        },
        result:{ 
            data:{
                getdata:'Loreum',
            },
    },
},
];

it('getdata', async() =>{
    
    const component =TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Getdata/>
        </MockedProvider>,
    );
    
    await new Promise(resolve => setTimeout(resolve, 0));
  
    const h1 = component.root.findByType('h1');

    expect(h1.children.join('')).toContain('Loreum');
    /*await waitFor(() => {
        expect(h1.children.join('')).not.toContain('Loreum');
      });*/
  });
