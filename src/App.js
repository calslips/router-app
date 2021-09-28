import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>TKTL notes app</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
);

const Notes = ({ notes }) => (
  <div>
    <h2>Notes</h2>
    <ul>
      {notes.map(note =>
        <li key={note.id}>{note.content}</li>
      )}
    </ul>
  </div>
);

const Users = () => (
  <div>
    <h2>Users</h2>
    <ul>
      <li>Leonardo</li>
      <li>Raphael</li>
      <li>Donatello</li>
      <li>Michelangelo</li>
    </ul>
  </div>
);

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'Matti Luukkainen'
    },
    {
      id: 2,
      content: 'Browser can execute only Javascript',
      important: false,
      user: 'Matti Luukkainen'
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'Arto Hellas'
    }
  ]);

  const padding = {
    padding: 5
  };

  return (
    <div>
    <Router>
      <div>
        <Link style={padding} to='/'>home</Link>
        <Link style={padding} to='notes'>notes</Link>
        <Link style={padding} to='users'>users</Link>
      </div>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/notes'>
          <Notes notes={notes}/>
        </Route>
        <Route path='/users'>
          <Users />
        </Route>
      </Switch>

    </Router>
      <div>
        <br />
        <em>Note app, Department of Computer Science 2021</em>
      </div>
    </div>
  );
};

export default App;
