'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Index } from './components/home/TodoIndex';
import { TodoModifyModal } from './components/home/TodoModifyModal';
import { useModalStore } from '@/store/useModalStore';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('todoAccessToken');
        if (!token) {
            router.push('/auth/signIn');
            return;
        }
    }, [router]);
    const { isOpenModal, updateTaskId } = useModalStore();
    const checkIsOpenModal: boolean = isOpenModal && updateTaskId && updateTaskId.title.length > 0;

    return (
        <>
            <div className="flex justify-center items-center h-screen ">
                {checkIsOpenModal && <TodoModifyModal />}
                <Index />
            </div>
        </>
    );
}
