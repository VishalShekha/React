import React, { useEffect, useState } from "react";
import axios from "axios";

// function EffectData() {
//   const [posts, setPost] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         console.log(res);
//         setPost(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div>
//       <ul>
//         {posts.map((post) => (
//           <li key={posts.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function EffectFive() {
  const [posts, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idButton, setIdButton] = useState(1);

  const handleClick = () => {
    setIdButton(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idButton]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Post</button>
      <ul>
        <li>{posts.title}</li>
      </ul>
    </div>
  );
}

// export default EffectData;
export default EffectFive;
