import axios from "axios";

export const getPostsRequests = async () => await axios.get("/posts");
export const createPostsRequests = async (post) =>{
  const form = new FormData();
  for(let key in post){
    form.append(key, post[key]);
  }
  return await axios.post("/posts", form,{
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
}
export const deletePostsRequests = async (_id) =>
  await axios.delete(`/posts/${_id}`);
export const getPostRequests = async (_id) => await axios.get(`/posts/${_id}`);
export const updatePostRequests = async (id, newFields) =>
  await axios.put(`/posts/${id}`, newFields);
