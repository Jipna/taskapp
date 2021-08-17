import React from 'react'
import { Button, Card, Form, Navbar, Container, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

 

function Todo({ todo, index, removeTodo }) {

  return (

    <div className="todo">

      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>

      <span className="m-2">

        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>

      </span>

    </div>

  );

}

 

function FormTodo({ addTodo }) {

  const [value, setValue] = React.useState("");

 

  const handleSubmit = e => {

    e.preventDefault();

    if (!value) return;

    addTodo(value);

    setValue("");

  };

 

  return (

    <Form onSubmit={handleSubmit}>

      <Form.Group>

        <Form.Label><b> + Add Task</b></Form.Label>

        <Form.Control type="text"  className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new task" />

      </Form.Group>

      <Button className="className=btn btn-primary"  variant="btn btn-primary btn-lg " type="submit">

        Submit

      </Button>

    </Form>

  );

}

 

function App() {

  const [todos, setTodos] = React.useState([

 

  ]);

 

  const addTodo = text => {

    const newTodos = [...todos, { text }];

    setTodos(newTodos);

  };

 

  const removeTodo = index => {

    const newTodos = [...todos];

    newTodos.splice(index, 1);

    setTodos(newTodos);

  };

 

  return (

    <div className="app">

      <Navbar bg="dark" variant="dark" style={{ width: '120rem' }}>

        <Container>

          

          <Nav className="me-auto">

            

            
          </Nav>

        </Container>

      </Navbar>

      <div className="container" style={{ width: '120rem' }}>

      
        <div class="container p-5 my-5 bg-primary text-black">
  <h1>TASK MANAGEMENT</h1>
  <p></p>
</div>






        <FormTodo addTodo={addTodo} />

        <div>

         {todos.map((todo, index) => (

            <Card>

              <Card.Body>

                <Todo

                  key={index}

                  index={index}

                  todo={todo}

                  removeTodo={removeTodo}

                />

              </Card.Body>

            </Card>

          ))}

        </div>

      </div>

    </div>

  );

}

 

export default App;
