
import './slider.css';

.slider {
    width: 100%;
    height: 400px;
    overflow: hidden;
  }
  
  .slide {
    width: 100%;
    height: 400px;
    background-position: center center;
    background-size: cover;
    position: absolute;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
  
  .slide.active {
    opacity: 1;
  }
  