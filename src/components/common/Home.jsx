import { useAuth } from "../../hooks/useAuth";

const Home = () => {
    const { userInfo } = useAuth();

    return (
        <>
            {
                userInfo && userInfo.email ?
                <>
                    {userInfo.email} ㅎㅇ
                </>
                :
                <>
                    로그인 해라
                    <input type="file"></input>
                </>
            }
        </>
    );
}
 
export default Home;
