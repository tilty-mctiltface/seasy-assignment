import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { DialButtonProps } from './types'
import { DialButton } from './components/DialButton'



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
      <div className='numbers'>
        <span>Numbers:</span><span>{numbers.join(' ')}</span>
      </div>
      <div className='dial flex flex-row flex-wrap w-auto'>
        {
          DIAL.map(dialBtn => <DialButton onPress={() => setNumbers([...numbers, dialBtn.num])} characters={dialBtn.characters} num={dialBtn.num} key={dialBtn.characters.toString()} />)
        }
      </div>
      <div className='buttons'>
        <button onClick={deleteLast}>Delete last entry</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className='results'>
        {words.join(' ')}
      </div>
    </div>
  )
}

export default App
