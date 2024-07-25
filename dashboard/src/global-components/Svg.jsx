import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg'

const Svg = ({ name, styles="h-5 w-5 fill-appColor-2" }) => {
  Svg.propTypes = {
    name: PropTypes.string,
    styles: PropTypes.string,
  };

  const [svgSrc, setSvgSrc] = useState(null);

  useEffect(() => {
    import(`../assets/svg/${name}.svg`)
        .then(module => setSvgSrc(module.default))
        .catch(error => console.error('Error loading svg:', error));
    }, [name]);
  
  return (
    <>
      {svgSrc != null && <ReactSVG src={svgSrc} className={styles} />}
    </>
  );
};
export default Svg;