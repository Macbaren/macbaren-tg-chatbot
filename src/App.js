import { Text } from '@urban-bot/core';
import React from 'react';
import { Logo } from './Logo';
import { TodoList } from './TodoList';

export function App() {
    return (
        <>
            <Logo />
            <Text>
                <strong>Welcome to Macbaren todo list</strong>
            </Text>
            <Text>Type your new todo.</Text>
            <TodoList />
        </>
    );
}
