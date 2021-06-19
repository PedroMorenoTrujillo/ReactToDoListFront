import React from 'react';


const Dashboard = () => {
    return (
        <div className="w-75 bg-secondary">
            <h1 className="mt-5">Dashboard</h1>
            <div className="task-container d-inline-flex w-100 mt-5">
                <div className="task-left text-center w-50">
                    TEST 1
                </div>
                <div className="task-right text-center w-50">
                    TEST 2
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;