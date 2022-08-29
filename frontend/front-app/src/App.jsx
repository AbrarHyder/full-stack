import React from 'react';

const App = () => {
 return <>
 <div className='container'>
  <div className='smalldiv'>
    <h2>Todo list</h2>
    <input type ="text" placeholder='items'/>
    <button>Add Items</button>
    <br/>
    <h5> status</h5>
    <button>Added</button>
    <button>Pending</button>

    
  </div>
 </div>
 </>
}
export default App;