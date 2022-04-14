import { usePosts } from "../Context/postContext";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";

export function HomePage() {
  const { posts } = usePosts();

  if (posts.length === 0) {
    return <div>We don't have posts</div>;
  }

  return (
    <div className="text-white">
    <header className="flex justify-between py-4 ">
      <h1 className="text-2xl font-bold">Posts ({posts.length})</h1>
        <Link to="/new" className="bg-indigo-600 hover:bg-indigo-500
              px-3 py-2 rounded mt-2 text-white focus:outline-none disable:bg-indigo-400">Create New Post</Link>
    </header>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
