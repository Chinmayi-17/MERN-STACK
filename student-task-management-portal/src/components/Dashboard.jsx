import StatCard from "./StatCard";
import TaskCard from "./TaskCard";

function Dashboard(){
    const tasks = [{title: "Learn React", description: "Understand the basics of React and its core concepts.", status: "In progress"}, {title: "Build a simple app", description: "Create a basic React application with multiple components.", status: "Completed"}, {title: "Deploy the app", description: "Deploy the React application to a hosting service.", status: "Pending"m.}];
    return(
        <main>
            <div className="stat-container" >
                <StatCard title={"Total tasks"} value={10} />
                <StatCard title={"Completed tasks"} value={5} />
                <StatCard title={"Pending tasks"} value={8} />
            </div>

            <h2>Recent Tasks</h2>
            <div className="task-container">
                {tasks.map((task) => (
                    <TaskCard title={task.title} description={task.description} status={task.status} />
                ))};
            </div>
        </main>
    );
}
export default Dashboard;