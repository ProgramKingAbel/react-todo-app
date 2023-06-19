import React from 'react';
import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
import Navbar from '@/components/Navbar';
import Modal from './Modal';
import Form from './Form';

const TodoApp = () => {
    return (
        <>
            <Navbar />
            <Modal />
            <Header />
            <TodosLogic />
            <Form />
            
        </>
    );
};

export default TodoApp;