import React, {Component} from 'react';


class CoursesList extends Component {
    constructor() {
        super();
        this.state = {
            courses: [],
            searchField: ""
        };
    }

    render() {
        return(
            <div>Courses List works</div>
        )
    }
}

export default CoursesList;