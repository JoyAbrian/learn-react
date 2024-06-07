import React from 'react'

const Button = (props) => {
  const { children = '...', variant = 'black' } = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md bg-${variant} text-white`} type="submit">
      {children}
    </button>
  );
}

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
