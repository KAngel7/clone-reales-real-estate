import * as React from 'react';
import './style.css';

class SmallActive extends React.Component<{}, {}> {

  render() {
    return (
      <nav className="leftNav scrollable">
      <div className="search">
        <span className="searchIcon icon-magnifier" />
        <input type="text" placeholder="Search for houses, apartments..." />
        <div className="clearfix" />
      </div>
      <ul>
        <li><a href="explore.html">
          <span className="navIcon icon-compass" />
          <span className="navLabel">Explore</span>
        </a>
        </li>
        <li><a href="single.html">
          <span className="navIcon icon-home" />
          <span className="navLabel">Single</span>
        </a>
        </li>
        <li><a href="add.html">
          <span className="navIcon icon-plus" />
          <span className="navLabel">New</span>
        </a>
        </li>
        <li className="hasSub">
          <a href="#"><span className="navIcon icon-drop" />
            <span className="navLabel">Colors</span
            ><span className="fa fa-angle-left arrowRight" />
            <span className="badge bg-yellow">5</span>
          </a>
          <ul className="colors">
            <li><a href="#" data-style="css/app-red.css">Red
                  <span className="fa fa-circle-o c-red icon-right" />
            </a>
            </li>
            <li>
              <a href="#" data-style="css/app.css">Green
                    <span className="fa fa-circle-o c-green icon-right" />
              </a
              ></li>
            <li><a href="#" data-style="css/app-blue.css">Blue
                  <span className="fa fa-circle-o c-blue icon-right" />
            </a>
            </li>
            <li><a href="#" data-style="css/app-yellow.css">Yellow
                   <span className="fa fa-circle-o c-yellow icon-right" />
            </a>
            </li>
            <li><a href="#" data-style="css/app-magenta.css">Magenta
                   <span className="fa fa-circle-o c-magenta icon-right" />
            </a>
            </li>
          </ul>
        </li>
        <li className="hasSub">
          <a href="#"><span className="navIcon icon-layers" />
            <span className="navLabel">Elements</span>
            <span className="fa fa-angle-left arrowRight" />
          </a>
          <ul>
            <li><a href="buttons.html">Buttons</a></li>
            <li><a href="icons.html">Icons <span className="badge pull-right bg-yellow">841</span></a></li>
            <li><a href="grid.html">Grid</a></li>
            <li><a href="widgets.html">Widgets</a></li>
            <li><a href="components.html">Components</a></li>
            <li><a href="lists.html">Lists</a></li>
            <li><a href="tables.html">Tables</a></li>
            <li><a href="form.html">Form</a></li>
          </ul>
        </li>
        <li className="hasSub">
          <a href="#">
            <span className="navIcon icon-link" />
            <span className="navLabel">Pages</span>
            <span className="fa fa-angle-left arrowRight" />
          </a>
          <ul>
            <li><a href="signin.html">Sign In</a></li>
            <li><a href="signup.html">Sign Up</a></li>
            <li><a href="profile.html">Profile</a></li>
            <li><a href="index.html">Homepage Slideshow</a></li>
            <li><a href="index-map.html">Homepage Map</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="blog-post.html">Blog Post</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    );
  }
}

export default SmallActive;