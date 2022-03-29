import sanityClient from '@sanity/client'


const options = {
  projectId: 'erxomzdl',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: process.env.REACT_APP_SANITY_TOKEN,
};

const client = sanityClient({
  ...options,
  useCdn: process.env.NODE_ENV === 'production',
});

export default client;
