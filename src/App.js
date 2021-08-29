import React from 'react';
import './App.css';
import Notes from './Components/Notes'

const App = () => {
  const text = 'hi';
  console.log(text);
  const notesArray = [
    {
      title: 'Hola!',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum auctor purus at volutpat. Etiam quam lectus, porttitor ut tellus id, venenatis aliquam ligula. Maecenas ac nibh feugiat, commodo orci elementum, semper nibh. Nullam at elit mattis, porta justo nec, interdum massa. Fusce ultrices aliquet dictum. Etiam at quam eget nisi condimentum consectetur. Nullam egestas quis orci in iaculis. Morbi sed purus et dolor gravida scelerisque ornare lacinia magna. Donec fermentum justo finibus eros tincidunt semper. Nullam rutrum diam eu finibus cursus. Phasellus in feugiat quam, ac consequat lectus. Nam quis maximus libero. Maecenas id dignissim augue, in commodo ipsum. Mauris tristique commodo mauris, gravida accumsan sapien aliquam at.'
    },
    {
      title: 'Hola2!',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum auctor purus at volutpat. Etiam quam lectus, porttitor ut tellus id, venenatis aliquam ligula. Maecenas ac nibh feugiat, commodo orci elementum, semper nibh. Nullam at elit mattis, porta justo nec, interdum massa. Fusce ultrices aliquet dictum. Etiam at quam eget nisi condimentum consectetur. Nullam egestas quis orci in iaculis. Morbi sed purus et dolor gravida scelerisque ornare lacinia magna. Donec fermentum justo finibus eros tincidunt semper. Nullam rutrum diam eu finibus cursus. Phasellus in feugiat quam, ac consequat lectus. Nam quis maximus libero. Maecenas id dignissim augue, in commodo ipsum. Mauris tristique commodo mauris, gravida accumsan sapien aliquam at.'
    },
    {
      title: 'Hola3!',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum auctor purus at volutpat. Etiam quam lectus, porttitor ut tellus id, venenatis aliquam ligula. Maecenas ac nibh feugiat, commodo orci elementum, semper nibh. Nullam at elit mattis, porta justo nec, interdum massa. Fusce ultrices aliquet dictum. Etiam at quam eget nisi condimentum consectetur. Nullam egestas quis orci in iaculis. Morbi sed purus et dolor gravida scelerisque ornare lacinia magna. Donec fermentum justo finibus eros tincidunt semper. Nullam rutrum diam eu finibus cursus. Phasellus in feugiat quam, ac consequat lectus. Nam quis maximus libero. Maecenas id dignissim augue, in commodo ipsum. Mauris tristique commodo mauris, gravida accumsan sapien aliquam at.'
    },
  ];
  return (
    <div>
      <Notes notesArray={notesArray}/>
    </div>  
  );
};

export default App;
