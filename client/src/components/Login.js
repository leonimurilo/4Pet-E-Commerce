import React, {Component} from "react";
import {connect} from "react-redux";
import {login} from "../actions/index";
import {Field, reduxForm} from "redux-form";

class Login extends Component{

    // values contains all the input values of the form
    onSubmit(values){

        // pass values (post to be created) and a callback
        this.props.login(values, () => {

            // using helpers that are available in this component because it is wrapped (rendered) by the Route component
            // This callback will take the user to the home page
            this.props.history.push("/");
        });
    }

    renderField(field){
        //gets field.meta, field.meta.touched and field.meta.error
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                {/* tells Field that this is the input it is responsible for*/}
                {/* the 3 dots indicate that every single property of the field.input must communicate
                 as props to the input
                 */}
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {/*the error data comes from when we validate the form, the Field recalls this function to re-render and
                     then we cant render also an error message*/}
                    {/*Uses the state of the field called touch to check if the user already
                     focused the input and then unfocused it. Used to only show the error after the user
                     gets out of the field (as if the user had ended with the field)*/}
                    {touched ? error : "ok"}
                </div>
            </div>
        );
    }

    render(){

        // function that is added in the component props by reduxForm()
        // same as const handleSubmit = this.props.handleSubmit;
        const {handleSubmit} = this.props;
        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Username"
                        name="username"
                        component={this.renderField}
                    />
                    <Field
                        label="Password"
                        name="password"
                        component={this.renderField}
                    />
                    <button type="submit" className="">Login</button>
                </form>
            </div>
        );
    }

}

// function that will be called automatically at certain points during the form's lifecycle.
// most notable whenever the user tries to submit the form
// the argument values contains all different values the the user entered into the form
function validate(values){
    const errors = {};
    // validate the inputs (values)
    // the error.property must be the name of the Field
    if(!values.username || values.username.length < 4){
        errors.username = "Enter an username that is at least 6 characters long!"
    }

    if(!values.password || values.password.length < 6){
        errors.password = "Enter a password that is at least 6 characters long!"
    }

    // if the returned object is empty, redux-form assumes that everything is ok with the form values
    // else, it doesn't submit the form
    return errors;
}

export default reduxForm({
    validate,
    form: "LoginForm" // unique name
})(
    connect(null, {login})(Login)
);