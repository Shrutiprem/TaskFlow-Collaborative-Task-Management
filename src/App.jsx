// // 
// import { useState } from "react";
// import "./App.css";

// const initialTasks = [
//   {
//     id: 1,
//     title: "Design Login Page",
//     description: "Create a responsive login page for users.",
//     status: "todo",
//     priority: "High",
//     assignee: "Shruti",
//     dueDate: "Nov 08, 2026"
//   },
//   {
//     id: 2,
//     title: "Create Database Schema",
//     description: "Prepare organization and tenant database tables.",
//     status: "todo",
//     priority: "Medium",
//     assignee: "Arun",
//     dueDate: "Nov 10, 2026"
//   },
//   {
//     id: 3,
//     title: "Develop REST APIs",
//     description: "Implement task management CRUD APIs.",
//     status: "progress",
//     priority: "High",
//     assignee: "Priya",
//     dueDate: "Nov 12, 2026"
//   },
//   {
//     id: 4,
//     title: "Build Dashboard",
//     description: "Develop the main dashboard interface.",
//     status: "progress",
//     priority: "Low",
//     assignee: "Shruti",
//     dueDate: "Nov 14, 2026"
//   },
//   {
//     id: 5,
//     title: "Project Documentation",
//     description: "Prepare project setup and API documentation.",
//     status: "done",
//     priority: "Medium",
//     assignee: "Arun",
//     dueDate: "Nov 05, 2026"
//   }
// ];

// const columns = [
//   { id: "todo", title: "To Do", color: "#64748b" },
//   { id: "progress", title: "In Progress", color: "#3b82f6" },
//   { id: "done", title: "Done", color: "#16a34a" }
// ];

// function TaskCard({ task, onEdit, onDelete }) {
//   return (
//     <article className="task-card">

//       <div className="task-card-top">

//         <span className={`priority ${task.priority.toLowerCase()}`}>
//           {task.priority}
//         </span>

//         <div className="task-actions">

//           <button
//             className="edit-task-button"
//             onClick={() => onEdit(task)}
//             title="Edit Task"
//           >
//             ✎
//           </button>

//           <button
//             className="delete-task-button"
//             onClick={() => onDelete(task.id)}
//             title="Delete Task"
//           >
//             🗑
//           </button>

//         </div>

//       </div>

//       <h3>{task.title}</h3>

//       <p className="task-description">
//         {task.description}
//       </p>

//       <div className="task-footer">

//         <div className="assignee-avatar">
//           {task.assignee.substring(0, 2).toUpperCase()}
//         </div>

//         <span className="assignee-name">
//           {task.assignee}
//         </span>

//         <span className="due-date">
//           {task.dueDate}
//         </span>

//       </div>

//     </article>
//   );
// }

// function App() {

//   // Store tasks in React state
//   const [tasks, setTasks] = useState(initialTasks);

//   // Modal visibility
//   const [showModal, setShowModal] = useState(false);
//   const [editingTaskId, setEditingTaskId] = useState(null);

//   // Search functionality
//   const [searchTerm, setSearchTerm] = useState("");

//   // New task form data
//   const [newTask, setNewTask] = useState({
//     title: "",
//     description: "",
//     assignee: "",
//     priority: "Medium",
//     dueDate: "",
//     status: "todo"
//   });

//   // Open modal with existing task details
// function handleEdit(task) {

//   setEditingTaskId(task.id);

//   setNewTask({
//     title: task.title,
//     description: task.description,
//     assignee: task.assignee,
//     priority: task.priority,
//     dueDate: new Date(task.dueDate)
//       .toISOString()
//       .slice(0, 10),
//     status: task.status
//   });

//   setShowModal(true);
// }

//   // Open modal
//   function openModal(status = "todo") {
//     setEditingTaskId(null);
//     setNewTask({
//       title: "",
//       description: "",
//       assignee: "",
//       priority: "Medium",
//       dueDate: "",
//       status: status
//     });

//     setShowModal(true);
//   }

//   // Close modal
//   function closeModal() {
//     setShowModal(false);
//     setEditingTaskId(null);
//   }
//   function handleDelete(taskId) {

//   const confirmDelete = window.confirm(
//     "Are you sure you want to delete this task?"
//   );

//   if (confirmDelete) {

//     setTasks(previousTasks =>
//       previousTasks.filter(
//         task => task.id !== taskId
//       )
//     );

//   }
// }

//   // Update form values
//   function handleChange(event) {
//     const { name, value } = event.target;

//     setNewTask({
//       ...newTask,
//       [name]: value
//     });
//   }

//   // Save new task
//   function handleSubmit(event) {

//   event.preventDefault();

//   const formattedDate = new Date(
//     `${newTask.dueDate}T00:00:00`
//   ).toLocaleDateString("en-US", {
//     month: "short",
//     day: "2-digit",
//     year: "numeric"
//   });

