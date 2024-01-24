let arr = [
	{ bio: "Digital Explorer 🌐 | Coding Enthusiast 💻 | Coffee Lover ☕", name: "Riya", age: 28, status: "Stranger", img: "https://img.freepik.com/premium-photo/cheerful-indian-woman-with-crossed-hands_416902-2181.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph"},
	{ bio: "Adventurous soul 🌍 | Tech Geek 🚀 | Fitness Freak 💪", name: "Nisa", age: 20, status: "Stranger", img: "https://img.freepik.com/premium-photo/portrait-beautiful-young-woman-native-american-costume_1089669-3175.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph"},
	{ bio: "Passionate about creativity 🎨 | Music is my therapy 🎶 | Aspiring Chef 👩‍🍳", name: "Anjali", age: 15, status: "Stranger", img: "https://img.freepik.com/free-photo/young-cute-woman-cap-glasses-posing-outside-showing-thumbs-up-high-quality-photo_114579-91847.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph"},
	{ bio: "Seeking knowledge every day 📚 | Nature Lover 🍃 | Positive Vibes Only ✨", name: "Naina", age: 28, status: "Stranger", img: "https://img.freepik.com/free-photo/portrait-smiling-beautiful-brunette-woman-cute-dress-red-lips-flowers-background-concept-professional-photossesion-modern-greenhouse_7502-8441.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph"},
	{ bio: "Software Developer by day, Gamer by night 🎮 | Pizza is life 🍕 | Dreamer & Doer 💭", name: "Ashu", age: 20, status: "Stranger", img: "https://img.freepik.com/premium-photo/child-kid-tshirt-template-with-yellow-green-red-orange-grey-tshirt-design-with-white-background_873925-155878.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph"},
	{ bio: "Explorer of life's wonders ✨ | Photography Lover 📷 | Mindfulness Advocate 🧘‍♂️", name: "Anu", age: 15, status: "Stranger", img: "https://img.freepik.com/free-photo/medium-shot-friends-taking-selfie_23-2149037227.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph"},
	{ bio: "Life's too short for boring hair! 💇‍♀️ | Starry-eyed Dreamer ✨ | Comedy Connoisseur 😂", name: "Akash", age: 28, status: "Stranger", img: "https://img.freepik.com/free-photo/handsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph"},
	{ bio: "Spreading kindness like confetti 🎉 | Plant Mom 🪴 | Beach Bum in spirit 🏖️", name: "Mohit", age: 20, status: "Stranger", img: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph"},
	{ bio: "In love with the journey, not just the destination 🗺️ | Tech & Tea addict 💻☕", name: "Jack", age: 15, status: "Stranger", img: "https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph"},
];

function print() {
	let cluster = "";
	arr.forEach((element, index) => {
		cluster += `<div id="card">
    <div id="img">
    <img src="${element.img}" alt="">
    </div>
    <h2>${element.name}</h2>
    <h3 id="${element.status}">${element.status}</h3>
    <p>${element.bio}</p>
    <button class="${element.status == "Stranger" ? "blue" : "red"}" id="${index}">${element.status == "Stranger" ? "Add Friend" : "Remove Friend"}</button>
</div>`;
	});
	document.getElementById("main").innerHTML = cluster;
}
print()

document.querySelector("#main").addEventListener("click", function (e) {
    if (arr[e.target.id].status == "Stranger") {
        arr[e.target.id].status = "Friend";
    } else {
        arr[e.target.id].status = "Stranger";
    }
    print();
});
