import './selected_movie_style.css'

function SelectedMovie({movieName, imageScr}){
    return(
        <>
        <div className="selected-movie">
            <h1>{movieName!==""?movieName:"Select a category"}</h1>
        </div> 
        {
        imageScr!=null?
        <div className='movie-cover-container'>
            <img className='movie-cover' src={imageScr} alt="cover image"/>
        </div>
        : 
        <div></div>
        }
       
        </>
        
    );
}

export default SelectedMovie