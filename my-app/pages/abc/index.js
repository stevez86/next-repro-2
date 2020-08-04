import Page from '../../components/Page';

export async function getStaticProps(props) {
  console.log('props', props);  // --- @ build: { slug: 'a' } @ runtime: { slug: ['abc', 'a'] }
  return {
    props,
    revalidate: 1,
  };
}
export default Page;