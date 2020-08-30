import React from 'react';
import Highlight from 'react-highlight.js';
import './Card.css';

const renderItems = (num, arr, fn) => {
  return arr
    .filter((item, index) => index >= num * 20 && index < num * 20 + 20)
    .map((item, index) => {
      const { question, answers, rightAnswer, explanation } = item;
      return (
        <div className="card mb-3" key={index}>
          <div className="card-header">Вопрос {num * 20 + index + 1}</div>
          <div className="card-body">
            <div className="question">
              <Highlight language="javascript">{question}</Highlight>
            </div>
            <div className="answers">
              <div className="radio">
                <input id={index + 'radio-1'} name="radio" type="radio" />
                <label htmlFor={index + 'radio-1'} className="radio-label" 
                       data-answer="A" data-index={index}
                       onClick={fn}>
                  {answers[0]}
                </label>
              </div>
              <div className="radio">
                <input id={index + 'radio-2'} name="radio" type="radio" />
                <label htmlFor={index + 'radio-2'} className="radio-label" 
                       data-answer="B" data-index={index}
                       onClick={fn}>
                  {answers[1]}
                </label>
              </div>
              <div className="radio">
                <input id={index + 'radio-3'} name="radio" type="radio" />
                <label htmlFor={index + 'radio-3'} className="radio-label" 
                       data-answer="C" data-index={index}
                       onClick={fn}>
                  {answers[2]}
                </label>
              </div>
              <div className="radio">
                <input id={index + 'radio-4'} name="radio" type="radio" />
                <label htmlFor={index + 'radio-4'} className="radio-label" 
                       data-answer="D" data-index={index}
                       onClick={fn}>
                  {answers[3]}
                </label>
              </div>
            </div>
            <details>
              <summary>Показать правильный ответ</summary>
              <div className="rightAnswer">
                <h4 className="card-title margin">
                  Правильный ответ: {rightAnswer}
                </h4>
              </div>
              <div className="explanation">{explanation}</div>
            </details>
          </div>
        </div>
      );
    });
};

function Card({ num, source, answerOnClick }) {
  const items = renderItems(num, source, answerOnClick);
  return <>{items}</>;
}

export default Card;
