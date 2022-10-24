const reactContentRoot = document.getElementById("root")
const firstelement =React.createElement("ul",null,[
React.createElement("li",null,"APPLE"),
React.createElement("li",null,"MANGO"),
React.createElement("li",null,"AVOCADO"),
React.createElement("li",null,"ORANGE"),
])


ReactDOM.render(firstelement, reactContentRoot)