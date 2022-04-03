import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

function Heder(props) {
    return (
        <div>
            <h1>I am a header</h1>
          
      <nav>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/Friends">Friends</CustomLink>
      <CustomLink to="/Posts">Posts</CustomLink>
      </nav>
        </div>
    );
}

export default Heder;