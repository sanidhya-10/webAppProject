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



  const [isCardAnimation,setCardAnimation] = useState(false)

  const openArticlePage = () => {
    setTimeout(showNewswatchPage,3)
    setCardAnimation(true)
  }


  ${isCardAnimation? styles.cardsAnimation:''}`


  @keyframes cardsAnimation {
    0% {transform: scale(1);}
    33% {transform: scale(0.98);}
    66%{transform:scale(0.98);}
    100% {transform:scale(1);};
  }
  
  .cards:active{
    animation : cardsAnimation 180ms ease-in-out;
  }

  
  .wrapper {
    position: relative;
    width: 96%;
    top: 1%;
    left: 1.5%;
    height: 96%;
    border: var(--px-to-rem) solid var(--border-color);
    border-radius:calc(32*var(--px-to-rem));
    overflow: hidden;
  }
  
  .heading {
    font-family: PrimaryFont-Semibold;
    font-size: calc(24 * var(--px-to-vw));
    color: var(--text-headings);
    margin-left: 1%;
    padding: 1%;
    padding-top:1.5%;
  }
  
  .searchBar {
    position: absolute;
    top:2.5%;
    left:13%;
  }
  
  .tab {
    position: absolute;
    top: 8.2%;
    left: 2.3%;
    display: flex;
    flex-direction: row;
  }
  
  .tab >button {
    width: calc(110 * var(--px-to-rem));
    margin:calc(8*var(--px-to-vw));
    font-size: var(--font-size-16);
  }
  
  .tabButtonActive {
    font-family: PrimaryFont-Semibold;
    color: var(--color-primary);
    opacity: 0;
    animation:opacityIncrease 300ms forwards ease-in-out 200ms;
  }
  
  .tabButtonInActive {
    font-family: PrimaryFont-Medium;
    color:#1F1F6057;
    animation:opacityDecrease 300ms  ease-in-out ;
  }
  
  .cardDisplay {
    position: absolute;
    top: 18%;
    width: 100%;
    height: 87%;
    border: var(--px-to-rem) solid var(--border-color);
    border-radius: 1%;
    overflow: hidden;
  }
  
  button {
   background: none;
  }
  
  .iconDropdown {
    width: calc(38 * var(--px-to-rem));
    height: calc(22 * var(--px-to-rem));
    position: absolute;
    right: calc(0 * var(--px-to-rem));
  }
  
  .dropBtn {
    padding-left: 15%;
    width: 100%;
    height:calc(29*var(--px-to-rem));
    border: calc( 1* var(--px-to-vw)) solid var(--border-color);
    border-radius: var(--standard-border-radius);
    font-family: PrimaryFont-Regular;
    font-size: var(--font-size-16);
    color:var(--text-headings);
  }
  
  .publisherDropdown {
    position: absolute;
    top: 8.5%;
    left: 34.6%;
    width: 9.5%;
  }
  
  .dropDownContent {
    position: absolute;
    padding:5%;
    top:127%;
    left: calc(-23 * var(--px-to-vw));
    background-color: var(--white);
    width: 123%;
    border: calc(1 * var(--px-to-vw)) solid #E1E5EB;
    border-radius: calc(8*var(--px-to-rem));
    z-index: 1;
    animation: openDropDown 700ms ease-in-out forwards;
  }
  
  .dropDownCards {
    width: 94%;
    height: calc(56 * var(--px-to-rem));
    border-radius: calc(28*var(--px-to-rem));
    font-family: PrimaryFont-Regular;
    color: var(--text-headings);
    font-size: var(--font-size-16);
    position: relative;
    left:3%;
  }
  
  .dropDownCards:hover {
    background-color:  rgba(75, 38, 145, 0.07);
  }
  
  .publisherTextColor {
    color:#1D3764;
  }
  
  .articlePage {
    position: absolute;
    top: 0%;
    width: 99%;
    height: 87%;
    background: var(--white);
    opacity: 0;
  }
  
  .sortByDropDown {
    position: absolute;
    top: 8.5%;
    left: 22.7%;
    width: 9.5%;
  }
  
  .lastCreated {
    float: left;
    padding-left: 5%;
    padding-top: calc(17 * var(--px-to-vw));
    font-family: PrimaryFont-Semibold;
    font-size: var(--font-size-16);
    height: calc(36 * var(--px-to-rem));
    color: var(--color-primary);
  }
  
  .goBack {
    font-size: calc(18*var(--px-to-rem));
    font-family: PrimaryFont-Semibold;
    color:  #1F1F6089;
    padding-left:10%;
  }
  
  .flexContainer {
    display: flex;
    width: 100%;
    padding-left: calc(8 * var(--px-to-vw));
  }
  
  .iconSize {
    width:calc(32*var(--px-to-rem));
    height:calc(32*var(--px-to-rem));
  }
  
  .backButton {
    position: absolute;
    top: 3%;
    left: 1%;
    width:10%;
  }
  
  .selectedFilter {
    color:var(--color-primary);
    position: relative;
    text-align: left;
    left:5%;
    font-family: PrimaryFont-Semibold;
  }
  
  .selectedFilter:hover {
    background-color: white;
  }
  
  .articleCardTabContainer {
    position: absolute;
    top: 15.4%;
    width: 97.3%;
    left:0.6%;
    height: 84.6%;
    overflow: scroll;
    padding-bottom: 2%;
  }
  
  .articleCardTabContainer::-webkit-scrollbar {
    display: none;
  }
  
  .rotateUp{
    animation:rotateUp 700ms forwards ease-in-out;
  }
  
  .rotateDown{
    animation:rotateDown 700ms forwards ease-in-out;
  }
  
  @keyframes rotateUp {
   from { transform: rotate(0deg);}
   to   {transform: rotate(180deg);}
  }
  
  @keyframes rotateDown {
    from { transform: rotate(180deg);}
    to { transform: rotate(360deg);}
   }
  
  @keyframes opacityIncrease {
     from {opacity: 0%;}
     to {opacity: 100%;}
   }
  
  @keyframes opacityDecrease {
    from {opacity: 100%;z-index: 1;}
    to {opacity: 0%;z-index: -1;}
  }
  
  .closeDropDownAnimation{
    opacity: 1;
    animation: opacityDecrease 300ms forwards;
  }
  
  .filterTextFadeIn{
    opacity: 1;
  }
  
  .filterTextFadeIn{
    animation: opacityDecrease 300ms ;
  }
  
  .filterTextFadeOut{
    opacity: 1;
    animation: opacityDecrease 150ms forwards,opacityIncrease 150ms forwards 150ms ;
  }
  
  @keyframes dropBtnScale {
    0% {transform: scale(1);}
    50% {transform: scale(0.5);}
    100% {transform:scale(1);};
  }
  
  @keyframes openDropDown {
    0% {top: 100%;opacity:0%;}
    43%{top:110%;opacity:100%;}
    100% {top:127%;opacity:100%;}
  }
  
  .buttonScaleAnim{
    animation: dropBtnScale 120ms ease-in-out;
  }
  
  .fi{
    opacity:0;
    animation: opacityIncrease 2300ms;
  }
  
  .f1{
    animation:opacityIncrease 700ms forwards ease-in-out 120ms;
    
  }
  .newsWatchOpacityDecrease{
    animation:opacityDecrease 300ms forwards ease-in-out  120ms;
  }
  
  .articleOpacityDecrease{
    animation:opacityDecrease 300ms forwards ease-in-out  ;
  }
  
  .articleOpacityIncrease{
    animation:opacityIncrease 300ms forwards ease-in-out 300ms;
  }
  
  .newsWatchOpacityIncrease{
    opacity:0;
    animation:opacityIncrease 300ms forwards ease-in-out 120ms;
  }
  
  .tabOpen{
    opacity: 0;
    animation:opacityIncrease 300ms forwards ease-in-out 200ms;
  }
  .tabClose{
    animation:opacityDecrease 300ms  ease-in-out ;
  }
  

  // @flow
import React, { useState, useEffect } from 'react'
import { debounce } from 'lodash'
import { article } from '../../utils/textdata'
import styles from './newswatchStyles.module.css'
import { ArticleCard } from '../../components/cards/Articlecard'
import SearchBar from '../../components/SearchBar'
import { TestID } from '../../utils/testIDs'
import { SharedIcon } from '../../theme/icons'
import { ArticleFilterTypes } from '../../utils/constants'
import { ArticlePage } from '../Articlepage'

const sortByContent = ['Latest', 'Earliest']

export function Newswatch() {
  /**
   * @property {boolean} isallArticlesTabView - determines whether the article tab should appear .
   * @property {boolean} isallClusterTabView-  determines whether the cluster tab should appear .
   * @property {boolean} newswatchView - determines whether newswatch main page should appear .
   * @property {Array}   filteredArticleContent - store articlecards data
   * @property {boolean} isPublisherDropdownOpen  determines whether the publisher dropdown filter  should appear .
   * @property {string}  filterBy - store filter value for publisher filter.
   * @property {string}  publisherOptionSelected - store value of filter option selected .
   * @property {boolean} isArticlePageActive - determines whether the article page should appear .
   * @property {boolean} isSortByDropdownOpen - determines whether sort by dropdown should appear .
   * @property {string}  sortByOption - store value according to which sorting will be done.
   * @property {Array}   articlePageData - store data which will be rendered on Articlepage.
   */

  const [isallArticlesTabView, setAllArticlesTabView] = useState(true)
  const [isallClusterTabView, setAllClusterTabView] = useState(false)
  const [filteredArticleContent, setFilteredArticleContent] = useState([])
  const [newsWatchPageView, setNewsWatchPageView] = useState(true)
  const [filterBy, setFilter] = useState('Publisher')
  const [publisherOptionSelected, setPublisherOptionSelected] = useState('Publisher')
  const [isPublisherDropdownOpen, setPublisherDropdownOpen] = useState(false)
  const [sortByOption, setSortByOption] = useState('Sort By')
  const [isSortByDropdownOpen, setSortByDropdownOpen] = useState(false)
  const [, setLoading] = useState(true)
  const [articlePageData, setArticlePageData] = useState(article[0])
  const [articlePageView, setArticlePageView] = useState(false)
  const articleContent = article.slice(0)
  const [isAllArticleTabClick, setAllArticleTabClick] = useState(true)
  const [isNewsClusterTabClick, setNewsClusterTabClick] = useState(false)

  const openAllArticlesTab = () => {
    setAllArticlesTabView(true)
    setTimeout(() => setAllClusterTabView(false), 300)
    setAllArticleTabClick(true)
    setNewsClusterTabClick(false)
  }

  const openAllClusterTab = () => {
    setTimeout(() => setAllArticlesTabView(false), 300)
    setAllClusterTabView(true)
    setAllArticleTabClick(false)
    setNewsClusterTabClick(true)
  }

  /* Call the mutation to update the publisher filter and then update the state */
  const onPublisherOptionClick = (option) => {
    setTimeout(() => setPublisherOptionSelected(option), 150)
    setFilter(option)
    setPublisherDropdownOpen(false)
  }

  const onPublisherDropdownClick = (e) => {
    e.preventDefault()
    setPublisherDropdownOpen(!isPublisherDropdownOpen)
  }

  const onSortByDropdownClick = (e) => {
    e.preventDefault()
    setFilteredArticleContent(articleContent)
    setSortByOption('Sort By')
    setSortByDropdownOpen(!isSortByDropdownOpen)
  }

  /* Call the mutation to update the sort by and then update the state */
  const onSortByOptionClick = (option) => {
    setSortByOption(option)
    setFilteredArticleContent(article.slice(0))
    if (option === 'Earliest') setFilteredArticleContent(filteredArticleContent.reverse())
    setSortByDropdownOpen(false)
  }

  const backNewsWatchPage = () => {
    setNewsWatchPageView(!newsWatchPageView)
    setTimeout(() => setArticlePageView(false), 300)
    setAllArticlesTabView(true)
  }

  useEffect(() => {
    setFilteredArticleContent(article)
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const handleArticleSearchQuery = (e, type) => {
    const { value } = e.target
    if (value.length > 0) {
      const regex = new RegExp(`\\b${value}`, 'i')
      if (type === 0) {
        setFilteredArticleContent(
          articleContent.filter((c) => {
            return regex.test(c.headline) || regex.test(c.description) || regex.test(c.publisher)
          })
        )
      } else {
        setFilteredArticleContent(articleContent)
      }
    }
  }

  const onArticleSearchQueryChanged = debounce(handleArticleSearchQuery, 100)

  return (
    <div className={styles.wrapper}>
      <div
        className={` ${
          newsWatchPageView ? styles.newsWatchOpacityIncrease : styles.newsWatchOpacityDecrease
        }`}>
        <div>
          {true && (
            <div>
              <div>
                <div className={styles.heading}>NewsWatch</div>
                <div className={styles.searchBar}>
                  <SearchBar
                    showSearchBox={false}
                    onChangeText={(e) => onArticleSearchQueryChanged(e, 0)}
                  />
                </div>
              </div>
              <div className={styles.tab}>
                <button
                  id="articlebutton"
                  data-testid="articlebutton"
                  type="button"
                  className={` ${
                    isAllArticleTabClick ? styles.tabButtonActive : styles.tabButtonInActive
                  }`}
                  onClick={openAllArticlesTab}>
                  All articles
                </button>
                <button
                  type="button"
                  id="clusterbutton"
                  onClick={openAllClusterTab}
                  className={` ${
                    isNewsClusterTabClick ? styles.tabButtonActive : styles.tabButtonInActive
                  }`}>
                  News cluster
                </button>
              </div>
              <div
                className={`${styles.publisherDropdown} ${
                  isPublisherDropdownOpen ? styles.buttonScaleAnim : ''
                }`}>
                <button className={styles.dropBtn} type="button" data-testid="f2" onClick={onPublisherDropdownClick}>
                  <div className={styles.flexContainer}>
                    <div
                      className={
                        isPublisherDropdownOpen ? styles.filterTextFadeIn : styles.filterTextFadeOut
                      }>
                      {publisherOptionSelected}
                    </div>
                    <img
                      src={SharedIcon.ARROW_DOWN}
                      alt="Dropdown"
                      className={`${styles.iconDropdown} ${
                        isPublisherDropdownOpen ? styles.rotateUp : styles.rotateDown
                      }`}
                    />
                  </div>
                </button>
                {true && (
                  <div
                    className={`${styles.dropDownContent} ${
                      isPublisherDropdownOpen
                        ? styles.openDropDownAnimation
                        : styles.closeDropDownAnimation
                    }`}>
                    {ArticleFilterTypes.map((filter, index) => (
                      <button
                        key={index}
                        data-testid={TestID.ARTICLECARD_FILTER}
                        type="button"
                        className={`${styles.dropDownCards} ${styles.publisherTextColor} ${
                          filter === publisherOptionSelected ? styles.selectedFilter : ''
                        }  `}
                        onClick={() => onPublisherOptionClick(filter)}>
                        {filter}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <div
                  className={`${styles.sortByDropDown} ${
                    isSortByDropdownOpen ? styles.buttonScaleAnim : ''
                  }`}>
                  <button
                    className={`${styles.dropBtn} ${styles.sortByBtn}`}
                    type="button"
                    data-testid="f"
                    onClick={onSortByDropdownClick}>
                    <div className={styles.flexContainer}>
                      <div
                        className={
                          isSortByDropdownOpen ? styles.filterTextFadeIn : styles.filterTextFadeOut
                        }>
                        {sortByOption}
                      </div>
                      <img
                        src={SharedIcon.ARROW_DOWN}
                        alt="Dropdown"
                        className={`${styles.iconDropdown} ${
                          isSortByDropdownOpen ? styles.rotateUp : styles.rotateDown
                        }`}
                      />
                    </div>
                  </button>
                  {true && (
                    <div
                      className={`${styles.dropDownContent} ${
                        isSortByDropdownOpen
                          ? styles.openDropDownAnimation
                          : styles.closeDropDownAnimation
                      }`}>
                      <div className={styles.lastCreated}>Last created</div>
                      {sortByContent.map((filter, index) => (
                        <button
                          key={index}
                          type="button"
                          data-testid={TestID.ARTICLECARD_SORTBY}
                          className={`  ${styles.dropDownCards} `}
                          onClick={() => onSortByOptionClick(filter)}>
                          {filter}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={isAllArticleTabClick ? styles.tabOpen : styles.tabClose}>
          {isallArticlesTabView && (
            <div className={`${styles.articleCardTabContainer}`}>
              {filteredArticleContent.map(
                (articledata, i) =>
                  (filterBy === 'Publisher' || articledata.publisher === filterBy) && (
                    <div key={i}
                    data-testid={TestID.ARTICLE_CARD}>
                      <ArticleCard
                        article={articledata}
                        showNewswatchPage={() => {
                          setArticlePageData(articledata)
                          setNewsWatchPageView(!newsWatchPageView)
                          setArticlePageView(true)
                        }}
                      />
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
      <div>
        {articlePageView && (
          <div
            id="articlepage"
            className={`${styles.articlePage} ${
              !newsWatchPageView ? styles.articleOpacityIncrease : styles.articleOpacityDecrease
            } `}>
            <button type="button" className={styles.backButton} onClick={() => backNewsWatchPage()}>
              <div className={styles.flexContainer}>
                <img className={styles.iconSize} src={SharedIcon.ARROW_LEFT} alt="a" />
                <div className={styles.goBack}>go back</div>
              </div>
            </button>
            <ArticlePage
              articleId={articlePageData.articleId}
              body={articlePageData.body}
              category={articlePageData.category}
              headline={articlePageData.headline}
              publisher={articlePageData.publisher}
              time={articlePageData.time}
              description={articlePageData.description}
              url={articlePageData.url}
            />
          </div>
        )}
      </div>
      <div className={isNewsClusterTabClick ? styles.tabOpen : styles.tabClose}>
        {isallClusterTabView && (
          <div id="allcluster" className={`${styles.cardDisplay} `}>
            <div className={styles.overflowContainer}>welcome to all cluster</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Newswatch
