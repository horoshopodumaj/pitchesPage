import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useDarkMode from '../../hooks/useDarkMode';
import useMinimizeAside from '../../hooks/useMinimizeAside';
import { useEffect, useState } from 'react';
import tableData from '../../common/data/dummyProductData';
import { useFormik } from 'formik';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import { demoPagesMenu } from '../../menu';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../layout/SubHeader/SubHeader';
import Button from '../../components/bootstrap/Button';
import Company1 from '../../assets/logos/company1.png';
import PitchesCard from '../../common/partial/myComponents/PitchesCard';

interface IValues {
	name: string;
	price: number;
	stock: number;
	category: string;
	image?: string | null;
}
const validate = (values: IValues) => {
	const errors = {
		name: '',
		price: '',
		stock: '',
		category: '',
	};

	if (!values.name) {
		errors.name = 'Required';
	} else if (values.name.length < 3) {
		errors.name = 'Must be 3 characters or more';
	} else if (values.name.length > 20) {
		errors.name = 'Must be 20 characters or less';
	}

	if (!values.price) {
		errors.price = 'Required';
	} else if (values.price < 0) {
		errors.price = 'Price should not be 0';
	}

	if (!values.stock) {
		errors.stock = 'Required';
	}

	if (!values.category) {
		errors.category = 'Required';
	} else if (values.category.length < 3) {
		errors.category = 'Must be 3 characters or more';
	} else if (values.category.length > 20) {
		errors.category = 'Must be 20 characters or less';
	}

	return errors;
};

const Index: NextPage = () => {
	const { darkModeStatus } = useDarkMode();
	useMinimizeAside();
	const [data, setData] = useState(tableData);
	const [editItem, setEditItem] = useState<IValues | null>(null);
	const [editPanel, setEditPanel] = useState<boolean>(false);

	const formik = useFormik({
		initialValues: {
			name: '',
			price: 0,
			stock: 0,
			category: '',
		},
		validate,
		onSubmit: (values) => {
			setEditPanel(false);
		},
	});

	useEffect(() => {
		if (editItem) {
			formik.setValues({
				name: editItem.name,
				price: editItem.price,
				stock: editItem.stock,
				category: editItem.category,
			});
		}
		return () => {
			formik.setValues({
				name: '',
				price: 0,
				stock: 0,
				category: '',
			});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [editItem]);

	return (
		<>
			<PageWrapper>
				<Head>
					<title>{demoPagesMenu.gridPages.subMenu.gridBoxed.text}</title>
				</Head>
				<SubHeader>
					<SubHeaderLeft>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={Company1} alt='Company' height={24} />
						<span>Products</span>
						<SubheaderSeparator />
						<span className='text-muted'>{data.length} items</span>
					</SubHeaderLeft>
					<SubHeaderRight>
						<Button
							color={darkModeStatus ? 'light' : 'dark'}
							isLight
							icon='Add'
							onClick={() => {
								setEditItem(null);
								setEditPanel(true);
							}}>
							Add New
						</Button>
					</SubHeaderRight>
				</SubHeader>
			</PageWrapper>

			<PitchesCard />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		// @ts-ignore
		...(await serverSideTranslations(locale, ['common', 'menu'])),
	},
});

export default Index;
