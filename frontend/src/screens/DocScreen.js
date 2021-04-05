import React from 'react'
import {Row, Col, Button} from "react-bootstrap"
import {Link} from "react-router-dom"

const DocScreen = () => {
    return (
        <>
            <h2>Documentation</h2>
            <Row>
                <Col>
                    <p>Click the button below to view the Documentation</p>
                    <div>
                     <a target="_blank" className="btn btn-primary" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">View Docs</a>

                    </div>

                  

                
                </Col>
            </Row>
        </>
    )
}

export default DocScreen