//   const task = {
//     id: editingTaskId || Date.now(),
//     title: newTask.title.trim(),
//     description: newTask.description.trim(),
//     assignee: newTask.assignee,
//     priority: newTask.priority,
//     dueDate: formattedDate,
//     status: newTask.status
//   };

//   if (editingTaskId) {

//     // Update existing task
//     setTasks(previousTasks =>
//       previousTasks.map(existingTask =>
//         existingTask.id === editingTaskId
//           ? task
//           : existingTask
//       )
//     );

//   } else {

//     // Add new task
//     setTasks(previousTasks => [
//       ...previousTasks,
//       task
//     ]);

//   }

//   setEditingTaskId(null);
//   setShowModal(false);
// }

//   // Dynamic task statistics
//   const totalTasks = tasks.length;

//   const todoTasks = tasks.filter(
//     task => task.status === "todo"
//   ).length;

//   const progressTasks = tasks.filter(
//     task => task.status === "progress"
//   ).length;

//   const completedTasks = tasks.filter(
//     task => task.status === "done"
//   ).length;

//   return (
//     <div className="app-container">

//       {/* Sidebar */}
//       <aside className="sidebar">

//         <div className="brand">
//           <div className="brand-logo">T</div>
//           <h2>TaskFlow</h2>
//         </div>

//         <p className="menu-heading">WORKSPACE</p>

//         <nav className="navigation">
//           <div className="nav-item active">
//             <span>▦</span> Task Board
//           </div>

//           <div className="nav-item">
//             <span>◷</span> My Tasks
//           </div>

//           <div className="nav-item">
//             <span>◉</span> Activity
//           </div>
//         </nav>

//         <div className="sidebar-bottom">
//           <p className="menu-heading">ACCOUNT</p>

//           <div className="user-profile">
//             <div className="user-avatar">SS</div>

//             <div>
//               <h4>Shruti Sree</h4>
//               <p>Organization Admin</p>
//             </div>
//           </div>
//         </div>

//       </aside>

//       {/* Main Content */}
//       <main className="main-content">

//         {/* Header */}
//         <header className="top-header">

//           <div className="breadcrumb">
//             Workspace / <strong>Task Board</strong>
//           </div>

//           <div className="header-right">
//             <span className="status-dot"></span>
//             <span>Online</span>
//             <div className="user-avatar">SS</div>
//           </div>

//         </header>

//         {/* Dashboard */}
//         <section className="dashboard">

//           {/* Organization and Tenant */}
//           <div className="workspace-selectors">

//             <div className="selector-group">
//               <label>ORGANIZATION</label>

//               <select>
//                 <option>Codeio Technologies</option>
//                 <option>ABC Solutions</option>
//               </select>
//             </div>

//             <div className="selector-group">
//               <label>TENANT / BRANCH</label>

//               <select>
//                 <option>Chennai Branch</option>
//                 <option>Coimbatore Branch</option>
//                 <option>Bangalore Branch</option>
//               </select>
//             </div>

//           </div>

//           {/* Page Title */}
//           <div className="page-title">

//             <div>
//               <p className="eyebrow">PROJECT WORKSPACE</p>
//               <h1>Development Board</h1>

//               <p className="page-description">
//                 Manage your team's tasks and track project progress.
//               </p>
//             </div>

//             <button
//               className="primary-button"
//               onClick={() => openModal()}
//             >
//               + Add Task
//             </button>

//           </div>

//           {/* Dynamic Statistics */}
//           <div className="statistics">

//             <div className="stat-card">
//               <p>Total Tasks</p>
//               <h2>{totalTasks}</h2>
//             </div>

//             <div className="stat-card">
//               <p>To Do</p>
//               <h2>{todoTasks}</h2>
//             </div>

//             <div className="stat-card">
//               <p>In Progress</p>
//               <h2>{progressTasks}</h2>
//             </div>

//             <div className="stat-card">
//               <p>Completed</p>
//               <h2>{completedTasks}</h2>
//             </div>

//           </div>

//           {/* Board Heading */}
//           <div className="board-heading">

//             <div>
//               <h2>Tasks</h2>
//               <p>Manage your development activities</p>
//             </div>

//             <input
//               type="text"
//               placeholder="Search tasks..."
//               className="search-input"
//               value={searchTerm}
//               onChange={(event) =>
//                 setSearchTerm(event.target.value)
//               }
//             />

//           </div>

//           {/* Kanban Board */}
//           <div className="kanban-board">

//             {columns.map((column) => {

//               const filteredTasks = tasks.filter(
//                 task =>
//                   task.status === column.id &&
//                   (
//                     task.title.toLowerCase().includes(
//                       searchTerm.toLowerCase()
//                     ) ||
//                     task.assignee.toLowerCase().includes(
//                       searchTerm.toLowerCase()
//                     )
//                   )
//               );

