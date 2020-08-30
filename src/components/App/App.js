import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import tasks from '../../data/tasks.js';

class App extends Component {
  state = {
    source: tasks,
    num: 0,
  };

  pageOnClick = (index) => {
    this.setState({
      num: index,
    });
    // const body = document.querySelector('body');
    // body.scrollIntoView({ behavior: 'smooth' });
    const answers = document.querySelectorAll('.radio-label');
    answers.forEach(el => {
      el.classList.remove('true');
      el.classList.remove('false');
    });
    const details = document.querySelectorAll('details');
    details.forEach(el => {
      if (el.open) {
        el.open = false;
      }
    });
    const inputs = document.querySelectorAll('input');
    inputs.forEach(el => {
      if (el.checked) {
        el.checked = false;
      }
    });
    const answersContainer = document.querySelectorAll('answers');
    answersContainer.forEach(el => el.style.pointerEvents = "auto");
    const pages = document.querySelectorAll('.page-item');
    pages.forEach((el, i) => {
      el.classList.remove('active');
      if(i === index) {
        el.classList.add('active');
      }
       console.log(i, index)     
    });
  };

  answerOnClick = (event) => {
    const index = this.state.num * 20 + +event.target.dataset['index'];
    const rightAnswer = tasks[index].rightAnswer;
    const answer = event.target.dataset['answer'];
    if(answer === rightAnswer) {
      event.target.classList.add('true')
    } else {
      event.target.classList.add('false')
    }
  }

  render() {
    const { source, num } = this.state;
    return (
      <div className="App container">
        <h1>Задачи по JavaScript</h1>
        <h3>для подготовки к собеседованию</h3>
        <h4>Что будет выведено в консоль?</h4>
        <Card source={source} num={num} answerOnClick={this.answerOnClick}/>
        <Pagination pageOnClick={this.pageOnClick} />
      </div>
    );
  }
}

export default App;
