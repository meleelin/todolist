import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

function Input(props) {
  const { list, word, setWord, setList } = props

  const handleAdd = () => {
    let trim_word = word.trim()
    if (trim_word === '') {
      Swal.fire({
        icon: 'warning',
        text: '不能輸入空值!',
        showConfirmButton: false,
        timer: 1000,
      })
      setWord('')
      return
    }
    setList([...list, trim_word])
    setWord('')
  }
  return (
    <>
      <div className="input">
        <h1 className="d-flex">Todo App</h1>
        <div className="d-flex mt-2">
          <input
            type="text"
            placeholder="添加任務"
            className="input-content"
            value={word}
            onChange={(e) => {
              setWord(e.target.value)
            }}
          />
          <div
            className="plus-container d-flex justify-content-center align-items-center"
            onClick={(e) => {
              handleAdd()
            }}
          >
            <FontAwesomeIcon icon={faPlus} className="plus-icon" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Input
