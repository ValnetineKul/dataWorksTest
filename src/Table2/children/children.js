import React from 'react';
import styles from '../Parent.module.css'

class Children extends React.Component {

    render() {

        console.log(this.props, 9090909090);
        return (
            <div
                className={styles.table}
                style={{
                    background: this.props.color,
                    height: this.props.verticalSpan <= 1 ? 50 : 120,
                    border: 'solid black 1px',
                    width: this.props.children.length <= 1 ? 50 : 120,
                    textAlign: "center",
                }}
            >
                {this.props.value}
                {
                    this.props.children && this.props.children.length > 0 && this.props.children.map((child, index) =>
                        <div
                            key={index}
                            style={{
                                position: 'relative',
                                top: 60 * this.props.verticalSpan,
                                left: -20,
                            }}
                        >
                            <Children
                                children={child.Children}
                                value={child.Value}
                                color={child.Color}
                                idDepth={[...this.props.idDepth, index]}
                                verticalSpan={child.VerticalSpan}
                            />

                        </div>)
                }
            </div>
        )
    }
}

export default Children;