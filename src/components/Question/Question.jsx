import QuestionTimer from "../QuestionTimer/QuestionTimer"
import Answer from "../Answers/Answer"

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer
}) {
  return (
    <div id="question">
      <QuestionTimer
        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      <h2>{questionText}</h2>
      <Answer
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  )
}
