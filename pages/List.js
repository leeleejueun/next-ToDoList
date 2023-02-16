import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const List = () => {
  const [data,setData] = useState([]);
  const router = useRouter();
  console.log(router)
  function dataget(){
    axios.get('/api/hello')
      .then(res => {
        setData(res.data);
      })
  }

  function dataDelete(id){
    axios.delete('/api/hello',{data:id});
    dataget();
  }

  useEffect(dataget,[]);
  
  if(!data.length) return (
    <article>
      <h2>TO DO LIST</h2>
      <Link href="/Write">글쓰기</Link>
    </article>
  );

  return (
    <>
      <article>
        <h2>TO DO LIST</h2>
        <p>할일 {data.length}개 남음</p>
        <ul>
          {
            data.map(obj => {
              return (
                <li key={obj.id}>
                  {obj.list}
                  <button onClick={()=>router.push({pathname:'/Update',query:obj})}>수정</button>
                  <button onClick={()=>dataDelete(obj.id)}>삭제</button>
                </li>
              )
            })
          }
        </ul>
      </article>
      <Link href="/Write">글쓰기</Link>
    </>
  )
}

export default List