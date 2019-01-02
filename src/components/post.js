import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class Post extends Component {

    render() {
        return (
            <div className='gridContent'>
                <div className='post'>
                    <Link to={{
                        pathname: this.props.match.path + '/' + this.props.id
                    }}>
                        <h4>{this.props.postTitle}</h4>
                    </Link>
                    <p>{this.props.postBody}</p>
                </div>

            </div>
        )
    }
}

export default withRouter(Post)