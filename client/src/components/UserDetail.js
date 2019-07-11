import './components.css'
import React, { Component } from 'react'

export default class UserDetail extends Component {

    componentDidMount(){
        this.props.showUser(this.props.match.params.id)
        console.log('props.user in UserDetail: ', this.props.users[this.props.match.params.id -1])
    }

    render() {
        console.log('CURRENT USER', this.props.currentUser) // this exists now
        return (
            <div className='card'>
                <p>solo user card here</p>
            </div>
        )
    }
}