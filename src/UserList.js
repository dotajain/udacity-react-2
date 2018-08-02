import React from 'react';

const UserList = (props) => {
	const { userIDs, users } = props;
	const userList = userIDs && userIDs.map(userId => (
		<li key={userId}>
			<p>{users[userId].name}</p>
		</li>
	));
	if(userIDs) {
      return (<ul>{userList}</ul>);
    } else {
      return (<p>None of the current users liked this movie</p>);
    }
};

export default UserList;