// import React, { useState, useContext } from 'react';
// import './Content.css';
// import { FaBell, FaUndo, FaCalendarAlt, FaCheck, FaTrash, FaTimes, FaPlus } from 'react-icons/fa';
// import { DarkModeContext } from '../Darkmode';

// const Content = () => {
//     const [tasks, setTasks] = useState([
//         { id: 1, text: 'Buy groceries', completed: false, steps: [] },
//         { id: 2, text: 'Finish project report', completed: false, steps: [] },
//         { id: 3, text: 'Call the bank', completed: false, steps: [] },
//         { id: 4, text: 'Schedule dentist appointment', completed: false, steps: [] },
//         { id: 5, text: 'Plan weekend trip', completed: false, steps: [] },
//     ]);

//     const [completedTasks, setCompletedTasks] = useState([
//         { id: 6, text: 'Read a book', completed: true, steps: [] },
//         { id: 7, text: 'Clean the house', completed: true, steps: [] },
//         { id: 8, text: 'Prepare presentation', completed: true, steps: [] },
//         { id: 9, text: 'Update blog', completed: true, steps: [] },
//     ]);

//     const [newTask, setNewTask] = useState('');
//     const [isSliderOpen, setIsSliderOpen] = useState(false);
//     const [sliderTask, setSliderTask] = useState(null);
//     const [newStep, setNewStep] = useState('');
//     const { isDarkMode } = useContext(DarkModeContext); // Use the context

//     const handleAddTask = () => {
//         if (newTask.trim()) {
//             const task = { id: Date.now(), text: newTask, completed: false, steps: [] };
//             setTasks([...tasks, task]);
//             setNewTask('');
//             setSliderTask(task);
//             setIsSliderOpen(true);
//         }
//     };

//     const handleToggleTask = (id) => {
//         const updatedTasks = tasks.filter(task => task.id !== id);
//         const taskToComplete = tasks.find(task => task.id === id);
//         if (taskToComplete) {
//             taskToComplete.completed = true;
//             setCompletedTasks([...completedTasks, taskToComplete]);
//         }
//         setTasks(updatedTasks);
//     };

//     const handleDeleteTask = (id) => {
//         const updatedTasks = tasks.filter(task => task.id !== id);
//         setTasks(updatedTasks);
//     };

//     const handleAddStep = () => {
//         if (newStep.trim() && sliderTask) {
//             const updatedTask = { ...sliderTask, steps: [...sliderTask.steps, newStep] };
//             setSliderTask(updatedTask);
//             setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
//             setNewStep('');
//         }
//     };

//     const handleSetDueDate = () => {
        
//         alert('Due date functionality to be implemented.');
//     };

//     return (
//         <div className={`content-container ${isDarkMode ? 'dark-mode' : ''}`}>
//             {/* Header */}
//             <div className="content-header">
//                 <h1>To-Do</h1>
//                 <div className="dropdown">
//                     <button className="dropdown-btn">▼</button>
//                 </div>
//             </div>

//             {/* Task Input Section */}
//             <div className="task-input-section">
//                 <div className="task-input-div">
//                     <input
//                         type="text"
//                         placeholder="Add a new task..."
//                         value={newTask}
//                         onChange={(e) => setNewTask(e.target.value)}
//                     />
//                     <div className="task-buttons">
//                         <button className="icon-btn">
//                             <FaBell />
//                         </button>
//                         <button className="icon-btn">
//                             <FaUndo />
//                         </button>
//                         <button className="icon-btn">
//                             <FaCalendarAlt />
//                         </button>
//                         <button className="add-task-btn" onClick={handleAddTask}>
//                             Add Task
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* To-Do List */}
//             <div className="task-list">
//                 <hr />
//                 {tasks.map((task) => (
//                     <div key={task.id} className="task-item">
//                         <input
//                             type="checkbox"
//                             checked={task.completed}
//                             onChange={() => handleToggleTask(task.id)}
//                         />
//                         <span>{task.text}</span>
//                     </div>
//                 ))}
//             </div>
//             <hr />
//             {/* Completed Tasks */}
//             <div className="completed-tasks">
//                 <h2>Completed</h2>
//                 {completedTasks.map((task) => (
//                     <div key={task.id} className="task-item completed">
//                         <FaCheck className="check-icon" />
//                         <span className="completed-text">{task.text}</span>
//                     </div>
//                 ))}
//             </div>

