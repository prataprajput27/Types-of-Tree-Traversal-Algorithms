import React, { useState } from "react";
import BinaryTree from "./BinaryTree";
import "./styles.css";
import Brief from "./Brief";

const TreeTraversalComponent = () => {
  const [values, setValues] = useState("");
  const [preOrderTraversal, setPreOrderTraversal] = useState([]);
  const [inOrderTraversal, setInOrderTraversal] = useState([]);
  const [postOrderTraversal, setPostOrderTraversal] = useState([]);
  const [levelOrderTraversal, setLevelOrderTraversal] = useState([]);
  
  const handleInputChange = (event) => {
    setValues(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const binaryTree = new BinaryTree();
    const valuesArray = values.split(",");

    valuesArray.forEach((value) => {
      binaryTree.addNode(parseInt(value.trim()));
    });

    const preOrder = [];
    const inOrder = [];
    const postOrder = [];
    binaryTree.preOrder(binaryTree.root, preOrder);
    binaryTree.inOrder(binaryTree.root, inOrder);
    binaryTree.postOrder(binaryTree.root, postOrder);

    setPreOrderTraversal(preOrder);
    setInOrderTraversal(inOrder);
    setPostOrderTraversal(postOrder);
    setLevelOrderTraversal(binaryTree.levelOrder());
  };

  return (
    <div>
      <div className="Brief">
        <Brief />
      </div>
      <div>
        <div className="enter-val">
          <form onSubmit={handleFormSubmit} className="form">
            <input
              type="text"
              value={values}
              onChange={handleInputChange}
              placeholder="ENTER NODE VALUES"
            />
            <button className="submit" type="submit">
              SUBMIT
            </button>
          </form>
        </div>

        <div className="traversal-results">
          <div>
            <h2>In-order Traversal:</h2>
            <ul>
              {inOrderTraversal.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Pre-order Traversal:</h2>
            <ul>
              {preOrderTraversal.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Post-order Traversal:</h2>
            <ul>
              {postOrderTraversal.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Level-order Traversal:</h2>
            <ul>
              {levelOrderTraversal.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeTraversalComponent;
