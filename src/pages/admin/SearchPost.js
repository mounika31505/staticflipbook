import React, { useContext } from "react";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import useDebounce from "../../hooks/useDebounce";
import { fetchpost } from "../../helpers/userservices/Fetchpost";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import '../../components/Table.css';


export default function SearchPost() {
    const postinfo = useAuthContext();
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const debouncedSearchPost = useDebounce(search);
    console.log(postinfo)


    useEffect(() => {
        const loadUser = async () => {
            setLoading(true);


            const title = await fetchpost(debouncedSearchPost);
            postinfo.setPostinfo(title);

            setLoading(false);

        };
        loadUser();
    }, [])

    useEffect(() => {
       postinfo.filterpost(debouncedSearchPost);

    },[debouncedSearchPost])

    return (
        <div className="learning">
            {/* <h3>post Data</h3>
            <input 
            type="text"

            
            placeholder="search..."
            onChange={(e) => setSearch(e.target.value)}/> */}
            <SearchBar onChange={setSearch} />
            {loading && <div>Loading...</div>}
            {!loading &&
                postinfo?.post?.map((postitem) => {
                    return <div key={postitem.id} > {postitem.id} <br /> {postitem.title}</div>

                })}
            {/* <table align='center'>
                <tr>
                    <th>ID</th>
                    <th>USERID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                </tr>
                {postinfo.post.map((postitem) => {
                    return (
                        <tr key={postitem}>
                            <td>{postitem.id}</td>
                            <td>{postitem.userId}</td>
                            <td>{postitem.title}</td>
                            <td>{postitem.body}</td>

                        </tr>
                    )
                })}
            </table> */}
        </div>
    );
}

