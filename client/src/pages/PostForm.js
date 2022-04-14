import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  setNestedObjectValues,
} from "formik";
import * as Yup from "yup";
import { usePosts } from "../Context/postContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function PostForm() {
  const { createPost, getPost, updatePost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();

  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getPost(params.id);
        setPost(post);
      }
    })();
  }, [params.id]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-xl shadow-black rounded-2xl">
        <header className="flex justify-between items-center py-4 text-white">
          <h2 className="text-xl">New Post</h2>
          <Link to="/" className="text-gray-400 text-sm">
            Go Back
          </Link>
        </header>
        <Formik
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
          })}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updatePost(params.id, values);
            } else {
              await createPost(values);
            }
            actions.setSubmitting(false);
            navigate("/");
          }}
          enableReinitialize
        >
          {({ handleSubmit, setFieldValue, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <label
                htmlFor="title"
                className="text-sm block font-bold text-gray-400"
              >
                Title
              </label>
              <Field
                name="title"
                placeholder="Title"
                className=" px-3 py-2 focus:outline-none rounded bg-gray-500 text-white w-full mb-4"
              />
              <ErrorMessage
                component="p"
                className="text-red-400 text-sm"
                name="title"
              />
              <label
                htmlFor="description"
                className="text-sm block font-bold text-gray-400"
              >
                Description
              </label>
              <Field
                component="textarea"
                name="description"
                placeholder="Description"
                rows="3"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
              />
              <ErrorMessage
                component="p"
                className="text-red-400 text-sm"
                name="description"
              />

              <label
                htmlFor="description"
                className="text-sm block font-bold text-gray-400"
              >
                Description
              </label>
              <input
                type="file"
                name="image"
                className="px-3 py-2 rounded-sm focus:outline-none bg-gray-600 text-white w-full"
                onChange={(e) => setFieldValue("image", e.target.files[0])}
              ></input>

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500
              px-4 py-3 rounded mt-2 text-white focus:outline-none disable:bg-indigo-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                ) : (
                  "Submit"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
