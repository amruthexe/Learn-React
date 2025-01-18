function List (){

    const usersInfo = [
          {
            username: "HuXn",
            email: "test@gmail.com",
            location: "USA",
          },
          {
            username: "John",
            email: "jd@gmail.com",
            location: "Arab",
          },
          {
            username: "Alex",
            email: "alexmersion@gmail.com",
            location: "India",
          },
        ];
    return (
      <>
      {usersInfo.map((users)=>(
        <ul>
          <li>{users.username}</li>
          <li>{users.email}</li>
          <li>{users.location}</li>
  
        </ul>
      ))}
      
    
      </>
    )
  }
  
  export default List
  
  
  
  //all ways we have to return 