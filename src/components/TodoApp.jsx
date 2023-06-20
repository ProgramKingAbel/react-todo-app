import React from 'react';
import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
import Navbar from '@/components/Navbar';
import Modal from './Modal';
import Form from './Form';

const TodoApp = () => {
    return (
        
            <div className="wrapper">
                <div className="todos">
                {/* <Navbar /> */}
            {/* <Modal /> */}
            <Header />
            <TodosLogic />
            {/* <Form /> */}
                </div>
            </div>

            
        
    );
};

export default TodoApp;