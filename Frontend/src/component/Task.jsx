import { useEffect, useRef, useState } from 'react';
import '../style/Task.css';

const Task = () => {

    let Name = useRef(null)
    let taskStatus = useRef(null)

    let addTask = (e) => {
        e.preventDefault()
        let data = {
            Name: Name.current.value,
            taskStatus: taskStatus.current.value
        }
        fetch('http://localhost:5000/student', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
    }

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:5000/student')
            let data = await response.json()
            setStudent(data)
        }
        fetchData()
    })

    let [student, setStudent] = useState([])

    let removeList = (id) => [
        fetch(`http://localhost:5000/student/${id}`, {
            method: 'DELETE'
        })
    ]

    return (
        <div className="Task">
            <div className="addTask">
                <form action="" onSubmit={addTask}>
                    <input ref={Name} type="text" placeholder="Name" /><br />
                    <input ref={taskStatus} type="text" placeholder="taskStatus" /><br />
                    <div className="but">
                        <button>Add</button>
                    </div>
                </form>

                <h1>Task List :</h1>
                <div className="nav">
                    <h2><u>List</u></h2>
                    <h2><u>Status</u></h2>
                    <h2><u>Close</u></h2>
                </div>

                <div className="display">
                    {
                        student.map((data) => {
                            return (
                                <div className="studentData">
                                    <h4>{data.Name}</h4>
                                    <h4>{data.taskStatus}</h4>
                                    <div className="remove">
                                        <button onClick={() => removeList(data.id)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    );
}

export default Task;