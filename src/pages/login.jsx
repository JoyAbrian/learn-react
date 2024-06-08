import AuthLayout from '../components/Layouts/AuthLayouts';
import FormLogin from '../components/Fragments/FormLogin';

const LoginPage = () => {
    return (
        <AuthLayout title="Login" type="login">
            <FormLogin/>
        </AuthLayout>
    );
};

export default LoginPage;