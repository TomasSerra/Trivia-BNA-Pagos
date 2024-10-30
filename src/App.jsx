import React, {useEffect, useState} from 'react'
import './App.scss';
import Home from './pages/home/Home';
import Trivia from './pages/trivia/Trivia';
import End from './pages/end/End';
import Questions from './assets/data/questions.json';

function App() {
  const [page, setPage] = useState(0);
  const [topic, setTopic] = useState("1");
  const [questions, setQuestions] = useState({
    total: 0,
    correct: 0
  });

  useEffect(() => {
    bloquearGestos()
  }, [])

  useEffect(() => {
    if(page === 0){
      setQuestions({total: 0,
        correct: 0
      });
    }
  }, [page])
  
  function bloquearGestos(){
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('selectstart', event => event.preventDefault());
  }
  return (
    <>
      {page === 0 && <Home goToNextPage={() => {setPage(1)}}/>}
      {page === 1 && <Trivia topic={topic} intervalTime={3} goToNextPage={() => {setPage(2)}} questions={Questions} setQuestionInfo={setQuestions} questionTime={30} numberOfQuestions={3}/>}
      {page === 2 && <End goToNextPage={() => {setPage(0)}} totalQuestions={questions.total} correctQuestions={questions.correct}/>}
    </>
  );
}

export default App;
