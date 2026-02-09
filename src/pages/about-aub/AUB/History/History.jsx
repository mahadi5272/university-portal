import React from 'react';
import PageHeader from '../../../../Component/Shared/PageHeader';

const History = () => {
    return (
        <div>
            <PageHeader pageTitle="History of AUB" routeName="History"></PageHeader>

            <div className="global-position pt-20 pb-36">
                <img src='https://aub-ac.com/media_root/history/history-aub-banner.jpg' alt="History Banner" />
                <div className="mt-10">
                    <h1 className="text-xl text-gray-800 font-bold">History</h1>
                    <p className="text-gray-600 mt-4">AUB received formal approval of the Government of Bangladesh on 4 January 1996 as a teaching and degree awarding university under the Private University Act, 1992. It was inaugurated by the then honorable minister for water resources of the Government of Bangladesh, Abdur Razzak, MP, in a ceremony where the special guest was the then Chairman of the University Grants Commission(UGC), Prof. Dr. Iajuddin Ahmed and later His Excellency honorable President of Bangladesh.<br/><br/>
                    The Founder of AUB, Prof. Dr. Abul Hasan M. Sadeq established this University. . This is one of the leading Private Universities in Bangladesh, and has large number of alumni holding verry high positions in the private and government sectors at home and abroad.</p>
                </div>
            </div>
        </div>
    );
};

export default History;