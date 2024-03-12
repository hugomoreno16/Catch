import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext()

export function UserProvider({children}){
    const [user, setUser] = useState({});

    const getUser = async () =>{
        const userId = sessionStorage.getItem("userId");
        if (userId) {
            try{
                const response = await axios.get("http://localhost:8080/api/admin/" + userId);
                setUser(response.data);
            }catch(e){
                console.log(e);
            }
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    return(
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}