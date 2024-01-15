import image13 from "./images/image-13.png";
import image12 from "./images/image-12.png";
import image15 from "./images/image-15.png";
import instagram from "./images/instagram.svg";
import ellipse from "./images/ellipse.png";
import "./App.css";

function App() {
	return (
		<div id="page">
			<img src={image13} id="image-13" alt="capsule-1" />
			<img src={image12} id="image-12" alt="capsule-2" />
			<img src={image15} id="image-15" alt="capsule-3" />
			<div id="ellipse-container">
				<img src={ellipse} id="ellipse" alt="ellipse" />
				<div id="content">
					<div id="description">1년 뒤 나에게 보내는 선물,</div>
					<div id="title">
						TIME
						<br />
						CAPSULE
					</div>
					<div id="date">2024.01.17</div>
					<div id="coming-soon">
						COMING
						<br />
						SOON
					</div>
				</div>
			</div>
			<div id="footer">
				<div id="MadeBy">Made by GDSC Korea Univ.</div>
				<div id="link">
					<a
						href="https://www.instagram.com/gdsc.koreauniv/"
						id="insta-link"
					>
						<img src={instagram} id="instagram" alt="instagram" />
						<div style={{ width: "2px" }}></div>
						GDSC.koreauniv
					</a>
					<div style={{ width: "10px" }}></div>
					<a
						href="https://www.instagram.com/gdscku.project/"
						id="insta-link"
					>
						<img src={instagram} id="instagram" alt="instagram" />
						<div style={{ width: "2px" }}></div>
						GDSCKU.project
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
