import { useContext } from "react";
import QAContext from "../../context/QAContext";
import { observer } from "mobx-react-lite";

const QuestionAnswer = observer(() => {
  const useQAsStore = useContext(QAContext);
  return (
    <div className="faq-weekly">
      <h3>
        <span>CÂU HỎI TRONG TUẦN</span>
      </h3>
      <ul className="list-faq-weekly">
        {useQAsStore.qas.QAs.map((qa) => (
          <li key={qa.id}>
            <div className="faq-item">
              <span className="item-number">{qa.id}</span>
              <div className="item-content">
                <h4>
                  <a href="/">{qa.question}</a>
                </h4>
                <p>
                  {qa.answer}
                  <button>
                    <i className="icon-down-open"></i>
                  </button>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default QuestionAnswer;
