import './App.css';
import Random from "./components/Random"
import Tag from './components/Tag';

function App() {
  return (
    <div className='background w-full h-full flex flex-col items-center'  >
      <nav>
        <div className='bg-white'>RANDOM GIFS</div>
      </nav>
      <div className="w-full justify-center flex flex-col items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
