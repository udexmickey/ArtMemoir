import React from 'react';
import { useForm } from "react-hook-form";
import './test.scss'
function Test( props ) {
    // get functions to build form with useForm() hook
    const { handleSubmit, formState } = useForm();
    const { isSubmitting } = formState;

    function onSubmit(data, e) {
        e.preventDefault();
        // return promise that resolves after 2 seconds
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    }

    return (
        <div className="test">
            {/* <h5 className="card-header">React Hook Form - Submitting Spinner Example</h5> */}
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <button disabled={isSubmitting} className="btn btn-primary mr-1" type='submit'>
                        {isSubmitting && <span style={{marginRight: '.5rem'}}><i class="fa fa-refresh fa-spin"></i></span>}
                        {props.name}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Test ;