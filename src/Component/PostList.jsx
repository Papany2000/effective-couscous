import React from "react";
import PostItem from './Postitem'

const PostList  = ({posts, title, remove}) => {
 
    return (
         <div className = "postList" >
                <h1 style = {{textAlign: "center"}}>{title}</h1>
     {posts.map((el, index) => <PostItem remove = {remove} number = {index +1} post = {el} key = {el.id} />)} {/* где el - елемент posts {id:1...}*/}
          </div>
      );
    }

export default PostList