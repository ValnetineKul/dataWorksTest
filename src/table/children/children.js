import React from 'react';

const Children = (props) => {
  console.log(props, 9090909090);

  return <div
    style={{
      paddingLeft: props.depth * 10,
      background: props.color,
      height: `${props.verticalSpan > 1 ? 20 : 60}px`,
      border: 'solid black 2px'
    }}
  >
    Value: {props.value}
    {
      props.children && props.children.length > 0 && props.children.map((child, index) =>
        <Children
          children={child.Children}
          value={child.Value}
          color={child.Color}
          key={index}
          depth={props.depth + 1}
        />)
    }

  </div>
};

export default Children;