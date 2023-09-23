import React, { useContext } from "react";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import useDebounce from "../../hooks/useDebounce";
import { fetchUsers } from "../../helpers/userservices/Fetchuser";
import { AuthStateContext, useAuthContext } from "../../contexts/AuthContextProvider";


export default function Search() {
    const userinfo = useAuthContext();
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search);
    console.log(userinfo)

    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);

            const users = await fetchUsers(debouncedSearch);
            userinfo.setUserData(users)



            setLoading(false);
        };
        loadUsers();
    }, [debouncedSearch]);
    return (
        <div className="tutorial">
            <SearchBar onChange={setSearch} />
            {loading && <div>Loading...</div>}
            {!loading &&
                userinfo.users.map((user) => {
                    return <div key={user.id} > {user.name}</div>

                })}
        </div >
    );
}


