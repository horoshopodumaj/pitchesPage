import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useWindowSize } from 'react-use';

import Card, { CardBody } from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import Pitch from '../../../assets/images/pitch2.jpg';
import PitchSm from '../../../assets/images/pitch1-sm.jpg';
import PitchFull from '../../../assets/images/pitchfull.jpg';
import PitchFullSm from '../../../assets/images/pitchfull-sm.jpg';
import Flag from '../../../assets/images/rus.svg';
import LifeStage from '../../../assets/images/stageC.svg';
import Maturity from '../../../assets/images/maturity.svg';
import Employees from '../../../assets/images/employees.svg';

import Modal, { ModalBody, ModalHeader, ModalTitle } from '../../../components/bootstrap/Modal';

import Views from '../../../assets/images/views.svg';
import Likes from '../../../assets/images/likes.svg';
import Expert from '../../../assets/images/expert.svg';
import Valuation from '../../../assets/images/valuation.svg';
import Question from '../../../assets/images/question.svg';
import Popovers from '../../../components/bootstrap/Popovers';

type Props = {};

type TagsTypes = {
	id: number;
	tagName: string;
};

type TCountry = {
	id: number;
	flag: string;
	countryName: string;
	city: string;
};

type TStage = {
	id: number;
	icon: string;
	stage: string;
};

interface PitchesType {
	id: number;
	imageFull: string;
	imageFullSm: string;
	imageMd: string;
	imageSm: string;
	title: string;
	desc: string;
	trendTags: TagsTypes[];
	techTags: TagsTypes[];
	video: string;
	views: number;
	likes: number;
	isExpert: boolean;
	isValuation: boolean;
	country: TCountry;
	lifeStage: TStage;
	maturityStage: TStage;
	employees: number;
}

