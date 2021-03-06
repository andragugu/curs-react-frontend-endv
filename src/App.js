import React, {Component, Fragment} from 'react';
import './App.css';
import BootcampListComponent from './components/bootcampsList/bootcampsList';
// import Parent from './components/siblings-interaction/parent';
// import ChildComponent from "./childComponent";
import {Route, Switch} from 'react-router-dom';
import CoursesList from './components/coursesList/coursesList';
import CourseDetails from './components/course/course';
import Navigation from './components/navigation/navigation';
import BootcampListComponentHooks from './components/bootcampsList/hooks-version/bootcampsListHooks';
import BootcampComponent from './components/bootcamp/bootcamp';
import BootcampDetailsComponent from './components/bootcampDetails/bootcampDetails';
import FormComponent from './components/forms/formComponent/formComponent';
import FormParentComponent from './components/forms/formParent/formParent';
import BootcampsRouteComponent from './components/hooksVersion/BootcampsParent/BootcampsParent';

    class  App extends Component {
    constructor() {
        super();
        this.state = {
            text: 'Hello',
            showChild: true
        };
    }
    render() {
        console.log('render Parent');
        return (
            <Fragment>
                {/* <button onClick={() => this.setState(state => ({showChild : !state.showChild}))}>
                    Toggle state
                </button>

                <button onClick={() => this.setState(state => ({text: state.text + '+hello'}))}>
                    Update state
                </button>
                {this.state.showChild ? <ChildComponent text={this.state.text} /> : null} */}

                <Navigation />
                <Switch>
                    <Route exact path='/' component={BootcampListComponent}></Route>
                    <Route exact path='/courses' component={CoursesList}></Route>
                    <Route exact path='/courses/:courseId' component={CourseDetails} />
                    <Route exact path='/bootcamps/add' component={FormParentComponent}></Route>
                    <Route exact path='/bootcamps/:id' component={BootcampDetailsComponent}></Route>
                    <Route exact path="/hooks" component={BootcampsRouteComponent}></Route>
                </Switch>

            </Fragment>
        )
    }
}

export default App;
