import React from "react";

import {useGetPostsQuery} from "../store/api-slice/posts-slice";

function Home() {
  const {data: posts, error, isLoading} = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error ocurred: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>

      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
