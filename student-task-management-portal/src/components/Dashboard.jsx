import StatCard from "./StatCard";
import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import AddTask from "./AddTask";

const defaultTasks = [
    {
        id: 1,
        title: "Learn React",
        description: "Understand the basics of React and its core concepts.",
        status: "In progress"
    },
    {
        id: 2,
        title: "Build a simple app",
        description: "Create a basic React application with multiple components.",
        status: "Completed"
    },
    {
        id: 3,
        title: "Deploy the app",
        description: "Deploy the React application to a hosting service.",
        status: "Pending"
    }
];

function Dashboard() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("student-tasks");

        if (!savedTasks) {
            return defaultTasks;
        }

        try {
            return JSON.parse(savedTasks);
        } catch (error) {
            console.error("Failed to load saved tasks", error);
            return defaultTasks;
        }
    });

    useEffect(() => {
        localStorage.setItem("student-tasks", JSON.stringify(tasks));
    }, [tasks]);

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.status === "Completed").length;
    const pendingTasks = tasks.filter((task) => task.status !== "Completed").length;

    function toggleTask(id) {
        setTasks((currentTasks) =>
            currentTasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        status: task.status === "Completed" ? "Pending" : "Completed"
                    };
                }

                return task;
            })
        );
    }

    function addTask(newTask) {
        setTasks((currentTasks) => [newTask, ...currentTasks]);
    }

    function handleDelete(id) {
        setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
    }

    return (
        <main className="dashboard-shell">
            <div className="stat-container">
                <StatCard title="Total tasks" value={totalTasks} />
                <StatCard title="Completed tasks" value={completedTasks} />
                <StatCard title="Pending tasks" value={pendingTasks} />
            </div>

            <AddTask onAddTask={addTask} />

            <div className="tasks-header">
                <h2>Recent Tasks</h2>
                <span className="task-count">{tasks.length} tasks</span>
            </div>

            <div className="task-list">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        title={task.title}
                        description={task.description}
                        status={task.status}
                        onToggle={() => toggleTask(task.id)}
                        onDelete={() => handleDelete(task.id)}
                    />
                ))}
            </div>
        </main>
    );
}

export default Dashboard;