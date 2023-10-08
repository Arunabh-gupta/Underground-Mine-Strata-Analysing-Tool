import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
function Dynamic_Graph({data}) {
    const [graphData, setgraphData] = useState({
        labels: data.map((e) => e.data),
        datasets: [
            {
                label: "DataSet 1",
                data: data.map((e) => e.data),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    }
    );
  return (
    <>
    <div className="Graph_container">
        <Line data={graphData}></Line>
    </div>
    </>
  )
}

export default Dynamic_Graph