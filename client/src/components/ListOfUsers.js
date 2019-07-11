import React from 'react'
import './components.css'
import { Link } from 'react-router-dom'

const ListOfUsers = (props) => {
    console.log('ListOfUsers.js: props =', props)
    return (
        <div className='card'>                
        <h4>Current Users:</h4>
            <ul>
                {props.users.map((user)=> {
                  return (
                    <div className='userDetailCard' key={user._id}>
                      <li>{user.firstName} {user.lastName} from {user.city} </li> 
                      <Link id='detailLink' to={`/users/${user._id}`}> <i className="fas fa-info-circle"></i> </Link>
                    </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListOfUsers;