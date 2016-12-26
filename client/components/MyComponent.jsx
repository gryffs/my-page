import React from 'react';
import SampleTagListContainer from './SampleTagListContainer.jsx';

export default function MyComponent(props) {
  return (
    <div className="my-component">
      <h2>{ props.title }</h2>
      <img src="/images/me.jpg" />
      <h3>Chad M. Griffis:</h3>
      <h3>Software Engineer</h3>
      <h3>Things I'm interested in:</h3>
      <SampleTagListContainer />
    </div>
  );
}

MyComponent.propTypes = {
  title: React.PropTypes.string.isRequired,
}
