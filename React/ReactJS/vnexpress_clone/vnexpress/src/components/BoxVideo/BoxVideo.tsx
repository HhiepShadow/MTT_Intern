import { observer } from 'mobx-react-lite';
import './boxvideo.css'
import BoxVideoHeader from './BoxVideoHeader'
import LeftBoxVideo from './LeftBoxVideo'
import RightBoxVideo from './RightBoxVideo';
import { useContext } from 'react';
import ArticleContext from '../../context/ArticleContext';

const BoxVideo = observer(() => {
  const useArticleStore = useContext(ArticleContext);
  const videoArticles = useArticleStore.articles.articles.filter(videoArticle => videoArticle.topic === "Video");

  return (
    <div className="box-video">
      <div className="container">
        <BoxVideoHeader />

        <div className="box-video-content">
          <LeftBoxVideo videoArticle={videoArticles[0]}/>
          <RightBoxVideo videoArticles={videoArticles.slice(1)}/>
        </div>
      </div>
    </div>
  );
})

export default BoxVideo