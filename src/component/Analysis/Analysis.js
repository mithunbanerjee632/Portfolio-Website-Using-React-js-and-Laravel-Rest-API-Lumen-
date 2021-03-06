import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BarChart, Bar, ResponsiveContainer, XAxis, Tooltip} from "recharts";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

import parse from 'html-react-parser';
import ReactHtmlParser from 'react-html-parser';
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";



class Analysis extends Component {
    constructor() {
        super();

        this.state={
            data:[],
            desc:"...",
            loader:true,
            error:false


        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ChartData).then(result=>{
            if(result==null){
                this.setState({error:true,loading:false})
            }else{
                this.setState({data:result,loader:false})
            }

        }).catch(error=>{
            this.setState({error:true,loading:false})
        });

        RestClient.GetRequest(AppUrl.TechDescription).then(descrip=>{
            if(descrip==null){
                this.setState({error:true,loading:false})
            }else{
                this.setState({desc:descrip[0]['tech_description'],loader:false})
            }

        }).catch(error=>{
            this.setState({error:true,loading:false})
        });


    }




    render() {

        if(this.state.loader==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.loader==false && this.state.error==false){
            var blue="rgba(0,115,230,0.8)"
            return (
                <Fragment>
                    <Container>
                        <h1 className="serviceMainTitle text-center">TECHNOLOGY USED</h1>

                        <Row>
                            <Col style={{width:'50%', height:'260px'}}  lg={6} md={12} sm={12}>
                                <ResponsiveContainer>
                                    <BarChart width={100} height={300} data={this.state.data}>
                                        <XAxis dataKey="technology"/>
                                        <Tooltip/>
                                        <Bar dataKey="project" fill={blue} >
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>

                            </Col>

                            <Col lg={6} md={12} sm={12}>
                                <p className="text-justify des">

                                    { ReactHtmlParser(this.state.desc) }


                                </p>
                            </Col>
                        </Row>
                    </Container>

                </Fragment>
            );
        }else if(this.state.error==true){
            return <WentWrong/>
        }

    }
}

export default Analysis;