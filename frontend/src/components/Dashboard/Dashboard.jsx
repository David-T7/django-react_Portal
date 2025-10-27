import { useEffect , useState} from "react"
const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;
import AxiosInstance from "../../AxiosInstance";
const Dashboard = () => {
  const [responseData, setResponseData] = useState("No data yet");
  useEffect(() => {
    console.log('Backend Base URL:', baseURL);
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get('/protected/');
        console.log('Dashboard data fetched successfully:', response.data);
        setResponseData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
  
  
    }  
    fetchData();
  }, []);
  return (
    <>
    <div className='text-light'>Dashboard</div>
    <div className="container text-light mt-4">
      <h3>Protected Data from Backend:</h3>
      <pre>{JSON.stringify(responseData, null, 2)}</pre>
    </div>
    </>
  )
}

export default Dashboard