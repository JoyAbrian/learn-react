const AuthLayouts = (props) => {
    const { title, children } = props;
    return (
        <div className='w-full max-w-xs'>
            <h1 className='text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
            <p className='font-medium text-slate-500 mb-8'>Welcome, please enter your details</p>
            {children}
        </div>
    );
};

export default AuthLayouts;