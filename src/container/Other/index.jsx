import React, { Component } from 'react'
import Button from '../../component/Button'
import { Achievement, Organization, Certification } from '../Other/contentOther'

class Other extends Component {
    constructor(){
        super();
        this.state = {
            toggle : true,
            idbut : "",
        }
    }
    
    handleClick = (e) =>{
        console.log(e.target.id);
        this.setState({
            idbut : "oke",
        });
         
        console.log(this.state);
        this.getContent(this.id);
        this.setState({
            toggle : !this.state.toggle,
        })
        console.log(this.state.toggle);
    };
    getContent = () => {
        if (this.state.id === 'achievement') {
            return <Achievement />
        } else if (this.state.id === 'organization') {
           return <Organization />
        } else {
           return <Certification />
        }
    };
    render (){
        return (
            <div className="container">
                <div className="row ustify-content-center">
                    <div className="my-other">
                        <div className="other">
                            <div className="head-other">
                                <h5><span className="badge">OTHER</span></h5>
                            </div>
                            <div className="content-other">
                                <div className="button-tabs">
                                    {/* <button className="btn btn-tabs active-tabs" onclick="openTab(event, 'achievement')">Achievements</button>
                                    <button className="btn btn-tabs" onclick="openTab(event, 'organization')">Organization</button>
                                    <button className="btn btn-tabs" onclick="openTab(event, 'certification')">Certification</button> */}
                                    <Button 
                                        // active = 'active-tabs'
                                        active
                                        title = 'Achievement'
                                        idBtn="achievement"
                                        onclick={(props) => {
                                            this.handleClick(props);
                                        }}  
                                    />
                                    <Button 
                                        title ='organization'
                                        idBtn="organization" 
                                        onclick={(event) => {
                                            this.handleClick(event);
                                        }}  
                                    />
                                    <Button 
                                        title = 'certification'
                                        idBtn="certification" 
                                        onclick={(event) => {
                                            this.handleClick(event);
                                        }}
                                    />
                                </div>
                                        
                                {this.getContent}
                                
                                
                            </div>
                        </div>  
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Other;