import React from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom'

const PostItem = (props) => {
    // const { slug, id } = match.params;
    // const [post, setPost] = useState({})
    // useEffect(() => {
    //   fetch(`https://sdfsdf.com/?slug=${slug}&page=1`,{"slug":slug})
    // }, [])
    console.log(useHistory)
    
  return (
    <div>PostItem
    {/* {slug}
    {id} */}
        {/* {post.title}
        {post.blug} */}
    </div>
  )
}

export default PostItem