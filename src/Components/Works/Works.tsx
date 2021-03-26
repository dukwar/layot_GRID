import React from 'react';
import './Works.scss';
import A from "../../img/works/works_text-1.png"
import Tag from "../../img/works/works_text-2.png"
import Сircle from "../../img/works/works_text-3.png"



function Works() {
    return (
        <>
            <div className="works">
                <div className="works__inner">

                    <div className="works__item">
                        <div className="works__icon">
                            <div className="works__img"><img src={A} alt="dsfdsf"/></div>
                        </div>
                        <div className="works__title">Clean Typography</div>
                        <div className="works__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                            maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.
                        </div>
                    </div>


                    <div className="works__item">
                        <div className="works__icon">
                            <div className="works__img img-2-3"><img src={Tag} alt=""/></div>
                        </div>
                        <div className="works__title">Rock Solid Code</div>
                        <div className="works__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                            maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.
                        </div>
                    </div>

                    <div className="works__item">
                        <div className="works__icon">
                            <div className="works__img img-2-3"><img src={Сircle} alt=""/></div>
                        </div>
                        <div className="works__title">Expert Support</div>
                        <div className="works__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                            maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Works;
