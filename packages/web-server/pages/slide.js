import { Slider, ImageCard } from '@odyssey-cms/carousel';
import withFixedProps from '../components/with-fixed-props';

const dimensions = {
  width:'100vw - 10px'
};

const ImageCardSlide = withFixedProps({
  width:'100vw - 10px',
  height:'100vh - 10px'
})(ImageCard);

export default () => {
  return (
    <div>
      <Slider {...dimensions}>
        <ImageCardSlide src="http://www.angelasidwell.com/images/ghost.jpg"/>
        <a href="https://www.google.com/">
          <ImageCardSlide src="http://www.angelasidwell.com/images/fox.jpg" alt=""/>
        </a>
        <ImageCardSlide src="http://www.angelasidwell.com/images/fox-track.jpg" alt=""/>
        <ImageCardSlide src="http://www.angelasidwell.com/images/crossing-point-detail.jpg" alt=""/>
      </Slider>
      <p>hi there</p>
    </div>
  )
}