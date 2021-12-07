import React from "react";
import Bat from './Ui/button/Bat' 

const PostItem  = (props) => {
 
    return (
         <div className="post" >
            <div className="post__content">
              <strong>{props.number} {props.post.title}</strong>
              <div>
               {props.post.body}
              </div>
            </div>
            <div className="post__btns">
              <Bat onClick = {() => props.remove(props.post)}> 
              Удалить пост
              </Bat>
            </div>
          </div>
      );
    }

export default PostItem