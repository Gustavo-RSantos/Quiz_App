import QuestionTimer from "../QuestionTimer/QuestionTimer"
import Answer from "../Answers/Answer"
import { useState } from "react"
import QUESTIONS from "../../questions"

export default function Question({
  index,
  onSelectAnswer,
  onSkipAnswer
}) {

  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  })

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: QUESTIONS[index].answers[0] === answer,
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: true
      })

      setTimeout(() => {
        onSelectAnswer(answer)
      }, 2000)
    }, 1000)
  }

  let answerState = '';

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'incorrect';
  } else if (answer.selectedAnswer) {
    answerState = 'selected';
  }

  return (
    <div id="question">
      <QuestionTimer
        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answer
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  )
}