//               return (

//                 <section
//                   className="kanban-column"
//                   key={column.id}
//                 >

//                   <div className="column-heading">

//                     <div className="column-title">

//                       <span
//                         className="column-indicator"
//                         style={{
//                           backgroundColor: column.color
//                         }}
//                       ></span>

//                       <strong>{column.title}</strong>

//                     </div>

//                     <span className="task-count">
//                       {tasks.filter(
//                         task => task.status === column.id
//                       ).length}
//                     </span>

//                   </div>

//                   <div className="task-list">

//                     {filteredTasks.map(task => (
//                       <TaskCard
//                       key={task.id}
//                       task={task}
//                       onEdit={handleEdit}
//                       onDelete={handleDelete}
//                       />
//                       ))}

//                     {filteredTasks.length === 0 && (
//                       <p className="empty-message">
//                         No tasks found
//                       </p>
//                     )}

//                   </div>

//                   <button
//                     className="add-column-task"
//                     onClick={() => openModal(column.id)}
//                   >
//                     + Add a task
//                   </button>

//                 </section>

//               );

//             })}

//           </div>

//         </section>

//       </main>

//       {/* Add Task Modal */}
//       {showModal && (

//         <div className="modal-overlay">

//           <div className="task-modal">

//             <div className="modal-header">

//               <div>
//                 <h2>{editingTaskId ? "Edit Task" : "Create New Task"}</h2>
//                 <p>Add a task to your development board.</p>
//               </div>

//               <button
//                 type="button"
//                 className="close-button"
//                 onClick={closeModal}
//               >
//                 ×
//               </button>

//             </div>

//             <form onSubmit={handleSubmit}>

//               <div className="form-group">

//                 <label>Task Title *</label>

//                 <input
//                   type="text"
//                   name="title"
//                   placeholder="Enter task title"
//                   value={newTask.title}
//                   onChange={handleChange}
//                   required
//                 />

//               </div>

//               <div className="form-group">

//                 <label>Description</label>

//                 <textarea
//                   name="description"
//                   placeholder="Enter task description"
//                   value={newTask.description}
//                   onChange={handleChange}
//                   rows="3"
//                 />

//               </div>

//               <div className="form-row">

//                 <div className="form-group">

//                   <label>Assignee *</label>

//                   <select
//                     name="assignee"
//                     value={newTask.assignee}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select Assignee</option>
//                     <option value="Shruti">Shruti</option>
//                     <option value="Arun">Arun</option>
//                     <option value="Priya">Priya</option>
//                   </select>

//                 </div>

//                 <div className="form-group">

//                   <label>Priority</label>

//                   <select
//                     name="priority"
//                     value={newTask.priority}
//                     onChange={handleChange}
//                   >
//                     <option value="Low">Low</option>
//                     <option value="Medium">Medium</option>
//                     <option value="High">High</option>
//                   </select>

//                 </div>

//               </div>

//               <div className="form-row">

//                 <div className="form-group">

//                   <label>Due Date *</label>

//                   <input
//                     type="date"
//                     name="dueDate"
//                     value={newTask.dueDate}
//                     onChange={handleChange}
//                     required
//                   />

//                 </div>

//                 <div className="form-group">

//                   <label>Status</label>

//                   <select
//                     name="status"
//                     value={newTask.status}
//                     onChange={handleChange}
//                   >
//                     <option value="todo">To Do</option>
//                     <option value="progress">In Progress</option>
//                     <option value="done">Done</option>
//                   </select>

//                 </div>

//               </div>

//               <div className="modal-actions">

//                 <button
//                   type="button"
//                   className="cancel-button"
//                   onClick={closeModal}
//                 >
//                   Cancel
//                 </button>

//                 {/* <button
//                   type="submit"
//                   className="primary-button"
//                 >
//                   Save Task
//                 </button> */}
//                 <button
//                 type="submit"
//                 className="primary-button">
//                   {editingTaskId ? "Update Task" : "Save Task"}</button>

//               </div>

//             </form>

//           </div>

//         </div>

//       )}

//     </div>
//   );
// }

// export default App;
import { useEffect, useState } from "react";
import "./App.css";

const CURRENT_USER = "Shruti";

