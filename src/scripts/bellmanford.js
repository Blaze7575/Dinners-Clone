// I want to create the bellman ford algo with the structure of graph as an adjacency list and it will be a little difficult to 
// implement the weight of the edges so have to be carefull of that.


const vertices = 6;
const edges = [[1, 2, 5], [1, 4, 7], [1, 6, 4],
[2, 6, 4], [2, 3, 2], [3, 4, 6],
[3, 5, 7], [4, 5, 3]]

// const graph = {
//     "1": {2:5, 4:7,6:4},
//     "2": {6:4, 1:5,3:2},
//     "3": {2:2, 4:6,5:7},
//     "4": {1:7, 3:4, 5:3},
//     "5": {3:5, 4:3},
//     "6": {1:4, 2:4},
// }


function bellmanFord(edges, numOV, src) {

    let distance = new Array(numOV);
    for (let i = 0; i < numOV; i++) {
        distance[i] = Number.POSITIVE_INFINITY;
    }
    distance[src - 1] = 0;

    for (let n = 0; n < numOV; n++)
        for (let o = 0; o < edges.length; o++) {
            // console.log(o);
            let u = edges[o][0];
            let v = edges[o][1];
            let w = edges[o][2];
            if (distance[v - 1] > distance[u - 1] + w)
                distance[v - 1] = distance[u - 1] + w;

        }


    let tempDist = [...distance];

    for (let o = 0; o<1; o++) {
        // console.log(o);
        let u = edges[o][0];
        let v = edges[o][1];
        let w = edges[o][2];
        if (distance[v - 1] > distance[u - 1] + w)
            distance[v - 1] = distance[u - 1] + w;
    }


    if(!(tempDist.toString() === distance.toString()))    return ["Error! cant perform bellman ford algo as their is a negative edge in the graph"];
    
    console.log("Vertex\tDistance")
    for(let i in distance)
    {
         console.log(i,"\t",distance[i])  
    }
    return "success";
}

let result = bellmanFord(edges, vertices, 1)
console.log(result);
