import React, {useState } from "react";
import PostList from "./Component/PostList";
import './Component/styles/App.css';
import Bat from './Component/Ui/button/Bat'
import MyInput from "./Component/Ui/button/input/MyInput";


function App() {
  const [posts, setPosts] = useState(
    [{id:1, title: 'Javascript', body: ' Javascript - язык программирования.'},
     {id:2, title: 'Javascript 1', body: ' Javascript - язык программирования.'},
     {id:3, title: 'Javascript 2', body: ' Javascript - язык программирования.'},
    ]);
    const [post, setPost] = useState({title: '', body: ''})
  

    const addNewPost = (e) => {
      e.preventDefault()
      setPosts([...posts, {...post, id: Date.now() }])
      setPost({title: '', body: ''})
      
     
     
    }
   
  
  return (
    <div className = "App">
      <form>
        
        <MyInput value = {post.title} onChange = {e =>setPost({...post, title: e.target.value})} type = 'text' placeholder = "Название поста"/>
        <MyInput value = {post.body} onChange = {e =>setPost({...post, body: e.target.value})} type = 'text' placeholder = "Описание поста"/>
      
        <Bat onClick = {addNewPost}>Добавить пост</Bat>
      </form>
    <PostList posts = {posts} title = 'Посты js' />
    
    </div>
  );
}

export default App;
