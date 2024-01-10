import image13 from "./images/image-13.png";
import image12 from "./images/image-12.png";
import image15 from "./images/image-15.png";
import group904 from "./images/group-904.png";
import instagram from "./images/instagram.svg";
import "./App.css";

function App() {
	return (
		<div id="page">
			<img src={image13} id="image-13" alt="capsule-1" />
			<img src={image12} id="image-12" alt="capsule-2" />
			<img src={image15} id="image-15" alt="capsule-3" />
			<img src={group904} id="group-904" alt="group-904" />
			<div id="footer">
				<div id="MadeBy">Made by GDSC Korea Univ.</div>
				<div id="link">
					<a
						href="https://www.instagram.com/gdsc.koreauniv/"
						id="insta-link"
					>
						<img src={instagram} id="instagram" alt="instagram" />
						GDSC.koreauniv
					</a>
					<div style={{ width: "10px" }}></div>
					<a
						href="https://www.instagram.com/gdscku.project/"
						id="insta-link"
					>
						<img src={instagram} id="instagram" alt="instagram" />
						GDSCKU.project
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
