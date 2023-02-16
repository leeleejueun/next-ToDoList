import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import HeadMeta from './HeadMeta';
import Layout from './Layout';

const Update = () => {
    const router = useRouter();
    const {query} = router;

    const initial = { id:query.id, list:query.list };
    const [inputValue, setValue] = useState(initial);

    function valueChange(e){
        let t=e.target;
        setValue((obj)=>{
            return { ...obj, [t.name] : t.value }
        })
    }

    function create(e){
        e.preventDefault();
        axios.put('/api/hello',{...inputValue, id:query.id});
        router.push('/');
    }
    return (
        <Layout>
            <HeadMeta title="update"/>
            <div>
            <form onSubmit={create}>
                <h2>To do List</h2>
                <p><input value={inputValue.list} onChange={valueChange} type="text" name='list' placeholder='할 일을 입력하세요.' /></p>
                <p><input type="submit" value="저장" /></p>
            </form>
            </div>
        </Layout>
    )
}

export default Update