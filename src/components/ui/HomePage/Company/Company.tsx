import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import brand from '../../../../assets/brand/brand.png'
import brand2 from '../../../../assets/brand/brand2.png'
import brand3 from '../../../../assets/brand/brand3.png'
import brand4 from '../../../../assets/brand/brand4.png'
import brand5 from '../../../../assets/brand/brand5.png'
import './Company.css';

const Company = () => {
  return (
    <div className="sectionMargin">
    
      <div>
        <div className="slidersWraps md:mt-10 lg:mt-16">
          <Marquee gradient={false} speed={30}>
            <div className="slider slickSliderImgWrap">
              <Image src={brand} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <Image src={brand2} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <Image src={brand3} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <Image src={brand4} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <Image src={brand5} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <Image src={brand} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <Image src={brand2} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <Image src={brand3} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <Image src={brand4} alt="brand" />
            </div>
            <div className="slider slickSliderImgWrap">
              <Image src={brand5} alt="brand" />
            </div>
           
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Company;
