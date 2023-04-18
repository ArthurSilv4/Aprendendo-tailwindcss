import { Box } from './components/Box'

function App() {

  return (
    <div className='p-10 bg-blue-200 h-screen flex flex-col justify-center items-center'>
      <Box/>

      <a 
        className='block shadow bg-green-600 text-white text-center p-4 mt-5 rounded-xl hover:bg-green-500'
        href="">
        Quero conhecer mais
      </a>
    </div>
  )
}

export default App
