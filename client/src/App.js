import React,{useState, useEffect} from "react";
import './App.css';
import Axios from "axios";

function App() {
  const [moviename,setMovieName] = useState('');
  const [moviereview,setMoviereview] = useState('');
  const [moviereviewlist,setMovielist] = useState([]);
 
  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((Response)=>{
      console.log(Response.data);
      setMovielist(Response.data);
    });
},[]);



const submitReview=()=>{
Axios.post("http://localhost:3001/api/insert",{
  movie_name:moviename,
  movie_review:moviereview}).then(()=>{
    alert("success review!");
  });
};

 
  return (
    <div className="App">
     <h1>hello</h1>
     <div className="form">
       <label>Movie Name</label>
     <input type="text" name="moviename" onChange={((e)=>{
       setMovieName(e.target.value);
     })}/>
    
     <label>review</label>
     <input type="text" name="review" onChange={((e)=>{
       setMoviereview(e.target.value);
     })}/>
     <button onClick={submitReview}>submit</button>
     </div>
     
     {moviereviewlist.map((val)=>{
       return (<h1>moviename:{val.movie_name} | movie review {val.movie_review}</h1>)
     })}
     
    </div>
  );
}

export default App;

  // "scripts": {
  //   "client":"../client",
  //   "server": "node index.js",
  //   "dev": "nodemon index.js",
  //   "test": "echo \"Error: no test specified\" && exit 1",
  //   "start": "concurrently \"npm run server\" \"npm run client\""
  // },
