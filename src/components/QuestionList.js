import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([]);


  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(res => res.json())
      .then(data => setQuestions(data))
  }, [])



  const questionsList = questions.map((question) => <QuestionItem question={question} key={question.id} handleDeleteClick={handleDeleteClick} />)


  function handleDeleteClick(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        console.log("deleted!")
        setQuestions(questions.filter ((question)=>  question.id !== id))
      })
    }



  return (
    <section>
      <h1>Quiz Questions</h1>
      {questionsList}


      <ul></ul>
    </section>
  );
}

export default QuestionList;