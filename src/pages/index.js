import React from 'react';

import Layout from '../components/indexLayout';
import SEO from '../components/seo';
import fcclogo from '../images/fcc-logo.png';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />

        <header className="hero">
            <h1 className="text-center">
                freeCodeCamp Norman
                <br />
                Study Group
            </h1>
        </header>

        <main>
            <section className="what-is-fcc">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7 offset-md-1 d-flex align-items-center">
                            <div className="content">
                                <h2 className="section-heading">What is freeCodeCamp.org?</h2>

                                <p>
                                    FreeCodeCamp is a supportive group of over one million coders who build projects,
                                    earn free certificates, and get experience by coding for non-profits. Go to{' '}
                                    <a href="https://www.freecodecamp.org/">freeCodeCamp.org</a> to sign up for a free
                                    account and start learning with through the curriculum.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 offset-md-1 d-flex justify-content-center align-items-center fcc-logo img-fluid">
                            <img src={fcclogo} alt="freeCodeCamp Logo" width="250" height="250" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-us">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="section-heading">About Us</h2>

                            <p>
                                We're a group focused on learning HTML, CSS, JavaScript, and web development using the
                                freeCodeCamp curriculum. Everyone is welcome, from beginners looking to get started to
                                more experienced coders looking to help others while improving their own skills. Join us
                                and introduce yourself and meet others who are also learning to code. Create a free
                                account on <a href="https://www.freecodecamp.org/">freeCodeCamp.org</a> and bring your
                                laptop if you have one! If you don't have one, message one of the organizers on{' '}
                                <a href="https://www.meetup.com/freecodecamp-norman/">Meetup.com</a> and we will try and
                                prepare one for you.
                            </p>
                            <p>
                                Find out more about what we're doing by going to our <a href="blog">Blog</a>.
                            </p>
                            <p>
                                Have questions? Please <a href="contact">contact us</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="meetups">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 order-lg-2 d-flex align-items-center">
                            <div className="content">
                                <h2 className="section-heading">Meetups</h2>

                                <p>
                                    We meet every other Tuesday evening at 6:30pm at the{' '}
                                    <a href="https://www.ou.edu/innovationhub">Tom Love Innovation Hub</a> on the South
                                    Research Campus of the University of Oklahoma. Even though the meetups are hosted on
                                    campus, <strong>we're open to everyone!</strong> Don't worry if you can't make it at
                                    6:30 on the dot, or if you can't stay the whole two hours. Feel free to join us when
                                    you can and for as long as you want.
                                </p>
                                <p>
                                    Don't forget to sign up for <a href="slack">the Techlahoma Slack</a>!
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1" style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <div className="embed-responsive embed-responsive-4by3">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13043.654437095902!2d-97.4381237!3d35.1837057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x44c623393c0064b6!2sOU+Tom+Love+Innovation+Hub!5e0!3m2!1sen!2sus!4v1540326570111"
                                    width="600"
                                    height="450"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </Layout>
);

export default IndexPage;
