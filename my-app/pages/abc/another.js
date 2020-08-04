import Page from '../../components/Page';

export default Page;

export async function getStaticProps(props) {
  console.log('props', props);  // --- @ build: { slug: 'a' } @ runtime: { slug: ['abc', 'a'] }
  return {
    props,
    unstable_revalidate: 1,
  };
}
