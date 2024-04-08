
// const graph = {
//     "1": {"2":0,"3":5}
// }



const vertices = [0, 1, 2, 3, 4];
const vCycled = [...vertices];
const distance = {};
const edges = {
    "0,1": 5,
    "0,4": 8,
    "0,2": 3,
    "1,4": 7,
    "1,3": 4,
    "2,3": 6,
    "3,4": 5,
};
const neighbour = { "0": [1, 4, 2], "1": [0, 3, 4], "2": [0, 3], "3": [1, 2, 4], "4": [0, 1, 3] }
const source = 1;
let visited = [];


vertices.forEach(elem => {
    distance[`${elem}`] = -1;
})

distance[source] = 0;

if (visited != [])
    visited = [];


while (vCycled.length != 0) {
    let u = mindistance(vCycled, distance)[0];
    visited.push(u);
    neighbour[u].forEach((elem) => {
        if (distance[elem] > distance[u] + w(u, elem) || distance[elem] < 0)
            distance[elem] = distance[u] + w(u, elem);
    })
}
function mindistance(vCycled, distance) {
    let min = 90;
    let index = 0;
    vCycled.forEach((elem) => {
        if (min > distance[elem] && !(distance[elem] < 0)) {
            min = distance[elem]
            index = vCycled.indexOf(elem);
        }
    })
    return vCycled.splice(index, 1);
}

function w(u, v) {
    if (edges[`${u},${v}`] != undefined) return edges[`${u},${v}`];
    else if (edges[`${v},${u}`] != undefined) return edges[`${v},${u}`];
}

console.log("Vertex\tDistance")
for (let elem in distance) {
    console.log(`${elem}\t${distance[elem]}`);
}