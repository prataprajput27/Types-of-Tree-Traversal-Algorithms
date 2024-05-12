import React from "react";
import algo from "../src/images/algo.gif";
import inorder from "../src/images/inorder.gif";
import preorder from "../src/images/preorder.gif";
import postorder from "../src/images/postorder.gif";
import level from "../src/images/level.gif";

const Brief = () => {
  return (
    <>
      <div className="container">
        <h1>Types of Tree Traversal Algorithms</h1>
      </div>

      <div className="img-div">
        <img className="algo" src={algo} alt="algo" />
        <h3>DFS & BFS Algorithms</h3>
      </div>

      <div className="container">
        <p>
          <span class="first-letter">If</span> you are a pro programmer or
          working in the Software Industry for years then this topic may seem to
          you very trivial. But the use-cases of such algorithms and the
          different variants of that may create confusion in beginners mind.
          Therefore, I attempted to put all you need to know about Tree
          Traversal in this single article (with animations).
        </p>
        <p className="quotes">
          “<strong>Animation</strong> can explain whatever the mind of man can
          conceive. This facility makes it the most versatile and explicit means
          of communication yet devised for quick mass appreciation.”―
          <strong> Walt Disney</strong>
        </p>

        <p>
          This article covers more than just the ideas underlying these
          algorithms; you can also use the same input to obtain the required
          outcomes for each traversal algorithm.
        </p>

        <h2>Timeline</h2>

        <a href="#tree" className="list">
          1. Tree Data Structure
        </a>
        <a href="#introduction" className="list">
          2. Tree Traversal - Introduction
        </a>
        <a href="#inorder" className="list">
          3. Inorder Traversal
        </a>
        <a href="#preorder" className="list">
          4. Preorder Traversal
        </a>
        <a href="#postorder" className="list">
          5. Postorder Traversal
        </a>
        <a href="#level" className="list">
          6. Level Order Traversal
        </a>
        <a href="#implementation" className="list">
          7. Implementation
        </a>

        <span className="dots"></span>

        <h2 id="tree">1. Tree Data Structure</h2>
        <p>
          Before jumping into the tree traversal algorithms, let’s define Tree
          as a data structure first. That will help you to grasp the concepts in
          a meaningful way.
        </p>
        <p className="quotes">
          <strong>Tree</strong> is a hierarchical data structure which stores
          the information naturally in the form of hierarchy unlike linear data
          structures like, Linked List, Stack, etc. A tree contains nodes(data)
          and connections(edges) which should not form a cycle.
        </p>
        <p>
          <div className="container-definition">
            Following are the few frequently used terminologies for Tree data
            structure.
          </div>

          <div className="container-definition">
            <strong>Node — </strong> A node is a structure which may contain a
            value or condition, or represent a separate data structure.
          </div>
          <div className="container-definition">
            <strong>Root —</strong> The top node in a tree, the prime ancestor.
          </div>
          <div className="container-definition">
            <strong>Child —</strong> A node directly connected to another node
            when moving away from the root, an immediate descendant.
          </div>
          <div className="container-definition">
            <strong>Parent —</strong> The converse notion of a child, an
            immediate ancestor.
          </div>
          <div className="container-definition">
            <strong>Leaf —</strong> A node with no children.
          </div>
          <div className="container-definition">
            <strong>Internal node —</strong> A node with at least one child.
          </div>
          <div className="container-definition">
            <strong>Edge —</strong> The connection between one node and another.
          </div>
          <div className="container-definition">
            <strong>Depth —</strong> The distance between a node and the root.
          </div>
          <div className="container-definition">
            <strong>Level —</strong> the number of edges between a node and the
            root + 1
          </div>
          <div className="container-definition">
            <strong>Height —</strong> The number of edges on the longest path
            between a node and a descendant leaf.
          </div>
          <div className="container-definition">
            <strong>Breadth —</strong> The number of leaves.
          </div>
          <div className="container-definition">
            <strong> Sub Tree — </strong> A tree is a tree consisting of a node
            in T and all of its descendants in T.
          </div>
          <div className="container-definition">
            <strong>Binary Tree —</strong> is a tree data structure in which
            each node has at most two children, which are referred to as the
            left child and the right child.
          </div>
          <div className="container-definition">
            <strong>Binary Search Tree —</strong> is a special type of binary
            tree which has the following properties.
          </div>

          <p>
            1. The left subtree of a node contains only nodes with keys lesser
            than the node’s key.
          </p>
          <p>
            2. The right subtree of a node contains only nodes with keys greater
            than the node’s key.
          </p>
          <p>
            3. The left and right subtree each must also be a binary search
            tree.
          </p>
        </p>

        <span className="dots"></span>

        <h2 id="introduction">2. Tree Traversal - Introduction</h2>
        <p className="quotes">
          “In computer science, tree traversal (also known as tree search) is a
          form of graph traversal and refers to the process of visiting
          (checking and/or updating) each node in a tree data structure, exactly
          once. Such traversals are classified by the order in which the nodes
          are visited.”
        </p>

        <p>
          The definition of Wikipedia is self-explanatory to understand what
          Tree Traversal mean. But I want to elaborate more about the last line
          of the definition, which will help us to understand the types of Tree
          Traversal and how they are different.
        </p>
        <p>
          Tree Traversal Algorithms can be classified broadly in the following
          two categories by the order in which the nodes are visited:
        </p>

        <div className="container-sub">
          <p>
            <strong>Depth-First Search (DFS) Algorithm:</strong> It starts with
            the root node and first visits all nodes of one branch as deep as
            possible of the chosen Node and before backtracking, it visits all
            other branches in a similar fashion. There are three sub-types under
            this, which we will cover in this article.
          </p>
          <p>
            <strong>Breadth-First Search (BFS) Algorithm:</strong> It also
            starts from the root node and visits all nodes of current depth
            before moving to the next depth in the tree. We will cover one
            algorithm of BFS type in the upcoming section.
          </p>
        </div>

        <span className="dots"></span>

        <h2 id="inorder">3. Inorder Traversal</h2>
        <p>
          Inorder Traversal is the one the most used variant of DFS(Depth First
          Search) Traversal of the tree.
        </p>
        <p>
          As DFS suggests, we will first focus on the depth of the chosen Node
          and then go to the breadth at that level. Therefore, we will start
          from the root node of the tree and go deeper-and-deeper into the left
          subtree with recursive manner.
        </p>
        <p>
          When we will reach to the left-most node with the above steps, then we
          will visit that current node and go to the left-most node of its right
          subtree(if exists).
        </p>
        <p>
          Same steps should be followed in a recursive manner to complete the
          inorder traversal. Order of those steps will be like (in recursive
          function)…
        </p>

        <div className="order">1. Go to left-subtree</div>
        <div className="order">2. Visit Node</div>
        <div className="order">3. Go to right subtree</div>

        <div className="img-div">
          <img className="inorder" src={inorder} alt="inorder" />
          <h3>Inorder Traversal</h3>
        </div>

        <span className="dots"></span>

        <h2 id="preorder">4. Preorder Traversal</h2>
        <p>
          Preorder Traversal is another variant of DFS. Where atomic operations
          in a recursive function, are as same as Inorder traversal but with a
          different order.
        </p>
        <p>
          Here, we visit the current node first and then goes to the left
          sub-tree. After covering every node of the left sub-tree, we will move
          towards the right sub-tree and visit in a similar fashion.
        </p>
        <p>Order of the steps will be like…</p>

        <div className="order">1. Visit Node </div>
        <div className="order">2. Go to left-subtree</div>
        <div className="order">3. Go to right subtree</div>

        <div className="img-div">
          <img className="preorder" src={preorder} alt="preorder" />
          <h3>Preorder Traversal</h3>
        </div>

        <span className="dots"></span>

        <h2 id="postorder">5. Postorder Traversal</h2>
        <p>
          Similar goes with Postorder Traversal. Where we visit the left subtree
          and the right subtree before visiting the current node in recursion.
        </p>
        <p>So, the sequence of the steps will be…</p>

        <div className="order">1. Go to left-subtree </div>
        <div className="order">2. Go to right-subtree</div>
        <div className="order">3. Visit Node</div>

        <div className="img-div">
          <img className="postorder" src={postorder} alt="postorder" />
          <h3>Postorder Traversal</h3>
        </div>

        <span className="dots"></span>

        <h2 id="level">6. Level Order Traversal</h2>
        <p>
          This is a different traversal than what we have covered above. Level
          order traversal follows BFS(Breadth-First Search) to visit/modify
          every node of the tree.
        </p>
        <p>
          As BFS suggests, the breadth of the tree takes priority first and then
          move to depth. In simple words, we will visit all the nodes present at
          the same level one-by-one from left to right and then move to the next
          level to visit all the nodes of that level.
        </p>
        <div className="img-div">
          <img className="level" src={level} alt="level" />
          <h3>Level Order Traversal</h3>
        </div>
        <span className="dots"></span>

        <h2 id="implementation">7. Implementation</h2>
        <p>
          You can enter any values you want to get all possible traversal types
          that correspond to your input.
        </p>
      </div>
    </>
  );
};

export default Brief;
