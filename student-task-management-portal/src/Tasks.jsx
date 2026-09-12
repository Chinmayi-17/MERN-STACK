function Tasks() {
    const tasks = [
        { id: 1, title: "React Practice", status: "In progress" },
        { id: 2, title: "CSS Design", status: "Completed" },
        { id: 3, title: "Project Review", status: "Pending" }
    ];

    return (
        <div className="dashboard-shell">
            <div className="tasks-header">
                <h2>All Tasks</h2>
                <span className="task-count">{tasks.length} items</span>
            </div>

            <div className="task-list">
                {tasks.map((task) => (
                    <article key={task.id} className="task-card">
                        <div className="task-card-header">
                            <div>
                                <h3>{task.title}</h3>
                                <p>Task details and progress updates for this item.</p>
                            </div>
                            <span className={`status-badge ${task.status.toLowerCase().replace(/\s+/g, "-")}`}>
                                {task.status}
                            </span>
                        </div>
                        <div className="task-actions">
                            <button className="toggle-btn">View</button>
                            <button className="delete-btn">Remove</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Tasks;