import React from 'react'

const Props = ({name,age,img,bio,college}) => {
  return (
    <div>
        <img src={img} alt={name} width={200} />
        <h4>{name}</h4>
        <h4>{age}</h4>
        <h4>{bio}</h4>
        <h4>{college}</h4>

    </div>
  )
}

export default Props