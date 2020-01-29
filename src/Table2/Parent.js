import React from 'react';
import Children from "./children/children";
import styles from './Parent.module.css'
import {connect} from "react-redux";

class Parent extends React.Component {

    state = {
        selectedDivs: {}
    };


    render() {
        console.log(this.props.uglyTree, 'this is ugly tree');


        return (
            <div
                className={styles.table}
                style={{
                    height: this.props.tree.VerticalSpan <= 1 ? 50 : 120,
                    width: this.props.tree.length <= 1 ? 50 : 120,
                    gridTemplateColumns: `repeat(${this.props.tree.length}, auto)`,

                }}
            >
                {
                    this.props.tree.map((child, index) =>
                        <div
                            key={index}
                        >
                            <Children
                                onChange={(selectedDivs) => this.setState({...this.state, selectedDivs: selectedDivs})}
                                selectedDivs={this.state.selectedDivs}
                                children={child.Children}
                                value={child.Value}
                                color={child.Color}
                                verticalSpan={child.VerticalSpan}
                                idDepth={[index]}
                                isOpen={false}
                            />
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        tree: state.tablePage.uglyTree.Children,
    });


export default connect(mapStateToProps, null)(Parent);



