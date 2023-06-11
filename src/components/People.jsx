import React from 'react'

function People(props) {
  console.log(props,"propsss")
  
  return (
    <div className='flex'>
      {
        props?.people?.map((each) => {
          console.log(each,"sbdsbbbd")
          return (

            <>
            <div className='card '>
            <center>
            <img className='image' src={each.image} alt="" />
            <h2 className='name'>{each.name}</h2>
            <p className='description'>{each.description}</p>
            <button className='know'>Know More</button>
            


            </center>
            </div>

            </>
          )
  
        })
      }

    </div>

  )

}

export default People