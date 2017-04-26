import * as React from 'react';
import { reduxForm, Field, FormErrors, FormProps } from 'redux-form';

interface FormData {
    name?: string;
    lastname?: string;
}

const validate = (values: Readonly<FormData>): FormErrors<FormData> => { 
    const errors: FormErrors<FormData> = {};
    
    if(values.name === undefined) {
        errors.name = 'name needed';
    }

    if(values.lastname === undefined) {
        errors.lastname = 'name needed';
    }

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
                <Field placeholder="First name" name="name" component="input" />
                <Field placeholder="Last name" name="lastname" component="input" />
                <div>
                    <button className="button button--primary" type="button" onClick={this.props.handleSubmit}>
                        Provide full name
                    </button>
                </div>
            </div>
        </div>;
    }
}

export default reduxForm<Readonly<FormData>, SelectionWithFormProps, {}>({
    form: 'SelectionWithForm',
    validate: validate,
    onSubmit: (values, dispatch, props) => {
        console.log('submit is being handled...');
        props.onChange(values.name + ' ' + values.lastname);
    }
})(SelectionWithForm);
