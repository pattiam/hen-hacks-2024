class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    traverseForward() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    traverseBackward() {
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }

    find(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    before(data) {
        const nodes = [];
        let current = this.head;
        while (current && current.data !== data) {
            nodes.push(current.data);
            current = current.next;
        }
        return nodes;
    }

    after(data) {
        const nodes = [];
        let current = this.find(data);
        if (current) {
            current = current.next;
            while (current) {
                nodes.push(current.data);
                current = current.next;
            }
        }
        return nodes;
    }
}

const coursesk = ["counting", "shapes", "patterns"];
const course1 = ["adding", "subtracting", "place value"];

const doublyLinkedList = new DoublyLinkedList();

// Adding elements from coursesk
coursesk.forEach(course => {
    doublyLinkedList.add(course);
});

// Adding elements from course1
course1.forEach(course => {
    doublyLinkedList.add(course);
});

// Your existing JavaScript code for doubly linked list goes here

// Function to populate dropdown menus
function populateDropdowns(selectedNode) {
    const beforeDropdown = document.getElementById("beforeDropdown");
    const currentDropdown = document.getElementById("currentDropdown");
    const afterDropdown = document.getElementById("afterDropdown");

    // Clear existing options
    beforeDropdown.innerHTML = "<option value=''>-- Before --</option>";
    currentDropdown.innerHTML = "<option value=''>-- Current --</option>";
    afterDropdown.innerHTML = "<option value=''>-- After --</option>";

    // Populate before dropdown
    let nodesBefore = doublyLinkedList.before(selectedNode.data);
    nodesBefore.forEach(node => {
        const option = document.createElement("option");
        option.value = node;
        option.textContent = node;
        beforeDropdown.appendChild(option);
    });

    // Populate current dropdown
    const currentOption = document.createElement("option");
    currentOption.value = selectedNode.data;
    currentOption.textContent = selectedNode.data;
    currentDropdown.appendChild(currentOption);

    // Populate after dropdown
    let nodesAfter = doublyLinkedList.after(selectedNode.data);
    nodesAfter.forEach(node => {
        const option = document.createElement("option");
        option.value = node;
        option.textContent = node;
        afterDropdown.appendChild(option);
    });
}

// Example: When a node is selected (change this according to your UI logic)
const selectedNodeData = "patterns"; // Example selected node data
const selectedNode = doublyLinkedList.find(selectedNodeData);
if (selectedNode) {
    populateDropdowns(selectedNode);
}
