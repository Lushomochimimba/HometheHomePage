import React, {Component, Fragment} from 'react';




  
  class ImageInput extends React.Component {

    
    // forced async is cancer
    onChange(files) {
      let promises = files.map((file) => promiseFileReader(file).then(event => ({file: file, url: event.target.result})));
      Promise.all(promises).then((data) => {
        this.props.filesChanged(data)
      })
    }
    render() {
      return <input type="file" multiple={true} onChange={(ev) => this.onChange(Array.from(ev.target.files))}/>
    }
  }
  