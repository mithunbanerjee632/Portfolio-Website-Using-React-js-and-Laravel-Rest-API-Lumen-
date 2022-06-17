import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import CourseDetails from "../component/CourseDetails/CourseDetails";
import Footer from "../component/Footer/Footer";

class CourseDetailsPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Course Details"/>
                <CourseDetails/>
                <Footer/>

            </Fragment>
        );
    }
}

export default CourseDetailsPage;