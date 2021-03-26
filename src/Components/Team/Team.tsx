import React from 'react';
import './Team.scss';
import Team1 from "../../img/team/team-1.jpg"
import Team2 from "../../img/team/team-2.jpg"
import Team3 from "../../img/team/team-3.jpg"
import Team4 from "../../img/team/team-4.jpg"
import {Facebook, Google, LinkedIn, Twitter} from "../../helpersSCSS/imgFiles";


function Team() {
    return (
        <>
            <div className="team">
                <div className="team__inner">
                    <div className="team__item">
                        <div className="team__link">
                            <img className="team__photo" src={Team1} alt=""/>
                            <div className="team__content">
                                <div className="social">
                                    <Twitter/>
                                    <Google/>
                                    <LinkedIn/>
                                    <Facebook/>
                                </div>
                            </div>
                        </div>
                        <div className="team__name">Md. Khalil Uddin</div>
                        <div className="team__prof">Head of Ideas</div>
                    </div>


                    <div className="team__item">
                        <div className="team__link">
                            <img className="team__photo" src={Team2} alt=""/>
                            <div className="team__content">
                                <div className="social">
                                    <Twitter/>
                                    <Google/>
                                    <LinkedIn/>
                                    <Facebook/>
                                </div>


                            </div>
                        </div>

                        <div className="team__name">Rubel Miah</div>
                        <div className="team__prof">Lead WordPress Developer</div>
                    </div>


                    <div className="team__item">
                        <div className="team__link">
                            <img className="team__photo" src={Team3} alt=""/>
                            <div className="team__content">
                                <div className="social">
                                    <Twitter/>
                                    <Google/>
                                    <LinkedIn/>
                                    <Facebook/>
                                </div>

                            </div>
                        </div>
                        <div className="team__name">Shamim Mia</div>
                        <div className="team__prof">Sr. Web Developer</div>
                    </div>


                    <div className="team__item">
                        <div className="team__link">
                            <img className="team__photo" src={Team4} alt=""/>
                            <div className="team__content">
                                <div className="social">
                                    <Twitter/>
                                    <Google/>
                                    <LinkedIn/>
                                    <Facebook/>
                                </div>
                            </div>
                        </div>
                        <div className="team__name">John Doe</div>
                        <div className="team__prof">Front-end Developer</div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Team;
