import React, { useState } from "react";
import { useAction } from "../hooks/useAction";

const RepositoriesList: React.FC = () =>{
    const [term,setTerm] = useState('');
    const {searchRepositories} = useAction();

    const onsubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        searchRepositories(term);
    };
    

return <div>
    <form action="" onSubmit={onsubmit}>
        <input type="text" value={term} onChange={e => setTerm(e.target.value)}/>
        <button>Search</button>
    </form>
</div>
}

export default RepositoriesList;