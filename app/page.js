import Image from "next/image";
import PostListView from "./components/PostListView";

export default function Home() {
  return (
    <main className="text-center text-indigo-600">
      <PostListView/>
    </main>
  );
}
