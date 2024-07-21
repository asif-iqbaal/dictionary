import { useState } from 'react';
import Input from './component/Input';
import './App.css';
import useDictionaryInfo from './hooks/dictionaryInfo';
import Background from './dictionary.jpg'
function App() {
  const [text, setText] = useState("hello");
  const meaning = useDictionaryInfo(text);


  return (
    <div className=" w-screen flex justify-center items-center h-screen "
    style={{
       backgroundImage: `url('https://img.freepik.com/free-photo/modern-background-with-lines_1361-3533.jpg?t=st=1719490652~exp=1719494252~hmac=a9630d4c83e8b3a0e6007acf6daa85302a1551d776db6c3535cab82ce6283795&w=996')`,
   }}
    >
    
      <div className=' w-1/3 flex flex-col  items-center backdrop-blur-sm  h-80 relative top-0 rounded-lg shadow-2xl shadow-white'>
      <Input
        text={text}
        onTextChange={(newText) => setText(newText)}
      />
      <div className='flex float-start text-white'>
      {meaning && (
        <div className='w-full'>
          <h2 className='text-left'>Meaning of : {text}</h2>
          <p>par of speech : {meaning.partOfSpeech}</p>
           <p className='text-center'>definition : {meaning.definition}</p>
           {meaning.audioUrl && (
            <div>
              <audio controls>
                <source src={meaning.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
      )}
      </div>
    </div>
    </div>
  );
}

export default App;
