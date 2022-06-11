import type { NextPage } from 'next';
import { ConfigProvider, Calendar } from 'antd';

import plPL from 'antd/lib/locale/pl_PL';

import 'antd/dist/antd.css';

const Home: NextPage = () => {
  return (
    <ConfigProvider locale={plPL}>
      <Calendar/>;
    </ConfigProvider>
  );
};

export default Home;
