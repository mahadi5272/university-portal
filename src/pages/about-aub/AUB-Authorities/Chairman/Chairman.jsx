import React from 'react';
import PageHeader from '../../../../Component/Shared/PageHeader';

const Chairman = () => {
    return (
        <div>
            <PageHeader pageTitle="Chairman of AUB" routeName="Chairman"></PageHeader>
            <div className="global-position pt-20 pb-36">
                <div className="flex flex-col md:flex-row gap-10">
                    <img src="https://aub-ac.com/media_root/authority/chairman.jpg" alt="Dr. Muhammad Jafar Sadeq" />
                    <div>
                        <h1 className="text-2xl xl:text-3xl font-bold text-gray-800">Dr. Muhammad Jafar Sadeq</h1>
                        <h2 className="text-2xl text-gray-800">Chairman,  Asian University of Bangladesh</h2>
                        <p className="text-gray-600 mt-6">Doctor of Philosophy (Ph.D.)Geomatics, University of Melbourne.</p>
                    </div>
                </div>
                <p className="text-gray-600 mt-14">
                    Assalamualaikum!<br /><br />

                    It is a great pleasure to welcome you to the website of Asian University of Bangladesh (AUB). AUB was established in 1996 to spread education among the masses of Bangladesh. Our goal is to prepare strong graduates who are professionally-skilled and morally upright so that they may impact the nation and the world in positive manner. AUB has some distinct characteristics:<br /><br />

                    1. The academic curricula of AUB are constantly being reviewed to meet the needs of the changing market.<br /><br />

                    2. AUB's curricula provide multi-disciplinary learning for students to enable to face challenges of a globalized world.<br /><br />

                    3. AUB is reputed for the intergration of ethics and morality into its programs, which provide confidence to guardians that their next generation will be upright citizens of the world.<br /><br />

                    4. Lastly, Asian University’s education programs are provided at the most affordable economic value to enable students of all backgrounds to attain higher education.<br /><br />

                    5. AUB is located on an 8-acre campus which includes a 10-story academic building, football and cricket facilities, badminton courts and physical training facilities so that students may enjoy their time on the campus.<br /><br />

                    6. AUB's faculty members are involved in multi-national research collaborations, publishing in high-ranking international journals.<br /><br />

                    AUB is therefore well-prepared to cater to the needs of students of all walks of life and all kinds of interest. We hope to see you soon at our campus.<br /><br />
                </p>
            </div>
        </div>
    );
};

export default Chairman;