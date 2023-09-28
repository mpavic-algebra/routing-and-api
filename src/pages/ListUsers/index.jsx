import { useEffect, useState } from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'

const ListUsers = () => {

    const [users, setUsers] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://kv63mr-3000.csb.app/users")
        .then(res => setUsers(res.data))
    },[])

    const deleteUser = async (e, id) => {
        e.preventDefault()
        const res = await axios.delete(`https://kv63mr-3000.csb.app/users/${id}`)
        console.log(res.status === 204)
        if (res.status === 204) window.location.reload(false);
    }

    return (
        <>
        {
            users && users.map(user =>  {
                return (
                    <div key={user.id}>
                        {user.name} <button onClick={(e) => deleteUser(e, user.id)}>Delete</button>
                    </div>
                )
            })
        }
        </>
    )
}

export default ListUsers