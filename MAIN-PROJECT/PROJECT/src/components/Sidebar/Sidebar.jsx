import React, { useContext } from "react";
import "./Sidebar.css";
import DonutChart from "../Chart/DonutChart"; // Import chart
import profileImg from "../../assets/profile.jpeg";
import { FaTasks, FaCalendarDay, FaExclamationCircle, FaCalendarCheck, FaUser, FaPlus } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { LuClipboardList } from "react-icons/lu";
import { FiCalendar } from "react-icons/fi";
import { CiMap } from "react-icons/ci";
import { LuUserCheck } from "react-icons/lu";
import { DarkModeContext } from "../Darkmode"; // Import the DarkModeContext

const Sidebar = () => {
    const tasksCompleted = 11;
    const totalTasks = 12;
    const { isDarkMode } = useContext(DarkModeContext); // Use the context

    return (
        <div className={`home ${isDarkMode ? "dark-mode" : ""}`}>
            <div className="profile">
                <img src={profileImg} alt="Profile" />
                <h1>Hey, ABCD</h1>
            </div>

            <div className={`sidebar1 ${isDarkMode ? "dark-mode" : ""}`}>
                <div className="menu-container">
                    <ul className="menu-list">
                        <li><LuClipboardList className="menu-icon" /><span>All Tasks</span></li>
                        <li><FiCalendar className="menu-icon" /><span>Today</span></li>
                        <li><CiStar className="menu-icon" /><span>Important</span></li>
                        <li><CiMap className="menu-icon" /><span>Planned</span></li>
                        <li><LuUserCheck className="menu-icon" /><span>Assigned to me</span></li>
                    </ul>
                </div>

                <div className="add-list-container">
                    <button className="add-list-btn">
                        <FaPlus className="add-icon" /><span>Add list</span>
                    </button>
                </div>

                <div className="progress-container">
                    <h3>Task Progress</h3>
                    <DonutChart tasksCompleted={tasksCompleted} totalTasks={totalTasks} />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;