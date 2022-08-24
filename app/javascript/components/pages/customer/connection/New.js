import React, { useContext } from 'react'
import { CurrentLineAccount } from '../../../App'

const New = () => {
  const currentLineAccount = useContext(CurrentLineAccount);
  console.log(currentLineAccount);
  return (
    <div>
      this is new.
    </div>
  )
}

export default New
