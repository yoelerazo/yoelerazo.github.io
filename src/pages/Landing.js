import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import Container from "shared/layout/Container";

export default function LandingPage() {
	const { t, i18n } = useTranslation();

	return (
		<Container>
			<h1>{t('Welcome')}</h1>
		</Container>
	);
}