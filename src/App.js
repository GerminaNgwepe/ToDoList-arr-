
import './App.css';
import task  from './taks.png'
import assigned from './assigned.png'
import completed  from './completed.png'
import  day  from './images.png'
import important  from './important.png'
import planned  from './planned.png'
import user  from './user.png'
import search  from './search.png'
import all  from './all.png'
/* import TodoForm from './components/TodoForm'; */
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='main' >
      <div className='one'>
        <div className='user'><img className='pic' src={user}/>Laro Ngwepe</div>
       <input className='search' placeholder='🔍search' ></input>
        <nav>
          <ul>
            <li><img className='pic' src={day}/>My day</li>
            <li><img className='pic' src={important}/>Important</li>
            <li><img className='pic' src={planned}/>Planned</li>
            <li><img className='pic' src={all}/>All</li>
            <li><img className='pic' src={completed}/>Completed</li>
            <li><img className='pic' src={assigned}/>Assigned to me</li>
            <li><img className='pic' src={task}/>Tasks</li>
          </ul>
        </nav>
      </div>
      <div className='two'>
      <TodoList/>
    
    </div>
    </div>
  );
  
}

export default App;
