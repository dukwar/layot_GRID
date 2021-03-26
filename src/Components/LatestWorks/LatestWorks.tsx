import React from 'react';
import './LatestWorks.scss';
import works1 from "../../img/latest__works/works-1.jpg"
import works2 from "../../img/latest__works/works-2.jpg"
import works3 from "../../img/latest__works/works-3.jpg"
import works4 from "../../img/latest__works/works-4.jpg"
import works5 from "../../img/latest__works/works-5.jpg"
import works6 from "../../img/latest__works/works-6.jpg"
import works7 from "../../img/latest__works/works-7.jpg"
import works8 from "../../img/latest__works/works-8.jpg"
import works9 from "../../img/latest__works/works-9.jpg"




function LatestWorks() {
    return (
        <>
            <div className="Latest__works">
                <div className="late__works">
                    <div className="late__works__inner">
                        <div className="late__works__item">
                            <img src={works1} alt="" className="latest__image"/>

                            <div className="late__works__content">
                                <div className="late__title">Hair Dresser</div>
                                <div className="late__text">Branding</div>
                                <button className="btn btn--col">View</button>
                            </div>
                        </div>

                        <div className="late__works__item">

                            <img src={works2} alt="" className="latest__image"/>

                            <div className="late__works__content">
                                <div className="late__title">Hair Dresser</div>
                                <div className="late__text">Branding</div>
                                <button className="btn btn--col">View</button>
                            </div>
                        </div>

                        <div className="late__works__item">

                            <img src={works3} alt="" className="latest__image"/>

                            <div className="late__works__content">
                                <div className="late__title">Hair Dresser</div>
                                <div className="late__text">Branding</div>
                                <button className="btn btn--col">View</button>
                            </div>
                        </div>

                        <div className="late__works__item">

                            <img src={works4} alt="" className="latest__image"/>

                            <div className="late__works__content">
                                <div className="late__title">Hair Dresser</div>
                                <div className="late__text">Branding</div>
                                <button className="btn btn--col">View</button>
                            </div>
                        </div>

                        <div className="late__works__item">

                            <img src={works5} alt="" className="latest__image"/>

                            <div className="late__works__content">
                                <div className="late__title">Hair Dresser</div>
                                <div className="late__text">Branding</div>
                                <button className="btn btn--col">View</button>
                            </div>
                        </div>

                        <div className="late__works__item">

                            <img src={works6} alt="" className="latest__image"/>

                            <div className="late__works__content">
                                <div className="late__title">Hair Dresser</div>
                                <div className="late__text">Branding</div>
                                <button className="btn btn--col">View</button>
                            </div>
                        </div>

                        <div className="late__works__item">

                            <img src={works7} alt="" className="latest__image"/>

                            <div className="late__works__content">
                                <div className="late__title">Hair Dresser</div>
                                <div className="late__text">Branding</div>
                                <button className="btn btn--col">View</button>
                            </div>
                        </div>

                        <div className="late__works__item">

                            <img src={works8} alt="" className="latest__image"/>

                            <div className="late__works__content">
                                <div className="late__title">Hair Dresser</div>
                                <div className="late__text">Branding</div>
                                <button className="btn btn--col">View</button>
                            </div>
                        </div>

                        <div className="late__works__item">

                            <img src={works9} alt="" className="latest__image"/>

                            <div className="late__works__content">
                                <div className="late__title">Hair Dresser</div>
                                <div className="late__text">Branding</div>
                                <button className="btn btn--col">View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default LatestWorks;
