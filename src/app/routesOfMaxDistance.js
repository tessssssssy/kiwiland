import getDistance from './getDistance';
import pathCounter from './pathCounter';


const routesOfMaxDistance = (graph, start, finish, maxDistance) => {
    const paths = pathCounter(graph, start, finish)
    return paths.filter((path) => getDistance(path) < maxDistance).length;
}

export default routesOfMaxDistance;