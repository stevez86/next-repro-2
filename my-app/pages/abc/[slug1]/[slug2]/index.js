import Page from '../../../../components/Page';

// at pages/abc/[slug]/index.js
export async function getStaticPaths() {
  const paths = [{ params: { slug1: 'a', slug2: 'c' } }, { params: { slug1: 'b', slug2: 'd' } }];

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(props) {
  console.log('props', props);  // --- @ build: { slug: 'a' } @ runtime: { slug: ['abc', 'a'] }
  const { params } = props;
  if (Object.keys(params).some(key => Array.isArray(params[key]))) {
    throw new Error('array')
  }
  return {
    props,
    unstable_revalidate: 1,
  };
}

export default Page;