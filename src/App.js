import React, {useState } from "react";
import PostList from "./Component/PostList";
import './Component/styles/App.css';
import PostForm from "./Component/Ui/PostForm";



function App() {
  const [posts, setPosts] = useState(
    [{id:1, title: 'Javascript', body: ' Javascript - язык программирования.'},
     {id:2, title: 'Javascript 1', body: ' Javascript - язык программирования.'},
     {id:3, title: 'Javascript 2', body: ' Javascript - язык программирования.'},
    ]);
      const createPost = (newPost) =>{
       setPosts([...posts, newPost]) 
      }
   
  return (
    <div className = "App">
    <PostForm create = {createPost}/> 
    <PostList posts = {posts} title = 'Посты js' />
    
    </div>
  );
  }

export default App;
