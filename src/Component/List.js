import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function List(props) {
  const { list, setList } = props

  const deleteTodo = (index) => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
    console.log('123')
  }
  return (
    <>
      {list.map((value, index) => {
        return (
          <>
            <div
              key={index}
              className="my-2 d-flex list-container justify-content-between align-items-center px-3"
            >
              <div>{value}</div>
              <div
                className="trash-icon"
                onClick={(e) => {
                  deleteTodo(index)
                }}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default List
