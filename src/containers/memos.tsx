"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { createContainer } from 'unstated-next';

export interface MemosTable {
    id: any,
    name: string,
    code: string,
    edit: any,
    onClick: any
}

const useMemos = () => {

    const [memos, setMemos] = useState<MemosTable[]>([])

    const getMemos = async () => {
        const response = await axios.get('http://192.168.15.49:3003/memo');
        setMemos(response.data)
    }

    useEffect(() => {
        getMemos()
    }, [])

    const createMemo = async (memoUser: any) => {
        const response = await axios.post('http://192.168.15.49:3003/memo', {
            name: memoUser.nome,
            code: memoUser.code,
            owner: 3
        });
        setMemos(response.data)
    }

    const updateMemo = async (memoSelected: any) => {
        const response = await axios.patch('http://192.168.15.49:3003/memo/' + memoSelected.id, {
            name: memoSelected.name,
            code: memoSelected.code,
            owner: 3
        });
        setMemos(response.data)
    }

    const deleteMemo = async (id: string) => {
        const response = await axios.delete('http://192.168.15.49:3003/memo/' + id);
        // setPostsmemo(response.data)
    }

    return { memos, createMemo, updateMemo, deleteMemo, getMemos }
}

export const MemosContainer = createContainer(useMemos)
export default MemosContainer