//             {/* Slider */}
//             {isSliderOpen && (
//                 <div className="slider">
//                     <div className="slider-content">
//                         <div className="slider-header">
//                             <h3>{sliderTask?.text}</h3>
//                             <button className="icon-btn" onClick={() => setIsSliderOpen(false)}>
//                                 <FaTimes />
//                             </button>
//                         </div>
//                         <div className="slider-table">
//                             {/* Column 1: Task Item */}
//                             <div className="table-column">
//                                 {sliderTask?.steps.map((step, index) => (
//                                     <div key={index} className="step-item">
//                                         <input type="checkbox" />
//                                         <span>{step}</span>
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* Column 2: Add Step */}
//                             <div className="table-column">
//                                 <div className="add-step">
//                                     <button className="icon-btn" onClick={handleAddStep}>
//                                         <FaPlus /> <span>Add Step</span>
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Column 3: Set Reminder */}
//                             <div className="table-column">
//                                 <button className="icon-btn">
//                                     <FaBell /> <span>Set Reminder</span>
//                                 </button>
//                             </div>

//                             {/* Column 4: Add Due Date */}
//                             <div className="table-column">
//                                 <button className="icon-btn" onClick={handleSetDueDate}>
//                                     <FaCalendarAlt /> <span>Add Due Date</span>
//                                 </button>
//                             </div>

//                             {/* Column 5: Repeat */}
//                             <div className="table-column">
//                                 <button className="icon-btn">
//                                     <FaUndo /> <span>Repeat</span>
//                                 </button>
//                             </div>

//                             {/* Column 6: Created Date and Delete */}
//                             <div className="table-column">
//                                 <span>Created {sliderTask?.dueDate?.toLocaleDateString() || 'today'}</span>
//                                 <button className="icon-btn" onClick={() => handleDeleteTask(sliderTask.id)}>
//                                     <FaTrash />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Content;


import React, { useState, useContext, useEffect } from 'react';
import './Content.css';
import { FaBell, FaUndo, FaCalendarAlt, FaCheck, FaTrash, FaTimes, FaPlus } from 'react-icons/fa';
import { DarkModeContext } from '../Darkmode'; // Import the DarkModeContext
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; // Import DatePicker from MUI
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Adapter for date-fns
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; // Localization provider
import axios from 'axios'; // For API calls

