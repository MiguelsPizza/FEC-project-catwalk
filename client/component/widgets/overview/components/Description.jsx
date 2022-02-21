import React, {useEffect, useState} from 'react'

const Description = ({product}) => {
  
  const [description, setDesc] = useState("")
  useEffect(() => {
    product ? setDesc(product.description) : setDesc("")
  })
  return(
    <div className="Description">{description}</div>
  )
}

export default Description;