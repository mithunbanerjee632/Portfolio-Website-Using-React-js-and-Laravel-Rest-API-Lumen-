import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import AllProjects from "../component/AllProjects/AllProjects";
import Footer from "../component/Footer/Footer";

class ProjectPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pagetitle="Portfolio"/>
                <AllProjects/>
                <Footer/>

            </Fragment>
        );
    }
}

export default ProjectPage;