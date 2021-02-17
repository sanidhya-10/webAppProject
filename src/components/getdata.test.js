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




  import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom' 
import renderer from 'react-test-renderer'
import NewsWatch  from '../../pages/NewsWatch'
import { TestID } from '../../utils/testIDs'

describe(' Unit Tests for the  page', () => {
    afterEach(cleanup)
  
    it('[T-1] renders without crashing with no props', () => {
      const div = document.createElement('div')
      ReactDOM.render(<NewsWatch />, div)
    })
   
    it('[T-2] matches snapshot', () => {
      const tree = renderer.create(<NewsWatch />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  
    it('[T-3] tests the rendering of different elements on the page', () => {
        render(<NewsWatch />)
        expect(screen.getByText('NewsWatch')).toBeInTheDocument()
    
        const ArticleCard = screen.getAllByTestId(TestID.ARTICLE_CARD)
        expect(ArticleCard).toHaveLength(6)
    })     

    it('[T-4] tests the rendering of different elements on the page', () => {
        render(<NewsWatch />)
        expect(screen.getByText('Articles')).toBeInTheDocument()
        expect(screen.getByText('News Clusters')).toBeInTheDocument()
        expect(screen.getByText('Google Clusters')).toBeInTheDocument()
    
        const Articles= screen.getByText('Articles')
        const NewsCluster= screen.getByText('News Clusters')
        const GoogleCluster= screen.getByText('Google Clusters')

        fireEvent.click(Articles)
        expect(Articles.className).toMatch('tabButtonActive')
        expect(NewsCluster.className).toMatch('tabButtonInActive')
        expect(GoogleCluster.className).toMatch('tabButtonInActive')

        fireEvent.click(NewsCluster)
        expect(Articles.className).toMatch('tabButtonInActive')
        expect(NewsCluster.className).toMatch('tabButtonActive')
        expect(GoogleCluster.className).toMatch('tabButtonInActive')

        fireEvent.click(GoogleCluster)
        expect(Articles.className).toMatch('tabButtonInActive')
        expect(NewsCluster.className).toMatch('tabButtonInActive')
        expect(GoogleCluster.className).toMatch('tabButtonActive')
    }) 
      
    it('[T-5] article search bar works correctly',async () => {
        render(<NewsWatch />)
        let searchBar = screen.getAllByTestId(TestID.SEARCH_BAR)
        expect(searchBar).toHaveLength(1)
    
        fireEvent.click(searchBar[0].getElementsByTagName('img')[0])
        expect(searchBar[0].getElementsByTagName('input')).toHaveLength(1)
    
        expect(screen.getAllByTestId(TestID.ARTICLE_CARD)).toHaveLength(6)
    
        /* Triggering the onchange on the field with a search query */
    
        fireEvent.change(searchBar[0].getElementsByTagName('input')[0], {
          target: { value: 'BBC' }
        })
        expect(screen.getAllByTestId(TestID.ARTICLE_CARD)).toHaveLength(1)
        
        fireEvent.click(screen.getByText('Read More'))
        await new Promise ((r) => setTimeout(r,1000))
        expect(screen.getByText('go back')).toBeInTheDocument()
     
        fireEvent.click(screen.getByText('go back'))
        await new Promise ((r) => setTimeout(r,1000))
        expect(screen.getAllByTestId(TestID.ARTICLE_CARD)).toHaveLength(1)
    
      })

      it("[T-4] tests the functioning of the content filters", async () => {
        render(<NewsWatch />);
        expect(screen.getAllByTestId(TestID.ARTICLECARD_FILTER)).toHaveLength(5);
        
        const filters = screen.getAllByTestId(TestID.ARTICLECARD_FILTER);
      
        /* There are 4 option available for filter,  so length must be 4 */
        expect(filters).toHaveLength(5)
        expect(filters[0].className).toMatch("dropDownCards");
        expect(screen.getAllByTestId(TestID.ARTICLE_CARD)).toHaveLength(6)
      
        /* on selecting 2nd filter option , length of article card must be 1 according to our mock data */
        fireEvent.click(filters[0])
        fireEvent.click(screen.getByText('Apply'))
        await new Promise ((r) => setTimeout(r,1000))
        expect(screen.getAllByTestId(TestID.ARTICLE_CARD)).toHaveLength(2);
        expect(filters[1].className).toMatch("dropDownCards");
      
        fireEvent.click(filters[2]);
        expect(filters[2].className).toMatch("dropdowncards");
      });
  })
    

  const [isCardAnimation,setCardAnimation] = useState(false)

  const openArticlePage = () => {
    setTimeout(showNewswatchPage,300)
    setCardAnimation(true)
  }

  @keyframes cardsAnimation {
    0% {transform: scale(1);}
    33% {transform: scale(0.98);}
    66%{transform:scale(0.98);}
    100% {transform:scale(1);};
  }
  
  .cards:active{
    animation : cardsAnimation 180ms ease-in-out;
  }