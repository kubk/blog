import React from 'react';
import { getSharedData } from "../shared";

export const App = () => {
    return <h1>Client app {getSharedData()}</h1>
}

console.log('client')