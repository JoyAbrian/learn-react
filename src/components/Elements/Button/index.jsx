const Button = (props) => {
    const { children = '...', variant = 'black' } = props;
    return (
    <button className={`h-10 px-6 font-semibold rounded-md bg-${variant} text-white`} type="submit">
        {children}
    </button>
    );
}

export default Button;