import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
const Home = () => {
	const [lists, setLists] = useState([]);

	useEffect(()=>{
		const getRandomLists = async () =>{
			try{

			}catch(err){
				console.log(err)
			}
		}
	})
	return (
		<div className="home">
			<Navbar />
			<Featured type="movie" />

			<List />
			<List />
			<List />
			<List />
			<List />
		</div>
	);
};

export default Home;
