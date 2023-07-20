import { NextPage } from "next";

interface MyPageProps {
  pathname: string;
}

const MyPage: NextPage<MyPageProps> = ({ pathname }) => {
  return <div>Current path: {pathname}</div>;
};

export default MyPage;
