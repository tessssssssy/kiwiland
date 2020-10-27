import WeightedGraph from './app/WeightedGraph.js';
import getDistance from './app/getDistance.js';
import shortestPath from './app/shortestPath.js';

const makeGraph = (text) => {
    // takes the result of the text file and converts it into a graph
	let arr = text.split(', ');
	console.log(arr);
    const graph = new WeightedGraph();
    arr.forEach((path) => {
		console.log(path)
        graph.addVertex(path[0]);
        graph.addVertex(path[1]);
        graph.addEdge(path[0], path[1], parseInt(path[2]));
    })
    return graph;
};


document.querySelector("#read-button").addEventListener('click', function() {
	if(document.querySelector("#file-input").files.length == 0) {
		alert('Error : No file selected');
		return;
    }

	let file = document.querySelector("#file-input").files[0];
	let reader = new FileReader();
	
	reader.addEventListener('load', (e) => {
	   // contents of the file
        let text = e.target.result;
		const graph = makeGraph(text);
		localStorage.setItem('graph', JSON.stringify(graph))
		console.log(localStorage);
		// document.querySelector("#file-contents").textContent = text;
	});

	// event fired when file reading failed
	reader.addEventListener('error', () => {
	    alert('Error : Failed to read file');
	});

	// read file as text file
	reader.readAsText(file);
});


let routeButton = document.querySelector("#route-button");
let routeDistance = document.querySelector("#route-distance");
let routeInput = document.querySelector("#route-input");
	// event fired when file reading finished
	routeButton.addEventListener('click', () => {
		let graph = JSON.parse(localStorage.getItem('graph'));
		let route = routeInput.value.split(',');
		routeDistance.textContent = `Route: distance: ${getDistance(graph, route)}`
})

let spButton = document.querySelector("#shortest-distance-button");
let startInput = document.querySelector("#start-input");
let finishInput = document.querySelector("#finish-input");
let spDistance = document.querySelector("#shortest-path-distance");

spButton.addEventListener('click', () => {
	let graph = JSON.parse(localStorage.getItem('graph'));
	let start = startInput.value;
	let finish = finishInput.value;
	spDistance.textContent = `Shortest Path Distance: ${shortestPath(graph, start, finish)}`;
})