import React from "react";
import PostCard from "../PostCard/PostCard";
import './CreatePost.css';
class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: '',
      gameTitle: '',
      selectedImageFile: null,
      overlay: false
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOverlay = this.handleOverlay.bind(this);
  }

  handleOverlay(event){
    this.setState(
      {
        overlay: !this.state.overlay
      }
    );
  }

  handleChange(event) {
      const target = event.target;
      const value = target.value;
      const object = target.name;
      this.setState(
        {
          [object]: object === "selectedImageFile" ? URL.createObjectURL(event.target.files[0]) : value,
        }
      );
    }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.postTitle);
    event.preventDefault();
  }

  previewPost = () => {
      if (this.state.selectedImageFile) {
        console.log("uploaded");
        return (
          <div className="previewPost">
            <PostCard title={this.state.postTitle} gameTitle={this.state.gameTitle} url={this.state.selectedImageFile} />
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };

  render() {
    if(this.state.overlay){
      return (
        <div>
          <div className="CreatePost">
            <form onSubmit={this.handleSubmit}>
            <button onClick={this.handleOverlay} className="exitButton" type="button">X</button>
              <label>
                Post Title:
                <input name="postTitle" type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <label>
                Game Title:
                <input name="gameTitle" type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <label>
                Image Upload:
                <input name="selectedImageFile" type="file" value={this.state.value} accept="image/*" onChange={this.handleChange} />
              </label>
              {this.previewPost()}
              <div className="CreatePostSubmit">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
          <div className="full-size" onClick={this.handleOverlay}>
          </div>
          <div className="createPostButton">
            <button onClick={this.handleOverlay}>Click Me!</button>
          </div>
        </div>
      )
    }else{
      return (
        <div className="createPostButton">
          <button onClick={this.handleOverlay} type="button">Click Me!</button>
        </div>
      );
    }
  }
}

export default CreatePost;
