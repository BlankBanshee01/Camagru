import { db } from "../firebase/firebase";

export const setPosts = (posts) => {
  return {
    type: "SET_POSTS",
    posts,
  };
};

// export const startSetPosts = () => {
//   return (dispatch) => {
//     db.collection("posts").onSnapshot(function (querySnapshot) {
//       console.log(
//         "Current cities in CA: ",
//         querySnapshot.forEach((doc) => console.log(doc.data()))
//       );
//       var cities = [];
//       querySnapshot.forEach(function (doc) {
//         cities.push(doc.data().caption);
//       });
//     });
//   };
// };

export const startSetPosts = () => {
  return (dispatch) => {
    db.collection("posts").onSnapshot((snapshot) => {
      const posts = [];
      snapshot.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });
      dispatch(setPosts(posts));
    });
  };
};

export const AddPost = (post) => ({
  type: "ADD_POST",
  post,
});

export const startAddPost = (post) => {
  return (dispatch) => {
    db.collection("posts").add(post);
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
