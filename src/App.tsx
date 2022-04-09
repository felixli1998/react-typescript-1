import React, { useState } from "react";
import "./App.css";
import InputFields from "./components/InputFields";
import SingleTask from "./components/SingleTask";
import Model from "./Model";

const App: React.FC = () => {
  // this is declaring a useState hook, todo is now an empty string
  // notice the syntax of setting it to be string, arrow brackets (no longer colon)
  const [todo, setTodo] = useState<string>("");

  // Appending Model type to todoArr. Initializing it to be an empty array
  const [todoArr, setTodoArr] = useState<Model[]>([]);

  // this is to declare that handleAdd will take in an event parameter (found the type online)
  function handleAdd(e: React.FormEvent<EventTarget>) {
    console.log(" -- inside HandleAdd inside App.tsx --");
    // to prevent page from refreshing upon submit
    e.preventDefault();

    if(!todo) {
      alert('Description cannot be empty')
      return
    }

    // Add into the todoArr
    // console.log(todo)
    setTodoArr([...todoArr, { index: Date.now(), todo: todo, status: false }]);

    console.log(todoArr);
    // initialise todo back to empty
    setTodo("");
  }

  function updateStatus(index: number) {
    // update status to complete
    console.log("-- updateStatus inside App.tsx --");

    const updatedData = todoArr.map((obj) => {
      console.log(obj);

      if (obj.index == index) {
        // If this is the targeted object
        if (obj.status == true) {
          // If task is already completed, make it uncompleted
          // Append it with the corrected data
          return { ...obj, status: false };
        } else {
          // If the task is not completed, make it completed
          return { ...obj, status: true };
        }
      }
      // If this isn't the targeted object, append it int the updated data as it is
      else {
        return { ...obj };
      }
    });

    setTodoArr(updatedData);
  }

  function deleteHandle(index: number) {
    console.log(" -- inside deleteHandle --");

    let newArr = todoArr.filter((todo) => todo.index !== index);

    // Initialize the new array
    setTodoArr(newArr);
  }

  function EditHandle(index:number, newTodo:string){
    console.log(' -- inside EditHandle --')
    const newArr = todoArr.map( (obj) => {

      if (obj.index === index) {
        // Update new Todo descriptio
        return { ...obj, todo: newTodo }

      }
      else{
        // Do nothing
        return { ...obj }
      }
    })

    setTodoArr(newArr)
    
  }

  return (
    <div className="App">
      <span className="heading">
        Taskify
        <InputFields
          todo={todo}
          setTodo={setTodo}
          handleAdd={handleAdd}
        ></InputFields>
      </span>

      {/* <h1>this is children: {todo}</h1> */}

      <div>
        {todoArr.map((ele) => {
          return (
            <div id={ele.index.toString()}>
              {/* Props-ing all the information to Single Task component */}
              <SingleTask
                index={ele.index}
                todo={ele.todo}
                status={ele.status}
                updateStatus={updateStatus}
                deleteHandle = {deleteHandle}
                editHandle = {EditHandle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

// function App() {
//   return (
//     <div>
// 		Hello Felix
//     </div>
//   );
// }

export default App;
