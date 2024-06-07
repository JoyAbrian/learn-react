import React from 'react';
import Button from './components/Elements/Button';

function App() {
  return (
    <div className='flex justify-center bg-blue-600 min-h-screen items-center'>
      <div className='flex gap-x-3'>
        <Button variant="red-500">Login</Button>
        <Button variant="slate-500">Logout</Button>
        <Button>Register</Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App
