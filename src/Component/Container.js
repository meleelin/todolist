import React, { useState } from 'react'
import '../style/container.css'
import Input from './Input'
import List from './List'
import Swal from 'sweetalert2'

function Container() {
  const [word, setWord] = useState('')
  const [list, setList] = useState([])
  const CountNum = () => {
    let num = []
    let arr = list.length
    num.push(arr)
    return num
  }

  return (
    <>
      <div className="wrapper">
        <div className="box">
          <Input word={word} list={list} setWord={setWord} setList={setList} />
          <List list={list} setList={setList} />
          <div className="clear-container  d-flex justify-content-between align-items-center">
            <div>你有 {CountNum()} 個代辦事項</div>
            <div
              className="d-flex align-items-center clear-all"
              onClick={(e) => {
                if (list.length === 0) {
                  Swal.fire({
                    icon: 'warning',
                    title: '請新增代辦事項',
                    showConfirmButton: false,
                    timer: 1500,
                  })
                } else {
                  setList([])
                  Swal.fire({
                    icon: 'success',
                    title: '已清除!',
                    showConfirmButton: false,
                    timer: 1500,
                  })
                }
              }}
            >
              <h5>Clear All</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Container
