import React from 'react';
import UserList from './UserList';
const MovieList = (props) => {
	const { movies, users, usersByMovie } = props;
  	const movieList = Object.keys(movies).map(key => {
		const userIDs = usersByMovie[movies[key].id];
		return (
			<div key={movies[key].id}>
				<h2>{movies[key].name}</h2>
                <p>Liked By:</p>
				<UserList userIDs={userIDs} users={users}/>      
			</div>
		);
	});
	return movieList;
};

export default MovieList;