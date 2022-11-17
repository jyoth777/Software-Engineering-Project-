//import {ReactComponent as Logo} from './logo.svg';

import { useState, useRef, useEffect } from 'react';
import React, { Component } from 'react';


class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight, time) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight, time });
    }
    Dijkstra(start, finish, component) {
        const nodes = new PriorityQueue();
        const distances = {};
        const times = {}
        const previous = {};
        let path = []; //to return at end
        let smallest;
        var sum = 0;

        //build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                times[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                times[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let candidate2 = times[smallest] + nextNode.time;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        times[nextNeighbor] = candidate2
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                        sum = sum + candidate;
                    }
                }
            }
        }
        component.setState({ distance: distances[finish] })
        component.setState({ start:"test2" })
        console.log(distances[finish])

        return path.concat(smallest).reverse();
    }
}

class Activity extends Component {

    constructor(props) {
        super(props);
        this.state = { distance: 0, start: "test" }
        this.handlesubmit = function handlesubmit(e) {
            e.preventDefault();

        }

        this.Dijkstr = this.Dijkstr.bind(this);
        this.graph = new WeightedGraph();
        this.graph.addVertex("Banashankari");
        this.graph.addVertex("Jayanagar");
        this.graph.addVertex("JP Nagar");
        this.graph.addVertex("Bommanahalli");
        this.graph.addVertex("E-city");

        //Distance
        this.graph.addEdge("Banashankari", "Jayanagar", 5, 1);
        this.graph.addEdge("Jayanagar", "Banashankari", 5, 5);
        this.graph.addEdge("Jayanagar", "JP Nagar", 6, 3);
        this.graph.addEdge("JP Nagar", "Jayanagar", 6, 2);
        this.graph.addEdge("JP Nagar", "Banashankari", 10, 10);
        this.graph.addEdge("Banashankari", "JP Nagar", 10, 9);
        this.graph.addEdge("JP Nagar", "E-city", 6, 5);
        this.graph.addEdge("E-city", "JP Nagar", 6, 6);
        this.graph.addEdge("Jayanagar", "E-city", 3, 1);
        this.graph.addEdge("E-city", "Jayanagar", 3, 3);
        this.graph.addEdge("E-city", "Bommanahalli", 9, 6);
        this.graph.addEdge("Bommanahalli", "E-city", 9, 2);
        this.graph.addEdge("Bommanahalli", "Jayanagar", 1, 3);
        this.graph.addEdge("Jayanagar", "Bommanahalli", 1, 1);

    }










    //EXAMPLES=====================================================================

    Dijkstr(source, destination, comp) {

        console.log(this.graph.Dijkstra(source, destination, comp))

    }

    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidMount() {

        this.Dijkstr("Jayanagar", "E-city", this);
        console.log(this.state["start"])
        this.interval = setInterval(() => this.Dijkstr("Jayanagar", "E-city", this), 3000);


    }




    render() {
        return (
            <div className="App" >
                <div className="App-header">
                    <h5>REWARD PTS</h5>
                    <h5>:0</h5>&nbsp;&nbsp;&nbsp;&nbsp;
                    <h5 id="profile">PROFILE</h5>&nbsp;&nbsp;
                    <a href="https://react.school" >
                        <button className="size" style={{ backgroundColor: "blue", color: "white" }}>LOGOUT</button>
                    </a>

                </div>
                <div className="right">
                    <h2>DISTANCE: {this.state["distance"]} KM</h2>
                    <h2>TIME: {this.state["start"]} Mins</h2>
                </div>
                <div className="down">
                    <a href="/Payment" >
                        <button className="size" style={{ backgroundColor: "blue", color: "white" }}>PAYMENT</button>
                    </a>
                    <br />
                    <br />
                    <a href="https://react.school" >
                        <button className="size" onSubmit={this.handlesubmit} style={{ backgroundColor: "blue", color: "white" }}>CANCEL</button>
                    </a>
                </div>
            </div>
        );
    }
}
export default Activity;