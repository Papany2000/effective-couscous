import React, {useState } from "react";
import PostList from "./Component/PostList";
import './Component/styles/App.css';
import PostForm from "./Component/Ui/PostForm";
import MySelect from "./Component/Ui/select/MySelect";



function App() {
  const [posts, setPosts] = useState(
    [{id:1, title: 'аа', body: 'бб'},
     {id:2, title: 'гг', body: 'аа'},
     {id:3, title: 'вв', body: 'юю'},
    ]);
    const [selectedSort, setSelectedSort] = useState('')

      const createPost = (newPost) =>{
       setPosts([...posts, newPost]) 
      }
      const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
      }
      const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
      }
   
  return (
    <div className = "App">
    <PostForm  create = {createPost}/> 
    <div>
    <hr style = {{margin: '15px'}}/>
    <MySelect 
    value = {selectedSort}
    onChange = {sortPosts}
    defaultValue = "Сортировка" 
    options ={[
      {value: 'title', name: 'По названию'},
      {value: 'body', name: 'По описанию'}
    ]} 
    />
    </div>
    {posts.length
      ? <PostList remove = {removePost} posts = {posts} title = 'Посты js' />
      : <h2 style = {{textAlign: 'center'}}>
        Посты не найдены!
        </h2>
    }
   
    
    </div>
  );
  }

export default App;
