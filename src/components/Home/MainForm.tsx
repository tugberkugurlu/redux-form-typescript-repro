import * as React from 'react';
import { reduxForm, Field, FormErrors, FormProps } from 'redux-form';
import SelectionWithForm from './SelectionWithForm';

interface FormData {
    fullName?: string;
}

const validate = (values: Readonly<FormData>): FormErrors<FormData> => { 
    const errors: FormErrors<FormData> = {};
    if(values.fullName === undefined) {
        errors.fullName = 'fullname is missing';
    }
    return errors;
};

interface MainFormProps {
}

class MainForm extends React.Component<FormProps<FormData, MainFormProps, {}>, {}> {
    render(): JSX.Element {
        return <div>
            <form onSubmit={this.props.handleSubmit}>
                <Field name="fullName" component={SelectionWithForm} />
                <div>
                    <button className="button button--primary" type="button">
                        Submit
                    </button>
                </div>
            </form>
        </div>;
    }
}

export default reduxForm({
    form: 'MainForm',
    validate: validate,
    onSubmit: (values, dispatch, props) => {
        console.log('===submit===');
        console.log(values.fullName);
    }
})(MainForm);
