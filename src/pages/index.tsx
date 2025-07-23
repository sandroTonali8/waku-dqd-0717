import Navigator from '../components/Navigator'
import HomeContent from '../components/HomeContent'
import MatchList from '../components/MatchList'

export default async function HomePage() {
  const data = await getData();

  return (
    <>
      <title>{data.title}</title>
      <div className='mb-10 flex justify-center shadow-md'>
        <Navigator/>
      </div>
      <div className='ml-20 mr-20'>
        <MatchList/>
      </div>
    </>
  );
}

const getData = async () => {
  const data = {
    title: 'dongqiudi'
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
