import {configureStore} from "@reduxjs/toolkit";
import {postsService} from "./api-slice/posts-slice";
import {usersService} from "./api-slice/users-slice";

const store = configureStore({
  reducer: {
    // Add the API service reducer to your store
    [postsService.reducerPath]: postsService.reducer,
    [usersService.reducerPath]: usersService.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsService.middleware, usersService.middleware)
});

export default store;