const initialTasks = [
  {
    id: 1,
    title: "Design Login Page",
    description: "Create a responsive login page for users.",
    status: "todo",
    priority: "High",
    assignee: "Shruti",
    dueDate: "2026-11-08",
    comments: []
  },
  {
    id: 2,
    title: "Create Database Schema",
    description: "Prepare organization and tenant database tables.",
    status: "todo",
    priority: "Medium",
    assignee: "Arun",
    dueDate: "2026-11-10",
    comments: []
  },
  {
    id: 3,
    title: "Develop REST APIs",
    description: "Implement task management CRUD APIs.",
    status: "progress",
    priority: "High",
    assignee: "Priya",
    dueDate: "2026-11-12",
    comments: []
  },
  {
    id: 4,
    title: "Build Dashboard",
    description: "Develop the main dashboard interface.",
    status: "progress",
    priority: "Low",
    assignee: "Shruti",
    dueDate: "2026-11-14",
    comments: []
  },
  {
    id: 5,
    title: "Project Documentation",
    description: "Prepare project setup and API documentation.",
    status: "done",
    priority: "Medium",
    assignee: "Arun",
    dueDate: "2026-11-05",
    comments: []
  }
];

const columns = [
  { id: "todo", title: "To Do", color: "#64748b" },
  { id: "progress", title: "In Progress", color: "#3b82f6" },
  { id: "done", title: "Done", color: "#16a34a" }
];

const emptyTask = {
  title: "",
  description: "",
  assignee: "",
  priority: "Medium",
  dueDate: "",
  status: "todo"
};

function readStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function formatDate(dateString) {
  if (!dateString) return "No due date";

  return new Date(`${dateString}T00:00:00`).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric"
    }
  );
}

function TaskCard({ task, onEdit, onDelete, onView }) {
  return (
    <article
      className="task-card"
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("taskId", String(task.id));
        event.dataTransfer.effectAllowed = "move";
      }}
    >
      <div className="task-card-top">
        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>

        <div className="task-actions">
          <button
            className="icon-button"
            onClick={() => onEdit(task)}
            title="Edit task"
          >
            ✎
          </button>

          <button
            className="icon-button delete-icon"
            onClick={() => onDelete(task.id)}
            title="Delete task"
          >
            🗑
          </button>
        </div>
      </div>

      <button
        className="task-title-button"
        onClick={() => onView(task)}
      >
        {task.title}
      </button>

      <p className="task-description">
        {task.description || "No description provided."}
      </p>

      <div className="task-footer">
        <div className="assignee-avatar">
          {task.assignee.substring(0, 2).toUpperCase()}
        </div>

        <span className="assignee-name">{task.assignee}</span>

        <span className="due-date">{formatDate(task.dueDate)}</span>
      </div>

      {task.comments?.length > 0 && (
        <div className="comment-count">
          <span>▤</span> {task.comments.length} comments
        </div>
      )}
    </article>
  );
}

