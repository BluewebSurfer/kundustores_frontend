import React from 'react'
import { Link } from 'react-router-dom';

export default function Cards() {
    return (
        <>
            <section className="row">
            <div className="col-md-12">
                <div className="title-wrap">
                    <h2 className="title">Products</h2>
                </div>
                <div className="wrap">
                    <div className="elements">
                        <div className="pic" >
                            <Link to="">
                                <img alt="" src="https://media1.giphy.com/media/xTdAjyBjcMODnF7ZII/giphy.gif" />
                            </Link>
                        </div>
                        {/* <p className="element-info">
                            <br />
                            <strong>Lorem Ipsum</strong>
                        </p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p> */}
                    </div>
                    <div className="elements">
                        <div className="pic" >
                            <Link to="">
                                <img alt="" src="https://media1.giphy.com/media/xTdAjyBjcMODnF7ZII/giphy.gif" />
                            </Link>
                        </div>
                        {/* <p className="element-info">
                            <br />
                            <strong>Lorem Ipsum</strong>
                        </p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p> */}
                    </div>
                    <div className="elements">
                        <div className="pic" >
                            <Link to="">
                                <img alt="" src="https://media1.giphy.com/media/xTdAjyBjcMODnF7ZII/giphy.gif" />
                            </Link>
                        </div>
                        {/* <p className="element-info">
                            <br />
                            <strong>Lorem Ipsum</strong>
                        </p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p> */}
                    </div>
                    <div className="elements">
                        <div className="pic" >
                            <Link to="">
                                <img alt="" src="https://media1.giphy.com/media/xTdAjyBjcMODnF7ZII/giphy.gif" />
                            </Link>
                        </div>
                        {/* <p className="element-info">
                            <br />
                            <strong>Lorem Ipsum</strong>
                        </p>
                        <p className="info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p> */}
                    </div>
                </div>
            </div>
        </section>

        </>
        
    )
}
