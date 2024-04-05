import React from "react";

import {useGetUsersQuery} from "../store/api-slice/users-slice";

function Cuadro1() {
  const {data: users, error, isLoading} = useGetUsersQuery();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error ocurred: {error.message}</div>;
  }

  return (
    <div>
      {users.map((post) => (
        <>
          <h4>{post.name}</h4>
          <p>{post.email}</p>
          <p>{post.phone}</p>
        </>
      ))}
    </div>
  );
}

export default Cuadro1;