function App() {
  // Main application data
  const [tasks, setTasks] = useState(() =>
    readStorage("taskflow_tasks", initialTasks)
  );

  const [activities, setActivities] = useState(() =>
    readStorage("taskflow_activities", [])
  );

  const [notifications, setNotifications] = useState(() =>
    readStorage("taskflow_notifications", [])
  );

  const [profile, setProfile] = useState(() =>
    readStorage("taskflow_profile", {
      name: "Shruti Sree",
      role: "Organization Admin",
      email: "shruti@example.com"
    })
  );

  // Navigation and search
  const [activePage, setActivePage] = useState("board");
  const [searchTerm, setSearchTerm] = useState("");

  // Task modal
  const [showModal, setShowModal] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newTask, setNewTask] = useState(emptyTask);

  // Task details and comments
  const [selectedTask, setSelectedTask] = useState(null);
  const [commentText, setCommentText] = useState("");

  // Notification panel
  const [showNotifications, setShowNotifications] = useState(false);

  // Organization selectors
  const [organization, setOrganization] = useState("Codeio Technologies");
  const [branch, setBranch] = useState("Chennai Branch");

  // Save application data in localStorage
  useEffect(() => {
    localStorage.setItem("taskflow_tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem(
      "taskflow_activities",
      JSON.stringify(activities)
    );
  }, [activities]);

  useEffect(() => {
    localStorage.setItem(
      "taskflow_notifications",
      JSON.stringify(notifications)
    );
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem("taskflow_profile", JSON.stringify(profile));
  }, [profile]);

  // Record activity
  function addActivity(message) {
    const activity = {
      id: Date.now(),
      message,
      date: new Date().toLocaleString()
    };

    setActivities((previous) => [activity, ...previous]);
  }

  // Create notification
  function addNotification(message) {
    const notification = {
      id: Date.now() + Math.random(),
      message,
      date: new Date().toLocaleString(),
      read: false
    };

    setNotifications((previous) => [
      notification,
      ...previous
    ]);
  }

  // Open Add Task modal
  function openModal(status = "todo") {
    setEditingTaskId(null);

    setNewTask({
      ...emptyTask,
      status
    });

    setShowModal(true);
  }

  // Close modal
  function closeModal() {
    setShowModal(false);
    setEditingTaskId(null);
    setNewTask(emptyTask);
  }

  // Update form fields
  function handleChange(event) {
    const { name, value } = event.target;

    setNewTask((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  // Edit task
  function handleEdit(task) {
    setEditingTaskId(task.id);

    setNewTask({
      title: task.title,
      description: task.description,
      assignee: task.assignee,
      priority: task.priority,
      dueDate: task.dueDate,
      status: task.status
    });

    setShowModal(true);
  }

  // Add or update task
  function handleSubmit(event) {
    event.preventDefault();

    const taskData = {
      ...newTask,
      title: newTask.title.trim(),
      description: newTask.description.trim()
    };

    if (editingTaskId) {
      const oldTask = tasks.find(
        (task) => task.id === editingTaskId
      );

      setTasks((previous) =>
        previous.map((task) =>
          task.id === editingTaskId
            ? { ...task, ...taskData }
            : task
        )
      );

      addActivity(`Updated task: ${taskData.title}`);

      if (oldTask && oldTask.assignee !== taskData.assignee) {
        addNotification(
          `${taskData.title} was assigned to ${taskData.assignee}.`
        );
      }
    } else {
      const task = {
        id: Date.now(),
        ...taskData,
        comments: []
      };

      setTasks((previous) => [...previous, task]);

      addActivity(`Created task: ${task.title}`);

      addNotification(
        `New task "${task.title}" was created.`
      );
    }

    closeModal();
  }

  // Delete task
  function handleDelete(taskId) {
    const task = tasks.find((item) => item.id === taskId);

    if (!task) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmed) {
      setTasks((previous) =>
        previous.filter((item) => item.id !== taskId)
      );

      addActivity(`Deleted task: ${task.title}`);
      addNotification(`Task "${task.title}" was deleted.`);
    }
  }

  // Drag and drop
  function handleDrop(event, newStatus) {
    event.preventDefault();

    const taskId = event.dataTransfer.getData("taskId");

    if (!taskId) return;

    const task = tasks.find(
      (item) => String(item.id) === taskId
    );

    if (!task || task.status === newStatus) return;

    const oldStatus = columns.find(
      (column) => column.id === task.status
    )?.title;

    const newStatusTitle = columns.find(
      (column) => column.id === newStatus
    )?.title;

    setTasks((previous) =>
      previous.map((item) =>
        String(item.id) === taskId
          ? { ...item, status: newStatus }
          : item
      )
    );

    addActivity(
      `Moved "${task.title}" from ${oldStatus} to ${newStatusTitle}`
    );

    addNotification(
      `"${task.title}" moved to ${newStatusTitle}.`
    );
  }

  // Open task details
  function handleViewTask(task) {
    setSelectedTask(task);
    setCommentText("");
  }

  // Add comment to a task
  function handleAddComment(event) {
    event.preventDefault();

    if (!commentText.trim() || !selectedTask) return;

    const comment = {
      id: Date.now(),
      author: profile.name,
      message: commentText.trim(),
      date: new Date().toLocaleString()
    };

    setTasks((previous) =>
      previous.map((task) =>
        task.id === selectedTask.id
          ? {
              ...task,
              comments: [...(task.comments || []), comment]
            }
          : task
      )
    );

    setSelectedTask((previous) => ({
      ...previous,
      comments: [...(previous.comments || []), comment]
    }));

    addActivity(
      `Added a comment to "${selectedTask.title}"`
    );

    setCommentText("");
  }

  // Mark notifications as read
  function markAllNotificationsRead() {
    setNotifications((previous) =>
      previous.map((item) => ({
        ...item,
        read: true
      }))
    );
  }

  // Mark one notification as read
  function markNotificationRead(notificationId) {
    setNotifications((previous) =>
      previous.map((item) =>
        item.id === notificationId
          ? { ...item, read: true }
          : item
      )
    );
  }

  // Statistics
  const totalTasks = tasks.length;

  const todoTasks = tasks.filter(
    (task) => task.status === "todo"
  ).length;

  const progressTasks = tasks.filter(
    (task) => task.status === "progress"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "done"
  ).length;

  const unreadCount = notifications.filter(
    (item) => !item.read
  ).length;

  // Search helper
  function matchesSearch(task) {
    const search = searchTerm.toLowerCase();

    return (
      task.title.toLowerCase().includes(search) ||
      task.assignee.toLowerCase().includes(search) ||
      task.description.toLowerCase().includes(search)
    );
  }

  // Page heading
  const pageTitles = {
    board: "Task Board",
    mytasks: "My Tasks",
    activity: "Activity",
    notifications: "Notifications",
    settings: "Profile & Settings"
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo">T</div>
          <h2>TaskFlow</h2>
        </div>

        <p className="menu-heading">WORKSPACE</p>

        <nav className="navigation">
          <button
            className={`nav-item ${
              activePage === "board" ? "active" : ""
            }`}
            onClick={() => setActivePage("board")}
          >
            <span>▦</span> Task Board
          </button>

          <button
            className={`nav-item ${
              activePage === "mytasks" ? "active" : ""
            }`}
            onClick={() => setActivePage("mytasks")}
          >
            <span>◷</span> My Tasks
          </button>

          <button
            className={`nav-item ${
              activePage === "activity" ? "active" : ""
            }`}
            onClick={() => setActivePage("activity")}
          >
            <span>◉</span> Activity
          </button>

          <button
            className={`nav-item ${
              activePage === "notifications" ? "active" : ""
            }`}
            onClick={() => setActivePage("notifications")}
          >
            <span>♢</span> Notifications
            {unreadCount > 0 && (
              <span className="nav-badge">{unreadCount}</span>
            )}
          </button>
        </nav>

        <div className="sidebar-bottom">
          <p className="menu-heading">ACCOUNT</p>

          <button
            className={`profile-link ${
              activePage === "settings" ? "profile-active" : ""
            }`}
            onClick={() => setActivePage("settings")}
          >
            <div className="user-avatar">
              {profile.name.substring(0, 2).toUpperCase()}
            </div>

            <div className="profile-info">
              <h4>{profile.name}</h4>
              <p>{profile.role}</p>
            </div>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <header className="top-header">
          <div className="breadcrumb">
            Workspace / <strong>{pageTitles[activePage]}</strong>
          </div>

          <div className="header-right">
            <span className="status-dot"></span>
            <span>Online</span>

            <button
              className="notification-button"
              onClick={() =>
                setShowNotifications((previous) => !previous)
              }
              title="Notifications"
            >
              ♢
              {unreadCount > 0 && (
                <span className="notification-dot">
                  {unreadCount}
                </span>
              )}
            </button>

            <div className="user-avatar">
              {profile.name.substring(0, 2).toUpperCase()}
            </div>
          </div>

          {showNotifications && (
            <div className="notification-dropdown">
              <div className="dropdown-heading">
                <strong>Notifications</strong>
                <button onClick={markAllNotificationsRead}>
                  Mark all read
                </button>
              </div>

              {notifications.length === 0 ? (
                <p className="empty-message">
                  No notifications yet.
                </p>
              ) : (
                notifications.slice(0, 5).map((item) => (
                  <button
                    className={`dropdown-notification ${
                      item.read ? "" : "unread"
                    }`}
                    key={item.id}
                    onClick={() => {
                      markNotificationRead(item.id);
                      setActivePage("notifications");
                      setShowNotifications(false);
                    }}
                  >
                    <span>{item.message}</span>
                    <small>{item.date}</small>
                  </button>
                ))
              )}

              <button
                className="view-all-button"
                onClick={() => {
                  setActivePage("notifications");
                  setShowNotifications(false);
                }}
              >
                View all notifications
              </button>
            </div>
          )}
        </header>

        <section className="dashboard">
          {/* Organization selectors */}
          <div className="workspace-selectors">
            <div className="selector-group">
              <label>ORGANIZATION</label>

              <select
                value={organization}
                onChange={(event) =>
                  setOrganization(event.target.value)
                }
              >
                <option>Codeio Technologies</option>
                <option>ABC Solutions</option>
              </select>
            </div>

            <div className="selector-group">
              <label>TENANT / BRANCH</label>

              <select
                value={branch}
                onChange={(event) =>
                  setBranch(event.target.value)
                }
              >
                <option>Chennai Branch</option>
                <option>Coimbatore Branch</option>
                <option>Bangalore Branch</option>
              </select>
            </div>
          </div>

          {/* Page title */}
          <div className="page-title">
            <div>
              <p className="eyebrow">PROJECT WORKSPACE</p>
              <h1>
                {activePage === "board"
                  ? "Development Board"
                  : pageTitles[activePage]}
              </h1>

              <p className="page-description">
                {activePage === "board" &&
                  "Manage your team's tasks and track project progress."}

                {activePage === "mytasks" &&
                  "View and manage tasks assigned to you."}

                {activePage === "activity" &&
                  "Track recent activities in your workspace."}

                {activePage === "notifications" &&
                  "Stay updated with your task notifications."}

                {activePage === "settings" &&
                  "Manage your profile information."}
              </p>
            </div>

            {(activePage === "board" ||
              activePage === "mytasks") && (
              <button
                className="primary-button"
                onClick={() => openModal()}
              >
                + Add Task
              </button>
            )}
          </div>

          {/* Statistics */}
          {(activePage === "board" ||
            activePage === "mytasks") && (
            <div className="statistics">
              <div className="stat-card">
                <p>Total Tasks</p>
                <h2>{totalTasks}</h2>
              </div>

              <div className="stat-card">
                <p>To Do</p>
                <h2>{todoTasks}</h2>
              </div>

              <div className="stat-card">
                <p>In Progress</p>
                <h2>{progressTasks}</h2>
              </div>

              <div className="stat-card">
                <p>Completed</p>
                <h2>{completedTasks}</h2>
              </div>
            </div>
          )}

          {/* PART 1–5: Task Board */}
          {activePage === "board" && (
            <>
              <div className="board-heading">
                <div>
                  <h2>Tasks</h2>
                  <p>Manage your development activities</p>
                </div>

                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="search-input"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                />
              </div>

              <div className="kanban-board">
                {columns.map((column) => {
                  const filteredTasks = tasks.filter(
                    (task) =>
                      task.status === column.id &&
                      matchesSearch(task)
                  );

                  return (
                    <section
                      className="kanban-column"
                      key={column.id}
                      onDragOver={(event) =>
                        event.preventDefault()
                      }
                      onDrop={(event) =>
                        handleDrop(event, column.id)
                      }
                    >
                      <div className="column-heading">
                        <div className="column-title">
                          <span
                            className="column-indicator"
                            style={{
                              backgroundColor: column.color
                            }}
                          ></span>

                          <strong>{column.title}</strong>
                        </div>

                        <span className="task-count">
                          {
                            tasks.filter(
                              (task) => task.status === column.id
                            ).length
                          }
                        </span>
                      </div>

                      <div className="task-list">
                        {filteredTasks.map((task) => (
                          <TaskCard
                            key={task.id}
                            task={task}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            onView={handleViewTask}
                          />
                        ))}

                        {filteredTasks.length === 0 && (
                          <p className="empty-message">
                            No tasks found
                          </p>
                        )}
                      </div>

                      <button
                        className="add-column-task"
                        onClick={() => openModal(column.id)}
                      >
                        + Add a task
                      </button>
                    </section>
                  );
                })}
              </div>
            </>
          )}

          {/* PART 6: My Tasks */}
          {activePage === "mytasks" && (
            <div className="content-panel">
              <div className="board-heading">
                <div>
                  <h2>Tasks assigned to me</h2>
                  <p>
                    Tasks assigned to {profile.name}
                  </p>
                </div>

                <input
                  type="text"
                  placeholder="Search my tasks..."
                  className="search-input"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                />
              </div>

              <div className="my-task-list">
                {tasks
                  .filter(
                    (task) =>
                      task.assignee === CURRENT_USER &&
                      matchesSearch(task)
                  )
                  .map((task) => (
                    <div className="my-task-row" key={task.id}>
                      <div className="my-task-main">
                        <button
                          className="task-title-button"
                          onClick={() => handleViewTask(task)}
                        >
                          {task.title}
                        </button>
                        <p>{task.description}</p>
                        <small>
                          Due: {formatDate(task.dueDate)}
                        </small>
                      </div>

                      <span
                        className={`status-label ${task.status}`}
                      >
                        {
                          columns.find(
                            (column) => column.id === task.status
                          )?.title
                        }
                      </span>

                      <span
                        className={`priority ${task.priority.toLowerCase()}`}
                      >
                        {task.priority}
                      </span>

                      <button
                        className="small-action-button"
                        onClick={() => handleEdit(task)}
                      >
                        Edit
                      </button>
                    </div>
                  ))}

                {tasks.filter(
                  (task) => task.assignee === CURRENT_USER
                ).length === 0 && (
                  <p className="empty-message">
                    No tasks are assigned to you.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* PART 7: Activity */}
          {activePage === "activity" && (
            <div className="content-panel">
              <div className="panel-heading">
                <div>
                  <h2>Recent Activity</h2>
                  <p>Latest updates from your workspace</p>
                </div>
              </div>

              {activities.length === 0 ? (
                <p className="empty-message">
                  No activity yet. Create or update a task to see
                  activity here.
                </p>
              ) : (
                <div className="activity-list">
                  {activities.map((activity) => (
                    <div
                      className="activity-item"
                      key={activity.id}
                    >
                      <div className="activity-icon">◉</div>

                      <div className="activity-content">
                        <p>{activity.message}</p>
                        <small>{activity.date}</small>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* PART 9: Notifications */}
          {activePage === "notifications" && (
            <div className="content-panel">
              <div className="panel-heading">
                <div>
                  <h2>All Notifications</h2>
                  <p>
                    {unreadCount} unread notification(s)
                  </p>
                </div>

                <button
                  className="secondary-button"
                  onClick={markAllNotificationsRead}
                >
                  Mark all as read
                </button>
              </div>

              {notifications.length === 0 ? (
                <p className="empty-message">
                  You don't have any notifications.
                </p>
              ) : (
                <div className="notification-list">
                  {notifications.map((item) => (
                    <div
                      className={`notification-item ${
                        item.read ? "read" : "unread"
                      }`}
                      key={item.id}
                    >
                      <div className="notification-symbol">♢</div>

                      <div className="notification-content">
                        <p>{item.message}</p>
                        <small>{item.date}</small>
                      </div>

                      {!item.read && (
                        <button
                          className="small-action-button"
                          onClick={() =>
                            markNotificationRead(item.id)
                          }
                        >
                          Mark read
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* PART 10: Profile and Settings */}
          {activePage === "settings" && (
            <div className="content-panel settings-panel">
              <div className="panel-heading">
                <div>
                  <h2>Profile Information</h2>
                  <p>Update your account details</p>
                </div>
              </div>

              <form
                className="settings-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  addActivity("Updated profile information.");
                  addNotification(
                    "Your profile information was updated."
                  );
                  alert("Profile updated successfully!");
                }}
              >
                <div className="settings-avatar">
                  {profile.name.substring(0, 2).toUpperCase()}
                </div>

                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    value={profile.name}
                    onChange={(event) =>
                      setProfile((previous) => ({
                        ...previous,
                        name: event.target.value
                      }))
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(event) =>
                      setProfile((previous) => ({
                        ...previous,
                        email: event.target.value
                      }))
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Role</label>
                  <input
                    value={profile.role}
                    onChange={(event) =>
                      setProfile((previous) => ({
                        ...previous,
                        role: event.target.value
                      }))
                    }
                    required
                  />
                </div>

                <button type="submit" className="primary-button">
                  Save Changes
                </button>
              </form>
            </div>
          )}
        </section>
      </main>

      {/* Add/Edit Task Modal */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="task-modal">
            <div className="modal-header">
              <div>
                <h2>
                  {editingTaskId ? "Edit Task" : "Create New Task"}
                </h2>
                <p>Add a task to your development board.</p>
              </div>

              <button
                type="button"
                className="close-button"
                onClick={closeModal}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Task Title *</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter task title"
                  value={newTask.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  placeholder="Enter task description"
                  value={newTask.description}
                  onChange={handleChange}
                  rows="3"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Assignee *</label>
                  <select
                    name="assignee"
                    value={newTask.assignee}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Assignee</option>
                    <option value="Shruti">Shruti</option>
                    <option value="Arun">Arun</option>
                    <option value="Priya">Priya</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Priority</label>
                  <select
                    name="priority"
                    value={newTask.priority}
                    onChange={handleChange}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Due Date *</label>
                  <input
                    type="date"
                    name="dueDate"
                    value={newTask.dueDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Status</label>
                  <select
                    name="status"
                    value={newTask.status}
                    onChange={handleChange}
                  >
                    <option value="todo">To Do</option>
                    <option value="progress">In Progress</option>
                    <option value="done">Done</option>
                  </select>
                </div>
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={closeModal}
                >
                  Cancel
                </button>

                <button type="submit" className="primary-button">
                  {editingTaskId ? "Update Task" : "Save Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PART 8: Task Details and Comments */}
      {selectedTask && (
        <div
          className="modal-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedTask(null);
            }
          }}
        >
          <div className="task-modal details-modal">
            <div className="modal-header">
              <div>
                <p className="eyebrow">TASK DETAILS</p>
                <h2>{selectedTask.title}</h2>
              </div>

              <button
                className="close-button"
                onClick={() => setSelectedTask(null)}
              >
                ×
              </button>
            </div>

            <p className="details-description">
              {selectedTask.description || "No description provided."}
            </p>

            <div className="details-grid">
              <div>
                <label>ASSIGNEE</label>
                <strong>{selectedTask.assignee}</strong>
              </div>

              <div>
                <label>PRIORITY</label>
                <strong>{selectedTask.priority}</strong>
              </div>

              <div>
                <label>STATUS</label>
                <strong>
                  {
                    columns.find(
                      (column) => column.id === selectedTask.status
                    )?.title
                  }
                </strong>
              </div>

              <div>
                <label>DUE DATE</label>
                <strong>{formatDate(selectedTask.dueDate)}</strong>
              </div>
            </div>

            <div className="comments-section">
              <h3>Comments</h3>

              {(selectedTask.comments || []).length === 0 ? (
                <p className="empty-message">
                  No comments yet.
                </p>
              ) : (
                selectedTask.comments.map((comment) => (
                  <div className="comment-item" key={comment.id}>
                    <div className="comment-avatar">
                      {comment.author.substring(0, 2).toUpperCase()}
                    </div>

                    <div>
                      <strong>{comment.author}</strong>
                      <p>{comment.message}</p>
                      <small>{comment.date}</small>
                    </div>
                  </div>
                ))
              )}

              <form
                className="comment-form"
                onSubmit={handleAddComment}
              >
                <textarea
                  rows="2"
                  placeholder="Write a comment..."
                  value={commentText}
                  onChange={(event) =>
                    setCommentText(event.target.value)
                  }
                />

                <button
                  type="submit"
                  className="primary-button"
                  disabled={!commentText.trim()}
                >
                  Add Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;