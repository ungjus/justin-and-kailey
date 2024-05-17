import { Helmet } from 'react-helmet';

const APP_NAME = 'Justin-and-Kailey';

const Meta = () => {
  return (
    <Helmet>
      <title>Justin and Kailey</title>
      <meta name="description" content="Everything about Justin and Kailey" />

      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#FEF3C7F"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#0F172AF"
      />

      <link rel="shortcut icon" href="/assets/heart-flat-icon.svg" />
    </Helmet>
  );
};

export default Meta;
