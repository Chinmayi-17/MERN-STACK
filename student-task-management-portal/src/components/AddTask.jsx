import { useState } from "react";

function AddTask(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const task={
            id:Date.now(),
            title:title,
            description:description,
            status:"Pending"
        };
        console.log("object",task);
    }

    return (
        <div>
            <label>Add Task</label>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <p>Current title: {title}</p>
                <br></br>

                <label>Add Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add Task</button>
                <p>Current description: {description}</p>
            </form>
        </div>
    );
}

export default AddTask;