const Content = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Buy groceries', completed: false, steps: [], dueDate: null, isOutdoor: false },
        { id: 2, text: 'Finish project report', completed: false, steps: [], dueDate: null, isOutdoor: false },
        { id: 3, text: 'Call the bank', completed: false, steps: [], dueDate: null, isOutdoor: false },
        { id: 4, text: 'Schedule dentist appointment', completed: false, steps: [], dueDate: null, isOutdoor: false },
        { id: 5, text: 'Plan weekend trip', completed: false, steps: [], dueDate: null, isOutdoor: true }, // Example outdoor task
    ]);

    const [completedTasks, setCompletedTasks] = useState([
        { id: 6, text: 'Read a book', completed: true, steps: [], dueDate: null, isOutdoor: false },
        { id: 7, text: 'Clean the house', completed: true, steps: [], dueDate: null, isOutdoor: false },
        { id: 8, text: 'Prepare presentation', completed: true, steps: [], dueDate: null, isOutdoor: false },
        { id: 9, text: 'Update blog', completed: true, steps: [], dueDate: null, isOutdoor: false },
    ]);

    const [newTask, setNewTask] = useState('');
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const [sliderTask, setSliderTask] = useState(null);
    const [newStep, setNewStep] = useState('');
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const { isDarkMode } = useContext(DarkModeContext); // Use the context

    // Fetch weather data for outdoor tasks
    useEffect(() => {
        if (sliderTask?.isOutdoor) {
            const fetchWeather = async () => {
                try {
                    const response = await axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric`
                    );
                    setWeatherData(response.data);
                } catch (error) {
                    console.error('Error fetching weather data:', error);
                }
            };
            fetchWeather();
        }
    }, [sliderTask]);

    const handleAddTask = () => {
        if (newTask.trim()) {
            const task = {
                id: Date.now(),
                text: newTask,
                completed: false,
                steps: [],
                dueDate: null,
                isOutdoor: newTask.toLowerCase().includes('outdoor') || newTask.toLowerCase().includes('trip'), // Example logic for outdoor tasks
            };
            setTasks([...tasks, task]);
            setNewTask('');
            setSliderTask(task); // Open slider for the new task
            setIsSliderOpen(true);
        }
    };

    const handleToggleTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        const taskToComplete = tasks.find(task => task.id === id);
        if (taskToComplete) {
            taskToComplete.completed = true;
            setCompletedTasks([...completedTasks, taskToComplete]);
        }
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    const handleAddStep = () => {
        if (newStep.trim() && sliderTask) {
            const updatedTask = { ...sliderTask, steps: [...sliderTask.steps, newStep] };
            setSliderTask(updatedTask);
            setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
            setNewStep('');
        }
    };

    const handleSetDueDate = (date) => {
        if (sliderTask) {
            const updatedTask = { ...sliderTask, dueDate: date };
            setSliderTask(updatedTask);
            setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
        }
        setIsDatePickerOpen(false);
    };

    return (
        <div className={`content-container ${isDarkMode ? 'dark-mode' : ''}`}>
            {/* Header */}
            <div className="content-header">
                <h1>To-Do</h1>
                <div className="dropdown">
                    <button className="dropdown-btn">▼</button>
                </div>
            </div>

            {/* Task Input Section */}
            <div className="task-input-section">
                <div className="task-input-div">
                    <input
                        type="text"
                        placeholder="Add a new task..."
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <div className="task-buttons">
                        <button className="icon-btn">
                            <FaBell />
                        </button>
                        <button className="icon-btn">
                            <FaUndo />
                        </button>
                        <button className="icon-btn">
                            <FaCalendarAlt />
                        </button>
                        <button className="add-task-btn" onClick={handleAddTask}>
                            Add Task
                        </button>
                    </div>
                </div>
            </div>

            {/* To-Do List */}
            <div className="task-list">
                <hr />
                {tasks.map((task) => (
                    <div key={task.id} className="task-item">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggleTask(task.id)}
                        />
                        <span>{task.text}</span>
                    </div>
                ))}
            </div>
            <hr />
            {/* Completed Tasks */}
            <div className="completed-tasks">
                <h2>Completed</h2>
                {completedTasks.map((task) => (
                    <div key={task.id} className="task-item completed">
                        <FaCheck className="check-icon" />
                        <span className="completed-text">{task.text}</span>
                    </div>
                ))}
            </div>

            {/* Slider */}
            {isSliderOpen && (
                <div className="slider">
                    <div className="slider-content">
                        <div className="slider-header">
                            <h3>{sliderTask?.text}</h3>
                            <button className="icon-btn" onClick={() => setIsSliderOpen(false)}>
                                <FaTimes />
                            </button>
                        </div>
                        <div className="slider-table">
                            {/* Column 1: Task Item */}
                            <div className="table-column">
                                {sliderTask?.steps.map((step, index) => (
                                    <div key={index} className="step-item">
                                        <input type="checkbox" />
                                        <span>{step}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Column 2: Add Step */}
                            <div className="table-column">
                                <div className="add-step">
                                    <input
                                        type="text"
                                        placeholder="Add a step..."
                                        value={newStep}
                                        onChange={(e) => setNewStep(e.target.value)}
                                    />
                                    <button className="icon-btn" onClick={handleAddStep}>
                                        <FaPlus /> <span>Add Step</span>
                                    </button>
                                </div>
                            </div>

                            {/* Column 3: Set Reminder */}
                            <div className="table-column">
                                <button className="icon-btn">
                                    <FaBell /> <span>Set Reminder</span>
                                </button>
                            </div>

                            {/* Column 4: Add Due Date */}
                            <div className="table-column">
                                <button className="icon-btn" onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}>
                                    <FaCalendarAlt /> <span>Add Due Date</span>
                                </button>
                                {isDatePickerOpen && (
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            value={sliderTask?.dueDate || new Date()}
                                            onChange={handleSetDueDate}
                                        />
                                    </LocalizationProvider>
                                )}
                            </div>

                            {/* Column 5: Repeat */}
                            <div className="table-column">
                                <button className="icon-btn">
                                    <FaUndo /> <span>Repeat</span>
                                </button>
                            </div>

                            {/* Column 6: Created Date and Delete */}
                            <div className="table-column2">
                                <span>Created {sliderTask?.dueDate?.toLocaleDateString() || 'today'}</span>
                                <button className="icon-btn" onClick={() => handleDeleteTask(sliderTask.id)}>
                                    <FaTrash />
                                </button>
                            </div>

                            {/* Weather Data for Outdoor Tasks */}
                            {sliderTask?.isOutdoor && weatherData && (
                                <div className="weather-info">
                                    <h4>Weather</h4>
                                    <p>{weatherData.weather[0].description}</p>
                                    <p>Temperature: {weatherData.main.temp}°C</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Content;