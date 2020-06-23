import React from 'react';
import { connect } from 'react-redux';
import { updateName } from '../actions';

const About = ({ nama, setName }) => (
  <div>
    <h1>Hello kamu, { nama }</h1>
    <input 
      type="text"
      value={ nama }
      onChange={(e) => { setName(e.target.value) }}
    />
  </div>
);

const mapStateToProps = state => {
  return {
    nama: state.name
  }
}

const mapDispatchToProps = dispatch => ({
  setName: (value) => { dispatch(updateName(value)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(About);