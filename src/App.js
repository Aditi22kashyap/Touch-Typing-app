// import logo from './logo.svg';
import './App.css';
import { useState , useRef} from 'react'

const getCloud = () => `Chance or accident is not responsible for the things that happen to you, nor is predestined fate the author of your fortune or misfortune. Your subconscious impressions determine the conditions of your world. The subconscious is not selective; it is impersonal and no respecter of persons. The subconscious is not concerned with the truth or falsity of your feeling. It always accepts as true that which you feel to be true. Feeling is the assent of the subconscious to the truth of that which is declared to be true. Because of this quality of the subconscious there is nothing impossible to man. Whatever the mind of man can conceive and feel as true, the subconscious can and must objectify. Your feelings create the pattern from which your world is fashioned, and a change of feeling is a change of pattern.`.split(' ')
// .sort(()=>Math .random()>0.5 ? 1: -1)

function Word(props)
{
   const {text,active,correct} = props
   if(correct === true){
    return <span className="correct">{text} </span>
   }
   if(correct === false){
    return <span className="incorrect">{text} </span>
   }
   if(active){
    return <span className="active">{text} </span>
   }
   return <span >{text} </span>
}
function App() {

  const [userInput , setUserInput] = useState('')

  const cloud= useRef(getCloud())

  const [activeWordIndex,setActiveWordIndex]= useState(0)
  const [correctWordArray , setCorrectWordArray] = useState([])

  function processInput(value){
    if(value.endsWith(' ')){
      //the user has finished this word
      setActiveWordIndex(index => index+ 1)
      setUserInput('')
      
      setCorrectWordArray(data => {
          const word= value.trim()
          const newResult = [...data]
          newResult[activeWordIndex] = word === cloud.current[activeWordIndex] 
          return newResult
        })
    
    }
    else 
    {
      setUserInput(value)
    }
  }
 // console.log(cloud.current)
  return (
    <div /* className="App"*/>
     <h1>Typing test....</h1>
     <p>{cloud.current.map((word, index) => {
      return <Word 
                text={word} 
                active={index === activeWordIndex} 
                correct={correctWordArray[index]} 
                />
     })}</p>
     <input 
     type="text" 
     placeholder="type here..."
     value={userInput} 
     onChange={(e)=>processInput(e.target.value)}/>
     <h3>Project to be continued..</h3>
    </div>
  );
}

export default App;
