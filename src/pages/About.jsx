import React from 'react'
import {connect} from 'react-redux';
import {add, del} from '../action/numAction';
 
 function About(props) {
	 const { add, del, item } = props
     console.log('props',props)
	 const test = () => { add(item) }
	 const test1 = () => { del(item) }
		return (
			<div>
             <h3>我是About的内容</h3>
			 <div>{item}</div>
			 <button onClick={() => test()}>
                增加
            </button>
            <button onClick={() => test1()}>
                减少
            </button>
			</div>
		)
}
 
const mapStateToProps = (state) => {
    return { item: state.num }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        add(data){ dispatch(add(data)); },
        del(data){ dispatch(del(data)); }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(About);