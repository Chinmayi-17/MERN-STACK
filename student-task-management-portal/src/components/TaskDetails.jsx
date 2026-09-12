import {useParams} from 'react-router-dom';
function TaskDetails(){
    const {id} = useParams();
    return(
        <div>
            <h1>
                Task Details
            </h1>
            <p>This page will show the details of a selected task.</p>
        </div>
    )
}