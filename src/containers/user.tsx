"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { createContainer } from 'unstated-next';

export interface MemosUsersTable {
    id: string,
    name: string,
    email: string,
    deviceId: string,
}

const useUser = () => {

    const [usersmemo, setUsersmemo] = useState<MemosUsersTable[]>([])
    const getUsersmemo = async () => {
        const response = await axios.get('http://192.168.15.49:3003/users');
        setUsersmemo(response.data)
    }

    useEffect(() => {
        getUsersmemo()
    }, [])


    const deleteUser = async (id: string) => {
        const response = await axios.delete('http://192.168.15.49:3003/users/' + id);
        // setPostsmemo(response.data)
    }


    const updateUser = async (userSelected: any) => {
        const response = await axios.patch('http://192.168.15.49:3003/users/' + userSelected.id, {
            name: userSelected.name,
            email: userSelected.email,
            phone: userSelected.phone,
            owner: 3
        });
        setUsersmemo(response.data)
    }



    return { usersmemo, deleteUser, getUsersmemo, updateUser }
}

export const UserContainer = createContainer(useUser)
export default UserContainer