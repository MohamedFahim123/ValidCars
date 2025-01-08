'use client';

import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function MainAuthFormLayout({ currPage }: { currPage: string }) {
    const [currRegion, setCurrRegion] = useState<string | undefined>();

    useEffect(() => {
        const region: string = Cookies.get("region") || "riyadh";
        setCurrRegion(region);
    }, [currRegion]);

    return (
        <section className="login-section layout-radius">
            <div className="inner-container">
                <div className="right-box">
                    <div className="form-sec">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <Link
                                    href={`/${currRegion}/auth/login`}
                                    className={`nav-link ${currPage === 'login' ? 'active' : ''}`}
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                >
                                    Sign in
                                </Link>
                                <Link
                                    href={`/${currRegion}/auth/register`}
                                    className={`nav-link ${currPage === 'register' ? 'active' : ''}`}
                                    id="nav-profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                >
                                    Register
                                </Link>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            {
                                currPage === 'login' &&
                                <LoginForm />
                            }
                            {
                                currPage === 'register' &&
                                <RegisterForm />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};