const pitchesData: PitchesType[] = [
	{
		id: 1,
		imageFull: PitchFull,
		imageFullSm: PitchFullSm,
		imageMd: Pitch,
		imageSm: PitchSm,
		title: 'Nuro',
		desc: `Nuro — беспилотный автомобиль, поможет улучшить повседневную жизнь
    миллионов людей, обеспечив более безопасные улицы, более здоровую
    планету и более справедливый доступ к товарам, и в то же время
    вернуть людям время, которое они могут потратить на то,
    что действительно важно. Встречайте наш автономный автомобиль
    третьего поколения. `,
		trendTags: [
			{
				id: 7,
				tagName: 'Investing',
			},
			{
				id: 8,
				tagName: 'tag2',
			},
			{
				id: 9,
				tagName: 'Investing',
			},
			{
				id: 4,
				tagName: 'tag4',
			},
			{
				id: 10,
				tagName: 'Investing',
			},
			{
				id: 6,
				tagName: 'tag6',
			},
		],
		techTags: [
			{
				id: 1,
				tagName: 'Bioenergy',
			},
			{
				id: 2,
				tagName: 'Investing',
			},
			{
				id: 3,
				tagName: 'Bioenergy',
			},
			{
				id: 4,
				tagName: 'tag4',
			},
			{
				id: 5,
				tagName: 'Investing',
			},
			{
				id: 6,
				tagName: 'tag6',
			},
		],
		video: `https://www.youtube.com/embed/C4h6wMCMpZ8`,
		views: 45869,
		likes: 1007,
		isExpert: true,
		isValuation: true,
		country: { id: 1, flag: Flag, countryName: 'Россия', city: 'Казань' },
		lifeStage: {
			id: 1,
			icon: LifeStage,
			stage: 'Раунд С',
		},
		maturityStage: {
			id: 1,
			icon: Maturity,
			stage: 'Product-market fit',
		},
		employees: 36,
	},
	{
		id: 2,
		imageFull: PitchFull,
		imageFullSm: PitchFullSm,
		imageMd: Pitch,
		imageSm: PitchSm,
		title: 'Nuro 2',
		desc: `Nuro — беспилотный автомобиль, поможет улучшить повседневную жизнь
    миллионов людей, обеспечив более безопасные улицы, более здоровую
    планету и более справедливый доступ к товарам, и в то же время
    вернуть людям время, которое они могут потратить на то,
    что действительно важно. Встречайте наш автономный автомобиль
    третьего поколения.`,
		trendTags: [
			{
				id: 7,
				tagName: 'Investing',
			},
			{
				id: 8,
				tagName: 'tag2',
			},
			{
				id: 9,
				tagName: 'Investing',
			},
			{
				id: 4,
				tagName: 'tag4',
			},
			{
				id: 10,
				tagName: 'Investing',
			},
			{
				id: 6,
				tagName: 'tag6',
			},
		],
		techTags: [
			{
				id: 1,
				tagName: 'Bioenergy',
			},
			{
				id: 2,
				tagName: 'Investing',
			},
			{
				id: 3,
				tagName: 'Bioenergy',
			},
			{
				id: 4,
				tagName: 'tag4',
			},
			{
				id: 5,
				tagName: 'Investing',
			},
			{
				id: 6,
				tagName: 'tag6',
			},
		],
		video: `https://www.youtube.com/embed/C4h6wMCMpZ8`,
		views: 38749,
		likes: 1205,
		isExpert: true,
		isValuation: false,
		country: { id: 1, flag: Flag, countryName: 'Россия', city: 'Самара' },
		lifeStage: {
			id: 1,
			icon: LifeStage,
			stage: 'Раунд С',
		},
		maturityStage: {
			id: 1,
			icon: Maturity,
			stage: 'Product-market fit',
		},
		employees: 29,
	},
	{
		id: 3,
		imageFull: PitchFull,
		imageFullSm: PitchFullSm,
		imageMd: Pitch,
		imageSm: PitchSm,
		title: 'Nuro 3',
		desc: `Nuro — беспилотный автомобиль, поможет улучшить повседневную жизнь
    миллионов людей, обеспечив более безопасные улицы, более здоровую
    планету и более справедливый доступ к товарам, и в то же время
    вернуть людям время, которое они могут потратить на то,
    что действительно важно. Встречайте наш автономный автомобиль
    третьего поколения.`,
		trendTags: [
			{
				id: 7,
				tagName: 'Investing',
			},
			{
				id: 8,
				tagName: 'tag2',
			},
			{
				id: 9,
				tagName: 'Investing',
			},
			{
				id: 4,
				tagName: 'tag4',
			},
			{
				id: 10,
				tagName: 'Investing',
			},
			{
				id: 6,
				tagName: 'tag6',
			},
		],
		techTags: [
			{
				id: 1,
				tagName: 'Bioenergy',
			},
			{
				id: 2,
				tagName: 'Investing',
			},
			{
				id: 3,
				tagName: 'Bioenergy',
			},
			{
				id: 4,
				tagName: 'tag4',
			},
			{
				id: 5,
				tagName: 'Investing',
			},
			{
				id: 6,
				tagName: 'tag6',
			},
		],
		video: `https://www.youtube.com/embed/C4h6wMCMpZ8`,
		views: 4869,
		likes: 107,
		isExpert: false,
		isValuation: true,
		country: { id: 1, flag: Flag, countryName: 'Россия', city: 'Москва' },
		lifeStage: {
			id: 1,
			icon: LifeStage,
			stage: 'Раунд С',
		},
		maturityStage: {
			id: 1,
			icon: Maturity,
			stage: 'Product-market fit',
		},
		employees: 8,
	},
];

