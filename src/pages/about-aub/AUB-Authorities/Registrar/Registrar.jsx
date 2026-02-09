import React from 'react';
import PageHeader from '../../../../Component/Shared/PageHeader';

const Registrar = () => {
    return (
        <div>
            <PageHeader pageTitle="Registrar of AUB" routeName="Registrar"></PageHeader>
            <div className="global-position pt-20 pb-36">
                <div className="flex flex-col md:flex-row gap-10">
                    <img src="https://aub-ac.com/media_root/authority/registrar.jpg" alt="M. A Motalib Chowdhury" className="w-64 mx-auto md:mx-0" />
                    <div>
                        <h1 className="text-2xl xl:text-3xl font-bold text-gray-800">M. A Motalib Chowdhury</h1>
                        <h2 className="text-2xl text-gray-800">Registrar,  Asian University of Bangladesh</h2>
                        <p className="text-gray-600 mt-6">Registrar</p>
                    </div>
                </div>
                <p className="text-gray-600 mt-14">
                    We are striving here - to project an image of our university that will attract quality students and - create and maintain an academic atmosphere for optimal learning and enlightenment where students can prepare themselves for the challenging careers ahead while enjoying the beauties of campus life, ensuring compliance to norms, values, and discipline.
                </p>
            </div>
        </div>
    );
};

export default Registrar;