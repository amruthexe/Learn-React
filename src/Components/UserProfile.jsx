import React, { useContext } from 'react'
import{ UserContext} from './UserContext'

const UserProfile = () => {
     
    const data=useContext(UserContext)

  return (
    <div>
        {data}
    </div>
  )
}

export default UserProfile