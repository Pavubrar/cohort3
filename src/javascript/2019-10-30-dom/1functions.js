const functions = {
    test: () => {
        console.log("Hello from functions test");
    },
    count: 0,
    creatCard: (node) => {
        functions.count++;
        let newDiv = document.createElement("div");
        newDiv.className = "div1";
        newDiv.setAttribute("count", functions.count);
        newDiv.textContent = `card # ${functions.count}`;
        node.appendChild(newDiv);

        return newDiv;
    },
    addCard: () => {

        return;
    }
};

export default functions;