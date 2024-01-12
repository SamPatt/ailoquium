import { useState } from 'react'
import React from 'react';
import AITester from './components/AITester'
import ScoreTester from './components/scoreTester';

function App() {
    return (
        <div className="App">
            <h1>AI Message Tester</h1>
            <AITester />
            <ScoreTester />
        </div>
    );
}

export default App;
