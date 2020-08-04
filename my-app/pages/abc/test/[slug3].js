import Page from '../../../components/Page';

// at pages/abc/[slug]/index.js
export async function getStaticPaths() {
  const paths = [{ params: { slug3: 'e' } }, { params: { slug3: 'f' } }];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props) {
  console.log('props', props);  // --- @ build: { slug: 'a' } @ runtime: { slug: ['abc', 'a'] }
  return {
    props,
    unstable_revalidate: 1,
  };
}

export default Page;