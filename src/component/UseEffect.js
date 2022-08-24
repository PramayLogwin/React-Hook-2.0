import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UseEffects() {


  const [count, setcount] = useState(0);
  const [item, setItem] = useState(0);
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [idFromBtnClick, setIdFromBtnClick] = useState(1);

  useEffect(() => {
    // console.log("UseEffect is call");
  })//call every render

  useEffect(() => {
    // console.log("UseEffect-2 is call");
  }, [])//only once call then component is rendered

  useEffect(() => {
    // console.log("UseEffect-3 is call");
  }, [count])//only call then dependencies update

  const getIdResult = () => {
    setIdFromBtnClick(id)
  }


  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then(apiId => {
        // console.log(apiId);
        setPost(apiId.data)
      }).catch(errId => {
        console.log(errId);
      })
  }, [idFromBtnClick])//single post fetching

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(api => {
  //       console.log(api);
  //       setPost(api.data)
  //     }).catch(err => {
  //       console.log(err);
  //     })
  // }, []) // data fetching

  return (
    <>
      <h1>Use Effect</h1>
      <button onClick={() => { setcount(count + 1) }} >Counter : {count}</button>
      <button onClick={() => { setItem(item + 1) }} >Add Item : {item}</button>

      <div><input type="number" value={id} onChange={e => (setId(e.target.value))}></input></div>
      <button onClick={getIdResult}>Search</button><br />
      {post.title}
      {/* <ul>
        {
          post.map(post => (<li key={post.id}>{post.title}</li>))
        }
      </ul> */}



    </>
  )
}

export default UseEffects;