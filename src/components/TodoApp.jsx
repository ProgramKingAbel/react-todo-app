import React from 'react';
import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
import Navbar from '@/components/Navbar';
import Modal from './Modal';

const TodoApp = () => {
    return (
        <>
            <Navbar />
            <Modal />
            <Header />
            <TodosLogic />
        </>
    );
};

export default TodoApp;