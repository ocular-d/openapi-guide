import React from 'react';
import classnames from 'classnames';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const rows = [
	{
		title: "1",
		features: [
			{
				title: "Design",
				imageUrl: 'img/service.svg',
				description: (
					<>
						Create stunning APIs with the focus on functionality, usability and a nice user experience.
					</>
				),
			},
			{
				title: "Style",
				imageUrl: 'img/lead.svg',
				even: true,
				description: (
					<>
						Standards for consistent, stable and extendable APIs.
					</>
				),
			},
			{
				title: "Documentation",
				imageUrl: 'img/marketing.svg',
				description: (
					<>
						Beautiful reference docs, quick-start guides and tutorials are part of awesome APIs.
					</>
				),
			},
		]
	},

];

function Feature({imageUrl, title, description, even}) {
	const imgUrl = useBaseUrl(imageUrl);
	
  return (
    <div className={classnames('col col--4', { 'even-column': even })}>
      {imgUrl && (
        <img className={styles.featureImage} src={imgUrl} alt={title} />
      )}
      <h2>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export const Features = () => {
  return (
		<main>
			{rows && rows.length > 0 && (
				<section className={styles.features}>
					<div className="container">
						{rows.map(row => (
							<div key={row.title} className="row">
								{row.features.map((props) => (
									<Feature key={props.imageUrl} {...props} />
								))}
							</div>
						))}
					</div>
				</section>
			)}
		</main>
  );
};