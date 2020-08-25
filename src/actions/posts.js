import { db } from "../firebase/firebase";

export const setPosts = (posts) => {
  return {
    type: "SET_POSTS",
    posts,
  };
};

export const startSetPosts = () => {
  return (dispatch) => {
    db.collection("posts").onSnapshot((snapshot) => {
      const posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });
      console.log(posts);
      dispatch(setPosts(posts));
    });
  };
};

/////////////// FOR DEVELOPMENT  ///////////////////

// const post1 = {
//   id: "id1234",
//   user: "BlankBanshee",
//   createdAt: "1000",
//   caption: "this is a caption",
//   link:
//     "https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8",
// };

// const post2 = {
//   id: "id5678",
//   user: "BlankBanshee01",
//   createdAt: "2000",
//   caption: "this is a caption of post 2",
//   link:
//     "https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8",
// };

// export const setPosts = (posts) => {
//   return {
//     type: "SET_POSTS",
//     posts,
//   };
// };

// export const startSetPosts = () => {
//   return (dispatch) => {
//     dispatch(setPosts([post1, post2]));
//   };
// };
