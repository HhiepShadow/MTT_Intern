import { useContext } from "react";
import QAContext from "../../context/QAContext";
import { observer } from "mobx-react-lite";

const MostQuestions = observer(() => {
  const useQAsStore = useContext(QAContext);

  return (
    <div className="faq-box">
      <h3>
        <span>HỎI NHIỀU</span>
      </h3>

      <ul>
        {useQAsStore.qas.QAs.map((qa) => (
          <li key={qa.id}>
            <div className="faq-item">
              <span className="item-index">{qa.id}</span>
              <div className="item-content">
                <h4>
                  <a href="/">
                    {qa.question}
                  </a>
                </h4>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default MostQuestions;
