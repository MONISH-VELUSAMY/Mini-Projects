
import './App.css';
import {useState,useEffect} from 'react';
function App() {
  let [movieinfo,setmovieinfo]=useState(null);
  let[title,setTitle]=useState("Thor");
  useEffect(()=>{
    getmovieinfo(); 
 },[])
 
  function readTitle(value){
    setTitle(value);
   
  }
  function getmovieinfo(){
     let url=`https://omdbapi.com/?t=${title}&apikey=97e3855d`;
     fetch(url)
     .then((response)=>response.json())
     .then((movie)=>{
       setmovieinfo(movie);
     })
     .catch((err)=>{console.log(err);})
  }
  return (
    <div className="App">
      <div className="container">
         <div className="padd">
             <h1><span>Movie</span> Search</h1>
             <div className="input-group">
               <input type="text" className="input-search" onChange={(event) =>{readTitle(event.target.value);}} />
               <button className="btn" onClick={getmovieinfo}>Search</button>
             </div>

         </div>
         {
           movieinfo?.Error===undefined?(

              <div className="movie">
                   <div className="poster">
                     <img src={movieinfo?.Poster} alt="poster" className="img-poster" />
                   </div>
                   <div className="details">
                         <div className="padd">

                               <h1 className="title"><span>{movieinfo?.Title}</span></h1>
                                <p><span>Genre</span>:{movieinfo?.Genre}</p>
                                <p><span>Director</span>:{movieinfo?.Director}</p>
                                <p><span>Plot</span>:{movieinfo?.Plot}</p>
                                <p><span>Cast</span>:{movieinfo?.Actors}</p>
                                <p><span>Collection</span>:{movieinfo?.BoxOffice}</p>
                                <p><span>Language</span>:{movieinfo?.Language}</p>
                                <p><span>Released</span>:{movieinfo?.Released}</p>
                                <p><span>Runtime</span>:{movieinfo?.Runtime}</p>





                                <div className="Ratings">
                                  {
                                    movieinfo?.Ratings.map((rating,index)=>(
                                      <div key={index}>
                                        <span>{rating.Source}</span>
                                        <h3>{rating.Value}</h3>
                                      </div>

          
                                    ))
                                  }
                                </div>
                         </div>





                   </div>






              </div>







           ):
           (<h1>Moive Not Found</h1>)

         }


      </div>
      
    </div>
  );
}

export default App;
