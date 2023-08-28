import { useFormatInput } from "./useFormatInput";

export default function Form() {
    const firstNameProps = useFormatInput('');
    const lastNameProps = useFormatInput('');

    return (
        <>
            <label>
                First name:
                <input {...firstNameProps} 
                placeholder="Rijan"/>
            </label>
            <br/><br/>
            <label>
                Last name:
                <input {...lastNameProps}
                placeholder="Thapa" />
            </label>
            <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}</b></p>
        </>
    );
}