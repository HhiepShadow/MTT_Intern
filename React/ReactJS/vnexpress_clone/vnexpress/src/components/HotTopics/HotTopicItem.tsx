import { HotTopic } from '../../models/HotTopic'

const HotTopicItem = ({hotTopic}: {hotTopic: HotTopic}) => {
  return (
    <li>
      <div className="hot-topic-item">
        <a href="/">
          <img src={hotTopic.img} alt="" />
        </a>
        <div className="hot-topic-item-content">
          <h3>
            <a href="#">
              {hotTopic.title}
            </a>
          </h3>
        </div>
      </div>
    </li>
  );
}

export default HotTopicItem