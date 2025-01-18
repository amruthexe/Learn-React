//every time we have to return 



const Greet = () => {
  const date =new Date()
  return (
    <div>
      <h1>Greek</h1>
      <p>Current date :{date.getDate()} </p>
    </div>
  )
}

export default Greet