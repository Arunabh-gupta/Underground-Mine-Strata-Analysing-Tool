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
import { useState , useEffect} from 'react';
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
  
function Dynamic_Graph({RefNo, data}) {
    const [graphData, setgraphData] = useState({
        labels: data.map((e) => e.date),
        datasets: [
            {
                label: "RefNo: "+RefNo,
                data: data.map((e) => e.value),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    });
    useEffect(() => {
      setgraphData({
        labels: data.map((e) => e.date),
        datasets: [
          {
            label: 'RefNo: ' + RefNo,
            data: data.map((e) => e.value),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      });
    }, [data, RefNo]);
  return (
    <>
    <div className="Graph_container">
        <Line data={graphData}></Line>
    </div>
    </>
  )
}

export default Dynamic_Graph