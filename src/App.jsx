
const Valid=()=> <h1>Valid password</h1>
const Invalid=()=> <h1>Invalid password</h1>

function App() {
  return (
    <>
    <Password isValid={false}/>
    
    </>
   
  );
}

export default App;

const Password=({isValid})=>{
  return isValid ?<Valid/>:<Invalid/>

}