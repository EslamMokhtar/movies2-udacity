import React from 'react';

const FavoriteMovies=(props)=>{
  return(
    <ul>
    {props.profiles.map(profile=>
     <li>
     {`${props.users[profile.userID].name} favorite movie is ${props.movies[profile.favoriteMovieID].name}`}
     </li>
     )}
    </ul>
  );
}

export default FavoriteMovies;