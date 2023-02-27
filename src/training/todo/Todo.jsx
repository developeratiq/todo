import React from 'react'
import { useState, useEffect } from 'react'
import './Todo.css';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { SiAddthis } from 'react-icons/si';
import  Task from './Comp/Task'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

// Reading Data from LocalStorage
const ReadData = () => {
  let Lists = localStorage.getItem('lists');

  if (Lists) {
    return JSON.parse(Lists);
  } else {
    return [];
  }
}



function Todo() {
  const [input, setinput] = useState('');
  const [newInput, setnewInput] = useState(ReadData());
  const [toggle, setToggle] = useState(true);
  const [isEdit, setisEdit] = useState(null);





  const AddItems = () => {

    if (!input) {
      toast.error("can't be empty")

    } else if (input && !toggle) {
      setnewInput(
        newInput.map((elem) => {
          if (elem.id === isEdit) {
            return { ...elem, items: input }
          }
           
          return elem;
        })
          

      );
      toast.success('Updated Successfully')
      setToggle(true);
      setinput('');
      setisEdit(null);
      
    }


    else {

      const AllInputs = { id: new Date().getTime().toString(), items: input }
      setnewInput([...newInput, AllInputs]);
      toast.success('Added Successfully')
      setinput('')
    }

  }

  // editting items
  const update = (editId) => {
    let editItem = newInput.find((elem) => {
      return elem.id === editId
    });

    setToggle(false);
    setinput(editItem.items);
    setisEdit(editId);

  }


  //deleting here
  const deleteItem = (itemId) => {
   
    let updatedArray = newInput.filter((FItems) => {
      // alert (Findex);
      return itemId !== FItems.id;

    });
    toast.warn("deleted Successfully!")
    setnewInput(updatedArray);



  }

  const DeleteAll = () => {
    toast.warn('All Deleted')
    setnewInput([]); 
  }


  // Add data to localStorage
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(newInput))

  }, [newInput])

  return (<>
          <ToastContainer 
           autoClose={1000}
          />
    <div className="container">

      <div className="form-group">
        <input type="text"
          className=' sm-5'
          name='work' placeholder=' Enter todo`s'
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        {
          toggle ? <button onClick={AddItems}>
            <SiAddthis className='icons'></SiAddthis></button> :
            <button onClick={AddItems}><AiFillEdit
              className='icons'></AiFillEdit></button>
        }


      </div>
    
       <button  className='DeleteAll'
       onClick={DeleteAll}>Delete All</button>
      <div className="task-container">
        
        {
          newInput.map((items ,index) => {

            return (
              <>     
                   <Task key={items.id} items ={items} del={deleteItem}  index={index} update={update}
                    />

              </>
            );
          })

        }

      </div>
    </div>
  </>
  )
}

export default Todo