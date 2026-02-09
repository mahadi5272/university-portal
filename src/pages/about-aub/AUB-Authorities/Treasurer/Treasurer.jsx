import React from 'react';
import PageHeader from '../../../../Component/Shared/PageHeader';

const Treasurer = () => {
	return (
		<div>
			<PageHeader pageTitle="Treasurer of AUB" routeName="Treasurer"></PageHeader>
			<div className="global-position pt-20 pb-36">
				<div className="flex flex-col md:flex-row gap-10">
					<img src="https://aub-ac.com/media_root/authority/teasurer.jpg" alt="Professor Dr. Md. Nurul Islam"/>
					<div>
						<h1 className="text-2xl xl:text-3xl font-bold text-gray-800">Professor Dr. Md. Nurul Islam</h1>
						<h2 className="text-2xl text-gray-800">Treasurer,  Asian University of Bangladesh</h2>
						<p className="text-gray-600 mt-6">Ex-Dean, Faculty of Animal Husbandry, Bangladesh Agricultural University.</p>
					</div>
				</div>
				<p className="text-gray-600 mt-14">
					It is a matter of great honour for me to be able to write this message as the Treasurer of the Asian University of Bangladesh (AUB). The University was founded in 1996 with the goal of satisfying society's needs for higher education and research. We are doing everything we can to make it one of Bangladesh's greatest private universities. The university's objective is to produce graduates who are well-educated and technologically savvy and can contribute positively to the nation's progress. In this fast-changing world, AUB is devoted to supplementing its students' learning. AUB believes that the greatest way to disseminate university education is through a complex mix of teaching and research.<br/><br/>

					AUB has formed collaborative ties with business, academia, and research institutions to meet the challenges. In many areas, we have our own quality standard systems for faculty selection, training, and development. We also follow good organizational management methods, such as efficient coordination of academic and administrative offices, infrastructure development, and operational processes. We are also proud of our board of trustees, whose forward-thinking policies have already made an impact.<br/><br/>

					The university offers international-standard education at an affordable price, including course materials. In comparison to the tuition structure of any other private university in Bangladesh, this university's fees are likely the most reasonable. Women are especially encouraged to take advantage of the discounted entrance.<br/><br/>

					I wish all students the best of luck in their academic and professional endeavors. I hope that after graduating from our university, you will be a valuable asset to the country and contribute considerably to our country's socio-economic development. I feel that your knowledge and competence will help to improve the image of our university in the eyes of the outside world.
				</p>
			</div>
		</div>
	);
};

export default Treasurer;
