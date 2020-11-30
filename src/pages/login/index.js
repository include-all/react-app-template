import './style.less'
import React, { useState } from 'react';

import actions from '../../store/action/test';

import { useSelector, useDispatch } from 'react-redux'


import { Button } from 'antd'

const Test = () => {
  const [name, setName] = useState('demo of react');
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
      <p>{count}</p>
      <Button onClick={() => dispatch(actions.increase(2))}>增加</Button>
    </div >
  )
}


export default Test