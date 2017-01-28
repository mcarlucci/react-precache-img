import { PropTypes } from 'react';

const PreCacheImg = (props) => {
  const precache = (images) => {
    console.log(images)
    let image;
    for (let i = 0, len = images.length; i < len; i += 1) {
      image = new Image(); // eslint-disable-line no-undef
      image.src = images[i];
    }
    return false;
  };

  return precache(props.images);
};

PreCacheImg.propTypes = {
  images: PropTypes.arrayOf.isRequired,
};

export default PreCacheImg;
