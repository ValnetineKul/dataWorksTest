import React from 'react';
import Children from "./children/children";
import {connect} from "react-redux";

const Table = (props) => {
  console.log(props.uglyTree, 'this is ugly tree');
  return <div>
    Это было сложновато
    {
      props.uglyTree.Children.map((child, index) =>
        <Children
          children={child.Children}
          value={child.Value}
          color={child.Color}
          verticalSpan={child.VerticalSpan}
          key={index}
          depth={0}
        />)
    }

  </div>
};

const mapStateToProps = (state) => (
  {
    uglyTree: state.tablePage.uglyTree,
  });


export default connect(mapStateToProps, null)(Table);



