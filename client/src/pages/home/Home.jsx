import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = ({ type }) => {
	const [lists, setLists] = useState([]);
	const [genre, setGenre] = useState(null);
  
	useEffect(() => {
	  const getRandomLists = async () => {
		try {
		  axios.defaults.baseURL = 'http://localhost:8800/api/';
		  const res = await axios.get(
			`lists${type ? "?type=" + encodeURIComponent(type) : ""}${genre ? "&genre=" + encodeURIComponent(genre) : ""}`, {
			  headers: {
				token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2ZmMGFiNWQyNjg0OGQwYThjMDMxMSIsImlhdCI6MTcwOTc2MzA4NCwiZXhwIjoxNzEwMTk1MDg0fQ.JeiRRChpJYbsNvuif5YxYZ2U8ezmTNS44QXj1q-zhks"
			  }
			}
		  );
		  console.log(res.data);
		  setLists(res.data);
		} catch (err) {
		  console.log(err);
		}
	  };
	  getRandomLists();
	}, [type, genre]);
  
	return (
	  <div className="home">
		<Navbar />
		<Featured type={type} />
		{lists.length > 0 ? (
		  lists.map((list) => <List key={list.id} list={list} />)
		) : (
		  <p>Loading...</p>
		)}
	  </div>
	);
  };
  
  export default Home;
