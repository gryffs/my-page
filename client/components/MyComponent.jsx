import React from 'react';
import SampleTagListContainer from './SampleTagListContainer.jsx';

export default function MyComponent(props) {
  return (
    <div className="my-component">
      <h2>{ props.title }</h2>
      <h3>This is the original boilerplate using these components:</h3>
      <SampleTagListContainer />
    </div>
  );
}

MyComponent.propTypes = {
  title: React.PropTypes.string.isRequired,
}