const PitchesCard: FC = (props: Props) => {
	const [modalState, setModalState] = useState<boolean>(false);

	const [pitches, setPitches] = useState(pitchesData);

	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const windowsWidth: number = useWindowSize().width;

	const [domLoaded, setDomLoaded] = useState<boolean>(false);

	const pitchesFilter = (pitch: PitchesType) => {
		console.log(pitches.length);
		if (pitches.length === 1) {
			setPitches(pitchesData);
		} else {
			setPitches(pitches.filter((item) => item.id !== pitch.id));
		}
	};

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	useEffect(() => {
		const lastIndex = pitches.length - 1;
		if (currentIndex > lastIndex) {
			setCurrentIndex(0);
		}
	}, [currentIndex, pitches]);

	return (
		<section id='pitches' className='pitches scroll-margin'>
			<div className='wrapper__titles'>
				<h2 className='fw-semibold titles m-0'>Стартапы</h2>
			</div>
			<div className='pitches__container'>
				{pitches.map((pitch: PitchesType, pitchIndex: number) => {
					let position = 'nextSlide';
					if (pitchIndex === currentIndex) {
						position = 'activeSlide';
					}

					if (
						pitchIndex === currentIndex - 1 ||
						(currentIndex === 0 && pitchIndex === pitches.length - 1)
					) {
						position = 'lastSlide';
					}

					if (pitches.length === 1) {
						position = 'activeSlide';
					}

					return (
						<div
							className={`pitches__wrapper pitches__wrapper-alone d-flex  ${position}`}
							key={pitch.id}>
							<div
								className={`pitches__content pitches__content-alone video ${position}`}>
								<Card className={`pitches__video video ${position}`}>
									<CardBody className='video__body'>
										<Image
											className=''
											width={domLoaded && windowsWidth >= 576 ? 429 : 300}
											height={domLoaded && windowsWidth >= 576 ? 774 : 540}
											src={
												domLoaded && windowsWidth >= 576
													? pitch.imageFull
													: pitch.imageFullSm
											}
											alt={pitch.title}
										/>
										<Button
											className='video__play'
											icon={'PlayIcon'}
											onClick={() => setModalState(true)}></Button>
										<div className='video__group'>
											<Button
												className='video__reject'
												onClick={
													() => pitchesFilter(pitch)
													//setCurrentIndex((prevState) => prevState + 1)
												}
												icon={'RejectIcon'}></Button>
											<Button
												className='video__approve'
												onClick={() =>
													setCurrentIndex((prevState) => prevState + 1)
												}
												icon={'ApproveIcon'}></Button>
										</div>
									</CardBody>
								</Card>
							</div>
							<div className={`pitches__info ${position}`}>
								<Card className='pitches-card'>
									<CardBody className='pitches-card__body pitches-card__body-alone'>
										<div className='pitches-info d-flex'>
											<div className='pitches-info__box d-flex align-items-center'>
												<Image
													className='pitches-info__img'
													src={Views}
													width={24}
													height={24}
													alt='views'
												/>
												<p className='pitches-info__caption m-0'>
													{pitch.views}
												</p>
											</div>
											<div className='pitches-info__box d-flex align-items-center'>
												<Image
													className='pitches-info__img'
													src={Likes}
													width={24}
													height={24}
													alt='likes'
												/>
												<p className='pitches-info__caption m-0'>
													{pitch.likes}
												</p>
											</div>
											{pitch.isExpert && (
												<div className='pitches-info__box d-flex align-items-center'>
													<Image
														className='pitches-info__img'
														src={Expert}
														width={24}
														height={24}
														alt='expert'
													/>
													<p className='pitches-info__caption m-0'>
														Назначен эксперт
													</p>
												</div>
											)}
											{pitch.isExpert && pitch.isValuation && (
												<div className='pitches-info__box d-flex align-items-center'>
													<Image
														className='pitches-info__img'
														src={Valuation}
														width={24}
														height={24}
														alt='valuation'
													/>
													<p className='pitches-info__caption m-0'>
														Есть оценка
													</p>
												</div>
											)}
										</div>
										<h3 className='pitches-card__title'>{pitch.title}</h3>
										{/* <ClampLines
											text={pitch.desc}
											id='really-unique-id'
											lines={4}
											ellipsis='...'
											moreText='Expand'
											lessText='Collapse'
											className='pitches-card__desc'
											innerElement='p'
										/> */}
										<p className='pitches-card__desc pitches-card__desc-alone'>
											{pitch.desc}
										</p>
										<div className='pitches-card__specification d-flex '>
											<div className='pitches-card__info'>
												<h5 className='pitches-card__subtitle'>Страна</h5>
												<div className='pitches-card__country d-flex align-items-center'>
													<Image
														className='pitches-info__img me-2'
														src={pitch.country.flag}
														width={24}
														height={24}
														alt='flag'
													/>
													<p className='subfont m-0'>
														{pitch.country.countryName},
													</p>
													<p className='subfont m-0'>
														{' '}
														&nbsp;город &nbsp;
													</p>
													<p className='subfont m-0'>
														{' '}
														{pitch.country.city}
													</p>
												</div>

												<div className='pitches-card__trends pitches-card__trends-alone'>
													<h5 className='pitches-card__subtitle'>
														Технологические направления:
													</h5>
													<div className='pitches-card__tags'>
														{pitch.trendTags.map(
															(trendTag: TagsTypes) => (
																<p
																	className='tag tag-alone tag__trend'
																	key={trendTag.id}>
																	{trendTag.tagName}
																</p>
															),
														)}
													</div>
												</div>
												<div className='pitches-card__technologies pitches-card__technologies-alone'>
													<h5 className='pitches-card__subtitle'>
														Технологии:
													</h5>
													<div className='pitches-card__tags'>
														{pitch.techTags.map(
															(techTag: TagsTypes) => (
																<p
																	className='tag tag-alone tag__tech '
																	key={techTag.id}>
																	{techTag.tagName}
																</p>
															),
														)}
													</div>
												</div>
											</div>
											<div className='pitches-card__stages'>
												<div className='stages'>
													<h5 className='stages__title pitches-card__subtitle'>
														Стадия жизненного цикла
													</h5>
													<div className='stages__info d-flex align-items-center'>
														<Image
															className=' me-2'
															src={pitch.lifeStage.icon}
															width={24}
															height={24}
															alt='lifestage'
														/>
														<p className='stages__subtitle subfont mb-0 me-2 '>
															{pitch.lifeStage.stage}
														</p>
														<Popovers
															className=' lh-sm'
															placement='right'
															desc={
																<>
																	Иконка,
																	<br /> с текстовой
																	<br /> подсказкой
																	<br /> при наведении
																</>
															}
															trigger={
																windowsWidth >= 768
																	? 'hover'
																	: 'click'
															}>
															<Image
																className='mt-n1 '
																src={Question}
																width={19}
																height={19}
																alt='Question'
															/>
														</Popovers>
													</div>
												</div>
												<div className='stages'>
													<h5 className='stages__title pitches-card__subtitle'>
														Стадия зрелости
													</h5>
													<div className='stages__info d-flex align-items-center'>
														<Image
															className=' me-2'
															src={pitch.maturityStage.icon}
															width={24}
															height={24}
															alt='lifestage'
														/>
														<p className='stages__subtitle subfont mb-0 me-2'>
															{pitch.maturityStage.stage}
														</p>
														<Popovers
															className=' lh-sm'
															placement='right'
															desc={
																<>
																	Иконка,
																	<br /> с текстовой
																	<br /> подсказкой
																	<br /> при наведении
																</>
															}
															//desc='Иконка, с текстовой подсказкой при наведении.'
															trigger={
																windowsWidth >= 768
																	? 'hover'
																	: 'click'
															}>
															<Image
																className='mt-n1 '
																src={Question}
																width={19}
																height={19}
																alt='Question'
															/>
														</Popovers>
													</div>
												</div>
												{/* <div className='stages'>
													<h5 className='stages__title pitches-card__subtitle'>
														Количество сотрудников
													</h5>
													<div className='stages__info d-flex align-items-center'>
														<Image
															className=' me-2'
															src={Employees}
															width={24}
															height={24}
															alt='employees'
														/>
														<p className='stages__subtitle subfont m-0'>
															{pitch.employees}
														</p>
													</div>
												</div> */}
											</div>
										</div>
										<div className='pitches__btn-wrapper'>
											<Button className='pitches-card__btn-alone'>
												Перейти на страницу
											</Button>
										</div>
									</CardBody>
								</Card>
							</div>
						</div>
					);
				})}
			</div>
			<Modal
				setIsOpen={() => setModalState(!modalState)}
				isOpen={modalState}
				isCentered={true}
				size={'lg'}
				fullScreen={false}
				titleId='video-modal'>
				<ModalHeader setIsOpen={() => setModalState(!modalState)}>
					<ModalTitle className='startups__title' id='video-modal'>
						Meet Nuro
					</ModalTitle>
				</ModalHeader>
				<ModalBody className='text-center'>
					<div className='pitches__modal'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/C4h6wMCMpZ8'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen></iframe>
					</div>
				</ModalBody>
			</Modal>
		</section>
	);
};

export default PitchesCard;
