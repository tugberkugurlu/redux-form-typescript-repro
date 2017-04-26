import * as React from 'react';
import { reduxForm, Field, FormErrors, FormProps } from 'redux-form';

interface FormData {
    name?: string;
    lastname?: string;
}

const validate = (values: Readonly<FormData>): FormErrors<FormData> => { 
    const errors: FormErrors<FormData> = {};
    return errors;
};

interface SelectionWithFormProps {
    readonly value: string;
    readonly onChange: (val: React.ChangeEvent<HTMLSelectElement> | React.FormEvent<HTMLSelectElement> | string) => void;
}

class SelectionWithForm extends React.Component<FormProps<FormData, {}, {}> & SelectionWithFormProps, {}> {
    render(): JSX.Element {
        return <div>
            <div>
                <Field name="name" component="input" />
                <Field name="lastname" component="input" />
            </div>
        </div>;
    }
}

export default reduxForm<Readonly<FormData>, SelectionWithFormProps, {}>({
    form: 'SelectionWithForm',
    validate: validate,
    onSubmit: (values, dispatch, props) => {
        props.onChange(values.name + ' ' + values.lastname);
    }
})(SelectionWithForm);
