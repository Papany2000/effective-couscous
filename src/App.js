import React, {useState} from "react";
import PostList from "./Component/PostList";
import './Component/styles/App.css';
import MyInput from "./Component/Ui/button/input/MyInput";
import PostForm from "./Component/Ui/PostForm";
import MySelect from "./Component/Ui/select/MySelect";



function App() {
  const [posts, setPosts] = useState(
    [{id:1, title: 'аа', body: 'бб'},
     {id:2, title: 'гг', body: 'аа'},
     {id:3, title: 'вв', body: 'юю'},
    ]);

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    function getSortedPosts(){
      console.log('Отработала getSortedPosts')
      if(selectedSort){
       return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
      }
      return posts;
    }
    const sortedPosts = getSortedPosts()
      const createPost = (newPost) =>{
       setPosts([...posts, newPost]) 
      }
      const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
      }
      const sortPosts = (sort) => {
        setSelectedSort(sort)
        console.log(sort)
      }
   
  return (
    <div className = "App">
    <PostForm  create = {createPost}/> 
    <div>
    <hr style = {{margin: '15px'}}/>
    <MyInput
    placeholder = {'поиск по...'}
    value = {searchQuery}
    onChange = {e => setSearchQuery(e.target.value)}
    />
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
      ? <PostList remove = {removePost} posts = {sortedPosts} title = 'Посты js' />
      : <h2 style = {{textAlign: 'center'}}>
        Посты не найдены!
        </h2>
    }
   
    
    </div>
  );
  }

export default App;
