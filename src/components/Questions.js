import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Message, Button } from "semantic-ui-react"

const Questions = props => {
	let answerChoices = []
	let correctAnswer = ""

	const handleClick = (e, { value }) => {
		value === correctAnswer ? props.nextQuestion() : props.endGame()
	}

	if (props.question) {
		let rand
		correctAnswer = props.question.correct_answer
		console.log(correctAnswer)
		answerChoices = [...props.question.incorrect_answers]
		if (props.question.incorrect_answers.length == 1) {
			rand = Math.floor(Math.random() * 2)
			answerChoices.splice(rand, 0, correctAnswer)
		} else {
			rand = Math.floor(Math.random() * 4)

			answerChoices.splice(rand, 0, correctAnswer)
		}
	}
	return props.question ? (
		<div>
			<h3>Category: {props.question.category}</h3>
			<h2>
				<strong>{props.question.question}</strong>
			</h2>
			{answerChoices.map(choice => (
				<Button value={choice} onClick={handleClick}>
					{choice}
				</Button>
			))}
		</div>
	) : null
}

export default Questions

// if props.question.correct_answer === userAnswer

// {newQuestions.map((q, i) => {
//   return (
//     <div key={i}>
//         <p><strong>{ q.category }</strong></p><br></br>
//         <p>{ q.question }</p><br></br>
//           <Message hidden={ q.correct_answer === "Correct! On to the next!" ? false : true } color={"red"}>
//             { q.correct_answer }
//           </Message><br></br>
//         <p>{}</p>
//     </div>
//   )}
// )
// }
//
