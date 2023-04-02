import React, { Component } from 'react'
import { ProjectList } from './ProjectList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        console.log(this.props)
        const { projects } = this.props
        return (
            <div>
                <ProjectList projects={projects}/>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}
export default connect(mapStateToProps)(Dashboard)