import React from 'react';
import PageHeader from '../../../../Component/Shared/PageHeader';

const syndicateMembers = [
    { id: 1, name: "Prof. Dr. Md. Nurul Islam", role: "Member", imageURL: "https://aub-ac.com/media_root/syndicate/tresurer.jpg", description: "Treasurer, AUB" },
    { id: 2, name: "Dr. M. Mesbahuddin Sarker", role: "Member", imageURL: "https://aub-ac.com/media_root/syndicate/mesbah.jpg", description: "Professor, JU" },
    { id: 3, name: "Md. Rabiul Islam", role: "Member", imageURL: "https://aub-ac.com/static/assets/images/default-profile-1.png", description: "Additional Secretary (Secondary Wings-2 , Secondary & Higher Education Division, Ministry of Education" },
    { id: 4, name: "Dr. Muhammad Jafar Sadeq", role: "Member", imageURL: "https://aub-ac.com/media_root/syndicate/chairman.jpg", description: "Chairman, Board of Trustees, AUB" },
    { id: 5, name: "Md. Marfat Ullah", role: "Member", imageURL: "https://aub-ac.com/static/assets/images/default-profile-1.png", description: "Member, Board of Trustees, AUB" },
    { id: 6, name: "Prof. Dr. Abul Hasan M. Sadeq", role: "Member", imageURL: "https://aub-ac.com/media_root/syndicate/founder.jpg", description: "Dean, School of Social Sciences" },
    { id: 7, name: "Mr. Muhammed Lakiotullah", role: "Member", imageURL: "https://aub-ac.com/static/assets/images/default-profile-1.png", description: "Member Board of Trustees, AUB" },
    { id: 8, name: "Mr. S. M. Yasin Ali", role: "Member", imageURL: "https://aub-ac.com/media_root/syndicate/yasin.jpg", description: "Member, AUB Syndicate" },
    { id: 9, name: "Mr. Mohammed Mohsin Miyan", role: "Member", imageURL: "https://aub-ac.com/media_root/syndicate/mohsin_mia.jpg", description: "Head, Dept. of English, AUB" },
    { id: 10, name: "M. A Motalib Chowdhury", role: "Member", imageURL: "https://aub-ac.com/static/assets/images/default-profile-1.png", description: "Registrar, AUB" },
]

const Syndicate = () => {
	return (
		<div>
			<PageHeader pageTitle="Syndicate Members" routeName="Syndicate"></PageHeader>
			<div className="pt-20 pb-36 global-position">
				<h1 className="text-2xl text-gray-800 font-bold pb-2 mb-10 border-b-2 border-gray-500 text-center max-w-80 mx-auto">Chairman of Syndicate</h1>
				<div className="max-w-80 mx-auto text-center">
					<img src="https://aub-ac.com/media_root/syndicate/vc.jpg" alt="Professor Shahjahan Khan"/>
					<h1 className="font-bold text-xl mt-4">Professor Shahjahan Khan, PhD</h1>
					<p className="font-bold text-[#00a651]">Vice Chancellor, AUB</p>
				</div>
				<h1 className="text-2xl text-gray-800 font-bold pb-2 mt-20 mb-10 border-b-2 border-gray-500 text-center max-w-80 mx-auto">Members of Syndicate</h1>
                
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {
                        syndicateMembers.map(item => <Card key={item.id} data={item}></Card>)
                    }
                </div>
			</div>
		</div>
	);
};

const Card = ({data}) => {
	return (
		<div className="bg-white border border-gray-100 p-4 hover:shadow-md">
			<h1 className="text-gray-800 text-xl font-bold">{data.name}</h1>
			<h2 className="font-bold text-[#00a651]">{data.role}</h2>
			<img src={data.imageURL} alt={data.name} className="my-2 w-full"/>
			<p className="text-gray-600 mt-6 text-lg font-bold">{data.description}</p>
		</div>
	);
}

export default Syndicate;
