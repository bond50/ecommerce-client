import React from 'react';
import {Outlet} from "react-router-dom";
import classes from './AuthLayout.module.css'
import {useSelector} from "react-redux";

const AuthLayout = ({login, password, register}) => {
    const {message} = useSelector((state) => state.message);
    return (
        <main>
            <div className="container">
                <section
                    className="section  min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div
                                className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                {/*<div className="d-flex justify-content-center py-4">*/}
                                {/*    <a href="index.html" className="logo d-flex align-items-center w-auto">*/}
                                {/*        <img src="assets/img/logo.png" alt=""/>*/}
                                {/*        <span className="d-none d-lg-block">NiceAdmin</span>*/}
                                {/*    </a>*/}
                                {/*</div>*/}


                                <div className="card mb-3">

                                    <div className="card-body">
                                        <Outlet/>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </main>
    );
};

export default AuthLayout;