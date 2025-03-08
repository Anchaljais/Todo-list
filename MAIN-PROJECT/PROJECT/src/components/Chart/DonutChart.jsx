import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const DonutChart = ({ tasksCompleted, totalTasks }) => {
    const pendingTasks = totalTasks - tasksCompleted;

    // Data for the chart
    const data = [
        { name: "Completed", value: tasksCompleted },
        { name: "Pending", value: pendingTasks }
    ];

    // Colors for the sections
    const COLORS = ["#388E3C", "#1B4523"]; // Green shades

    return (
        <PieChart width={150} height={150}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={45} // Inner circle radius
                outerRadius={70} // Outer circle radius
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    );
};

export default DonutChart;
