import { useEffect, useState } from "react";

import { Wrapper, } from "./styles";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import Card from "../Card";

export function Cards() {
    const [dishes, setDishes] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        async function fetchDishes() {
            const token = localStorage.getItem("@foodexplorer:token");
            if (token && user) {
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const { data } = await api.get("/dishes?user_id=" + user.id);
                setDishes(data);
            }
        }
        fetchDishes();
    }, [user]);

    return (
        <>

            <Wrapper>

                {dishes && dishes.map((dish, i) => (
                    <Card data={dish} key={i} isAdmin={user.admin} />
                ))}
            </Wrapper>

        </>
    );
}


