import React from 'react';


const Sidebar = () => {
    return (
        <aside className="w-25 px-1 mr-1 mt-3">
            <h1>To Do List</h1>
            <div className="mt-5">
                <form>
                    <div class="form-group">
                        <input type="text" className="form-control" placeholder="Enter your task" />
                    </div>
                    <button type="submit" className="btn btn-primary mr-auto d-block">Submit</button>
                </form>
            </div>
       </aside> 
     );
}
 
export default Sidebar;