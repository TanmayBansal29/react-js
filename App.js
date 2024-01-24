const parent = React.createElement(
    "div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "I am a H1 Tag"),
            React.createElement("h2", {}, "I am a H2 Tag")
        ]
    ),
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "I am a H1 Tag"),
            React.createElement("h2", {}, "I am a H2 Tag")
        ])]
)


// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!!");

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

