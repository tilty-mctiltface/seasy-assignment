import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { DialButtonProps } from './types'
import { DialButton } from './components/DialButton'
import { Word } from './components/Word'



const DIAL: DialButtonProps[] = [
  {
    num: '1',
    characters: ['']
  },
  {
    num: '2',
    characters: ['a', 'b', 'c']
  },
  {
    num: '3',
    characters: ['d', 'e', 'f']
  },
  {
    num: '4',
    characters: ['g', 'h', 'i']
  },
  {
    num: '5',
    characters: ['j', 'k', 'l']
  },
  {
    num: '6',
    characters: ['m', 'n', 'o']
  },
  {
    num: '7',
    characters: ['p', 'q', 'r', 's']
  },
  {
    num: '8',
    characters: ['t', 'u', 'v']
  },
  {
    num: '9',
    characters: ['w', 'x', 'y', 'z']
  }
]

function App() {
  const [numbers, setNumbers] = useState<string[]>([])
  const [words, setWords] = useState<string[]>([])

  useEffect(() => {
    const getWords = async (num: string) => {
      const resp = await fetch(`http://localhost:8000/t9/${num}`)
      const data = await resp.json()
      setWords(data.words)
    }
    if (numbers.length > 0) getWords(numbers.join('')).catch(console.error)
  }, [numbers])

  const reset = () => {
    setNumbers([])
    setWords([])
  }

  const deleteLast = () => {
    setNumbers([...numbers.slice(0, -1)])
  }

  return (
    <div className="App flex flex-col items-center">
      <div className='mb-8'>
        <span className='text-xl font-bold'>Numbers:</span><span className='text-xl font-bold'> {numbers.join(' ')}</span>
      </div>
      <div className='mb-8 flex flex-row flex-wrap gap-2 justify-center'>
        {
          DIAL.map(dialBtn => <DialButton onPress={() => setNumbers([...numbers, dialBtn.num])} characters={dialBtn.characters} num={dialBtn.num} key={dialBtn.characters.toString()} />)
        }
      </div>
      <div className='flex gap-4 mb-8'>
        <button className='button' onClick={deleteLast}>Delete last entry</button>
        <button className='button' onClick={reset}>Reset</button>
      </div>
      <div className='flex flex-wrap gap-2'>
        {
          words.map(word => <Word word={word} />)
        }
      </div>
    </div>
  )
}

export default App
