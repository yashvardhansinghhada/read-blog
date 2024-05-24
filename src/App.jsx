import Header from "./components/Header";
import Blog from "./components/Blog";
import Pagination from "./components/Pagination";
import { useEffect, useContext } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";
export default function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="my-[100px]">
      <Header />
      <Blog />
      <Pagination />
    </div>
  )
}