import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Layout = () => {

    return (
        <div>
            <div className="homepage">
                <header className="app-name">
                    CREATORVERSE
                </header>
                <nav className="navbar">
                    <ul>
                        <li className="nav-links">
                            <button>
                                <Link 
                                    style={{color: "blue"}}
                                    to="/">
                                    VIEW ALL CREATORS
                                </Link>
                            </button>
                        </li>
                        <li className="nav-links">
                            <button>
                                <Link 
                                    style={{color: "blue"}}
                                    to="/AddCreator">
                                    ADD A CREATOR
                                </Link>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout;