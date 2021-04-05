import React from 'react'
import {Row, Col,} from "react-bootstrap"


const DocScreen = () => {
    return (
        <>
            <h2>Documentation</h2>
            <Row>
                <Col>
                    <p>Click the button below to view the Documentation</p>
                    <div>
                     <a target="_blank" className="btn btn-primary" href="https://github.com/sunnepazzy123/team-tailor-assignment-redux">View Docs</a>

                    </div>

                  

                
                </Col>
            </Row>
        </>
    )
}

export default DocScreen
