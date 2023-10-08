import React from 'react'
import { useContext } from 'react';
import Context, { TextContext } from './Context';
import { useState } from 'react';
import description from './images/description.svg'
import description1 from './images/description1.svg'
import edit from './images/edit.svg'
import remove from './images/remove.svg'



function Dashboard() {
  let { notes, setNotes } = useContext(TextContext);


  let handleDelete = (index) => {
    let newArray = [...notes];
    newArray.splice(index, 1)
    setNotes(newArray)
  }


  let [title, setTitle] = useState("")
  let [text, setText] = useState("")

  let handleSave = () => {
    let newArray = [...notes]
    newArray.unshift({
      text,
      title
    })
    setNotes(newArray)
  }


  let [editIndex, setEditIndex] = useState()
  let handleEdit = (i) => {
    setText(notes[i].text)
    setTitle(notes[i].title)
    setEditIndex(i)
  }

  let handleUpdate = () => {
    notes.splice(editIndex, 1, { title, text })
    setNotes([...notes])
  }



  return (
    <>
      <div className='container-fluid-notes d-flex'>
        <div className='sidebar'>
          <h1>Notes App</h1>
          <button className='sidebar__button'>Notes</button>
        </div>

        <div className='container-fluid mainbar'>
          <div className="card input-area__card">
            <div className="card-body input-area__card-body">
              <h5 className="card-title input-area__heading">Add a Note</h5>
              <textarea type='text' className='form-control' id='input-area__title' placeholder='Title' rows="1" autoFocus value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
              <br></br>
              <textarea type='text' className='form-control' id='input-area__text' placeholder='Take a note...' rows="4" autoFocus value={text} onChange={(e) => setText(e.target.value)}></textarea>
              <button className='btn-primary' onClick={() => handleSave()}> save</button>
              <button className='btn-primary' onClick={() => handleUpdate()}> update</button>
            </div>
          </div>

          <div className='notes-area'>
            <div className='notes-area__heading'>
              <h6><span className='description1-icon'><img src={description1}></img></span>My Notes</h6>
              <p>Recently viewed</p>
            </div>
            <div className='container-fluid d-flex card-collection row row-cols-1 row-cols-md-3 g-4'>
              {notes.map((value, i) => {
                return (
                  <div className='col'>
                    <div className="card" key={i}>
                      <div className="card-body notes-area__content">
                        <h5 className="card-title notes-area__title"> {value.title} &nbsp;
                          <span className='edit-icon'><img src={edit} onClick={(key = { i }) => handleEdit(i)}></img></span>
                          <span className='remove-icon'><img src={remove} onClick={() => handleDelete(i)}></img></span></h5>
                        <p className="card-text notes-area__text">{value.text}</p>
                        <p className='card-text notes-area__text-footer'>5 days ago</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard