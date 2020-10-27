import WeightedGraph from './app/WeightedGraph.js';

const makeGraph = (text) => {
    // takes the result of the text file and converts it into a graph
	let arr = text.split(', ');
	console.log(arr);
    const graph = new WeightedGraph();
    arr.forEach((path) => {
        graph.addVertex(path[0]);
        graph.addVertex(path[2]);
        graph.addEdge(path[0], path[2], parseInt(path[1]));
    })
    return graph;
};


document.querySelector("#read-button").addEventListener('click', function() {
	if(document.querySelector("#file-input").files.length == 0) {
		alert('Error : No file selected');
		return;
    }

	// file selected by user
	let file = document.querySelector("#file-input").files[0];

	// new FileReader object
	let reader = new FileReader();

	// event fired when file reading finished
	reader.addEventListener('load', function(e) {
	   // contents of the file
        let text = e.target.result;
        const graph = makeGraph(text);
        console.log(graph.pathList);
	    document.querySelector("#file-contents").textContent = text;
	});

	// event fired when file reading failed
	reader.addEventListener('error', function() {
	    alert('Error : Failed to read file');
	});

	// read file as text file
	reader.readAsText(file);
});


