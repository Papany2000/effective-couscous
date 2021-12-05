import React from "react";
import PostItem from './Postitem'

const PostList  = ({posts, title}) => {
 
    return (
         <div className = "postList" >
                <h1 style = {{textAlign: "center"}}>{title}</h1>
     {posts.map((el, index) => <PostItem number = {index +1} post = {el} key = {el.id} />)} {/* где el - елемент posts {id:1...}*/}
          </div>
      );
    }

export default PostList