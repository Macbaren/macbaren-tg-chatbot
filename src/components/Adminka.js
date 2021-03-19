import React from 'react';
import { Text, Dialog, DialogStep, useText, useBotContext } from '@urban-bot/core';

export function Adminka() {
    const { chat } = useBotContext();

    function FlatDialog() {
        const userName = useText(({ from }) => from.username);
        return (
            <Dialog onFinish={(answers) => console.log(answers)}>
                <DialogStep content={<Text>Type something</Text>} onNext={(data) => console.log(data)}></DialogStep>
                <DialogStep content={<Text>{userName}</Text>}></DialogStep>
            </Dialog>
        );
    }

    return (
        <>
            <Text>Chat id {chat.id}</Text>
            <FlatDialog />
        </>
    );
}
