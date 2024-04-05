import React from "react";

import {useGetPostsByIdQuery} from "../store/api-slice/posts-slice";

function Cuadro2({postId}) {
  const {data: post, error, isLoading} = useGetPostsByIdQuery(postId);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error ocurred: {error.message}</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Cuadro2;
