import React, { useState } from "react";
import { ListGroupItem } from "reactstrap";
import Plus from "../icons/plus.svg";
import Less from "../icons/less.svg"

function QuestionAnswer({ question, answer }) {
  const [showAnswer, setshowAnswer] = useState(false);
  const toggleAnswer = () => {
    setshowAnswer(!showAnswer);
  };
  return (
    <ListGroupItem className="qa-item mb-2">
      <div onClick={toggleAnswer} className="qa-item-header">
        <h5 className="mb-0" className="question-text">
          <span>&rarr; </span>{question}
        </h5>
        <div className="chevron-icon">{showAnswer ?<Less height="16px" width="16px" />:<Plus height="16px" width="16px" className="icon"/>}</div>
      </div>
      {showAnswer && (
        <div className="px-3 py-2 answer-div">
          <p className="mb-0 answer-text">{answer}</p>
        </div>
      )}
      <style global jsx>{`
          .qa-item {
            background-color: #000;
          }
          .qa-item-header {
            display: flex;
            align-items: center;
            color:#fff;
          }
          .qa-item-header:hover {
            cursor: pointer;
          }
          .question-text {
            flex: 1;
            font-weight:500;
            font-size:1.4rem;
          }
          .answer-div{
              background-color:#3d3d3d;
              border-radius:5px;
          }
          .answer-text{
              font-size:1.2rem;
              color:rgba(255,255,255,0.7)
          }
          .chevron-icon{
              display:flex;
              align-items:center;
              justify-content:center;
              background-color:#3d3d3d;
              height:32px;
              width:32px;
              border-radius:50%
          }
          .chevron-icon icon{
            color:#fff;
          }
        `}
      </style>
    </ListGroupItem>
  );
}

export default QuestionAnswer;
