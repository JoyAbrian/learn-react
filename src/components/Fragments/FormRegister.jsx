import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = (props) => {
    return (
        <form action=''>
            <InputForm label='Fullname' type='text' placeholder='John Doe' name='fullname'/>
            <InputForm label='Email' type='email' placeholder='example@email.com' name='email'/>
            <InputForm label='Password' type='password' placeholder='*******' name='password'/>
            <InputForm label='Confirm Password' type='password' placeholder='*******' name='confirmPassword'/>
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    );
};

export default FormRegister;