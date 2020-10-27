
// calculate the total distance for a route (array of stops)
// must be a direct route, if no route return 

// Graph: AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7
// 

const getDistance = (graph, stops) => {
    let distance = 0;
    let counter = 0;
    for (let i = 0; i < stops.length - 1; i++) {
        graph.pathList[stops[i]].forEach((path) => {
            if (path.node === stops[i + 1]) {
                distance += path.weight;
                counter++
            }
        })
        if (counter <= i) return 'NO SUCH ROUTE';
    }
}

export default getDistance;