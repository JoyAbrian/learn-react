import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
    const { label, name, type, placeholder } = props;
    return (
        <div className='mb-6'>
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} name={name} placeholder={placeholder} ref={ref} />
        </div>
    );
});

export default InputForm;