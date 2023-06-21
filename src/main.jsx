import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import TodoApp from '@/components/TodoApp';
import '@/styles/app.css';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
    <React.StrictMode>
        <HashRouter>
        <TodoApp />
        </HashRouter>
    </React.StrictMode>
    
)