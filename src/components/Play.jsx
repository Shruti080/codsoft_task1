import React, { Component } from 'react'
import { AiFillThunderbolt } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";
import "./Play.css";
import questions from './questions.json'
import isEmpty from '../utils/isEmpty';
import { Link } from 'react-router-dom';
// import M from 'materialize-css'

class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {
        questions,
        currentQuestion: {},
        nextQuestion: {},
        previousQuestion: {},
        answer:'',
        numberOfQuestions:0,
        numberOfAnsweredQuestions: 0,
        currentQuestionIndex: 0,
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        hints: 5,
        fiftyFifty: 2,
        usedFiftyFifty: false,
        time: {}
        };
    }

    componentDidMount(){
        const {questions,currentQuestion, nextQuestion, previousQuestion} = this.state;
        this.displayQuestions(questions,currentQuestion,nextQuestion,previousQuestion);
    }

    displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {
        let {currentQuestionIndex} = this.state;
        if(!isEmpty(questions)) {
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex - 1];
            const answer = currentQuestion.answer;
            this.setState({
                currentQuestion,
                nextQuestion,
                previousQuestion,
                numberOfQuestions:questions.length,
                answer,
            });
        }
    };

    handleOptionClick = (e) =>{
        if(e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()){
            this.correctAnswer();
        }
        else{
            this.worngAnswer();
        }
    }

    handleNextBtnClick = () =>{
        if(this.state.nextQuestion !== undefined){
            this.setState(prevState =>({
                currentQuestionIndex: prevState.currentQuestionIndex+1
            }),() =>{
                this.displayQuestions(this.state.state,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
            });
        }
    };

    handlePriviousBtnClick = () =>{
        if(this.state.previousQuestion !== undefined){
            this.setState(prevState =>({
                currentQuestionIndex: prevState.currentQuestionIndex-1
            }),() =>{
                this.displayQuestions(this.state.state,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
            });
        }
    };

    handleQuitBtnClick = () =>{
        window.confirm("Are you sure you want to quit?");
        if(window.confirm("Are you sure?")){
            this.props.history.push('/');
        }
    }

    correctAnswer = () =>{
        alert("correct answer!");
        this.setState(prevState =>({
            score: prevState.score +1,
            correctAnswers: prevState.correctAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions+1
        }), () =>{
            this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
        });
    }

    worngAnswer = () =>{
         alert("wrong answer!");
        this.setState(prevState =>({
            wrongAnswers: prevState.wrongAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions+1,
        }),() =>{
            this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);

        });
    }

    render() {
        const {currentQuestion,currentQuestionIndex,numberOfQuestions} = this.state;
        return (
            <>
                <div className="questionContainer">
                    <h1>Quiz Mode</h1>
                    <div className='hintContainer'>
                        <div className='left'><AiFillThunderbolt /> 2</div>
                        <div><AiOutlineBulb />5</div>
                       
                    </div>
                    <span>{currentQuestionIndex + 1} of {numberOfQuestions} &nbsp;&nbsp;&nbsp;</span>
                    <span className="right"><AiOutlineClockCircle />10:00</span>
                    
                    <h2 className='question'>{currentQuestion.question}</h2>
                    <div className='optionsContainer'>
                        <p onClick={this.handleOptionClick} className='options'>{currentQuestion.optionA}</p>
                        <p onClick={this.handleOptionClick} className='options'>{currentQuestion.optionB}</p>
                    </div>
                    <div className='optionsContainer'>
                        <p onClick={this.handleOptionClick} className='options'>{currentQuestion.optionC}</p>
                        <p onClick={this.handleOptionClick} className='options'>{currentQuestion.optionD}</p>
                    </div>
                    <div className='btnContainer'>
                    <button id="previousBtn" onClick={this.handlePriviousBtnClick}>Previous</button>
                    <button id="nextBtn" onClick={this.handleNextBtnClick}>Next</button>
                    <button id="quitBtn" onClick={this.handleQuitBtnClick}>Quit</button>
                    </div>
                   
                </div>
                <button className='Btn'><a href="./Result.jsx">Submit</a></button>
            </>
        );
    }
}

export default Play
