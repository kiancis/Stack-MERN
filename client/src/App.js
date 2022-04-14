import { PostForm, HomePage, NotFoundPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./Context/postContext";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="bg-green-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
      <PostProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<PostForm />} />
          <Route path="/posts/:id" element={<PostForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PostProvider>
      <Toaster/>
      </div>
    </div>
  );
}
