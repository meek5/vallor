import React, { useState } from "react";
import { ListGroupItem } from "reactstrap";
import Plus from "../icons/plus1.svg";
import Less from "../icons/less1.svg"

function QuestionAnswer({ question, answer }) {
  const [showAnswer, setshowAnswer] = useState(false);
  const toggleAnswer = () => {
    setshowAnswer(!showAnswer);
  };
  return (
    <ListGroupItem className="qa-item py-5 px-5 mb-3">
      <div onClick={toggleAnswer} className="qa-item-header">
        <h5 className="mb-0" className="question-text">
          {/* <span>&rarr; </span> */}
          {question.toUpperCase()}
        </h5>
        <div className="chevron-icon">{showAnswer ?<Less height="24px" width="24px" />:<Plus height="24px" width="24px" className="icon"/>}</div>
      </div>
      {showAnswer && (
        <div className=" py-2 answer-div">
          <p className="mb-0 answer-text">{answer}</p>
        </div>
      )}
      <style global jsx>{`
          .qa-item {
            background-color: #ffffff;
            font-family: "Maven Pro";
            border:none;
             box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.01);
             border-radius:30px;
          }
          .qa-item-header {
            display: flex;
            align-items: center;
            color:#2B89A5;
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
              /* background-color:#3F3D56; */
              border-radius:5px;
          }
          .answer-text{
              font-size:1.2rem;
              color:#000000;
          }
          .chevron-icon{
              display:flex;
              align-items:center;
              justify-content:center;
              /* background-color:#3d3d3d; */
              height:44px;
              width:44px;
              border-radius:50%
          }
          .chevron-icon .icon{
            color:#0E201A;
          }
        `}
      </style>
    </ListGroupItem>
  );
}

export default QuestionAnswer;
