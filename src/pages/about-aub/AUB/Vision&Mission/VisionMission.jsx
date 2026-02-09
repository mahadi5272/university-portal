import React from 'react';
import PageHeader from '../../../../Component/Shared/PageHeader';

const VisionMission = () => {
    return (
        <div>
            <PageHeader pageTitle="Vision & Mission of AUB" routeName="Vision & Mission"></PageHeader>
            <div className="global-position pt-20 pb-36">
                <img src="https://aub-ac.com/media_root/vision-mission/v-m-aub-banner.jpg" alt="Vision & Mission Banner" />
                <div className="space-y-20 mt-20 [&_h1]:mb-10">
                    <div>
                        <h1 className="text-gray-800 font-bold text-xl">Vision of AUB:</h1>
                        <p className="text-gray-600">
                            To become a leading provider of best quality international standard higher education in Bangladesh to produce globally competitive professionals who will be devoted to the service of the country and humanity as a whole,<br /><br />
                            and to be distinguished in research and innovation.
                        </p>
                    </div>

                    <div>
                        <h1 className="text-gray-800 font-bold text-xl">Mission of AUB:</h1>
                        <ul className="[&_li]:text-gray-600 [&_li]:mb-4 list-disc marker:text-gray-600 ml-12">
                            <li>To deliver high quality affordable tertiary education and training using state of the art educational technologies by world-class educators in a student friendly environment;</li>
                            <li>To ensure distinguishing graduate attributes along with ethical values for all students;</li>
                            <li>To produce top quality research outputs and innovation as a partner of developing Bangladesh and beyond.</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-gray-800 font-bold text-xl">
                            Objectives of AUB:
                        </h1>

                        <ul
                            className="list-disc list-inside marker:text-gray-600 ml-6 [&_li]:not-first:border-t [&_li]:border-gray-200 [&_li]:pt-8 [&_li]:pb-8 [&_li]:text-gray-600 [&_li]:leading-relaxed [&_p]:inline [&_p]:pl-3"
                        >
                            <li>
                                <p>
                                    To provide quality education in the most cost-effective manner resulting in creating graduates of high quality who will be professionally skilled, morally upright and socially responsible citizens;
                                </p>
                            </li>

                            <li>
                                <p>
                                    To impart knowledge through excellence in learning, research, innovation, discovery and engagement in the practical field;
                                </p>
                            </li>

                            <li>
                                <p>
                                    To acquaint the students with the latest research and provide state of the art knowledge, skills and exposure to futuristic ideas on science, technology and development;
                                </p>
                            </li>

                            <li>
                                <p>
                                    To encourage human capital development and build leadership qualities in science, engineering, business, humanities, education and any other field/s so as to meet national and global needs.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionMission;