import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MainSlider: React.FC = () => {
  useEffect(() => {
    // Initialize slider when component mounts
    if (typeof window !== 'undefined' && window.jQuery) {
      const $ = window.jQuery;
      if ($.fn.revolution) {
        $('#rev_slider_one').revolution({
          sliderType: 'standard',
          jsFileLocation: 'assets/plugins/revolution/js/',
          sliderLayout: 'fullwidth',
          dottedOverlay: 'none',
          delay: 9000,
          navigation: {
            keyboardNavigation: 'off',
            keyboard_direction: 'horizontal',
            mouseScrollNavigation: 'off',
            mouseScrollReverse: 'default',
            onHoverStop: 'on',
            arrows: {
              style: 'hesperiden',
              enable: true,
              hide_onmobile: false,
              hide_onleave: false,
              tmp: '',
              left: {
                h_align: 'left',
                v_align: 'center',
                h_offset: 20,
                v_offset: 0
              },
              right: {
                h_align: 'right',
                v_align: 'center',
                h_offset: 20,
                v_offset: 0
              }
            }
          },
          viewPort: {
            enable: true,
            outof: 'pause',
            visible_area: '80%'
          },
          responsiveLevels: [1240, 1024, 778, 480],
          gridwidth: [1240, 1024, 778, 480],
          gridheight: [600, 500, 400, 300],
          lazyType: 'smart',
          parallax: {
            type: 'scroll',
            origo: 'slidercenter',
            speed: 400,
            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
          },
          shadow: 0,
          spinner: 'off',
          stopLoop: 'off',
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: 'off',
          autoHeight: 'off',
          fullScreenAutoWidth: 'off',
          fullScreenAlignForce: 'off',
          fullScreenOffsetContainer: '',
          fullScreenOffset: '0px',
          disableProgressBar: 'on',
          hideThumbsOnMobile: 'off',
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false
        });
      }
    }
  }, []);

  return (
    <section className="main-slider-two">
      <div className="curve-layer" style={{ backgroundImage: 'url(/assets/images/main-slider/curve.png)' }}></div>
      <div className="rev_slider_wrapper fullwidthbanner-container" id="rev_slider_one_wrapper" data-source="gallery">
        <div className="rev_slider fullwidthabanner" id="rev_slider_one" data-version="5.4.1">
          <ul>
            <li data-transition="notselectable23" data-description="Slide Description" data-index="rs-1688" data-slotamount="default" data-thumb="/assets/images/main-slider/image-4.jpg" data-title="Slide Title">
              <img alt="" className="rev-slidebg" data-bgfit="cover" data-bgparallax="10" data-bgposition="center center" data-bgrepeat="no-repeat" data-no-retina="" src="/assets/images/main-slider/image-4.jpg" />
              <div className="color-layer"></div>
              <div className="tp-caption" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['1100','800','800','500']" data-whitespace="normal" data-hoffset="['15','15','15','15']" data-voffset="['-125','-170','-125','-110']" data-x="['center','center','center','center']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                <div className="title">AI-empowered school</div>
              </div>
              <div className="tp-caption" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['1100','800','800','500']" data-whitespace="normal" data-hoffset="['15','15','15','15']" data-voffset="['0','-50','0','-10']" data-x="['center','center','center','center']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames='[{"delay":0,"split":"chars","splitdelay":0.05,"speed":2000,"frame":"0","from":"y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"power4.inOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.inOut"}]'>
                <h1>JKKN Matric Higher<br />Secondary school</h1>
              </div>
              <div className="tp-caption tp-resizeme" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['700','700','700','500']" data-whitespace="normal" data-hoffset="['15','15','15','15']" data-voffset="['160','100','160','120']" data-x="['center','center','center','center']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                <div className="button-box">
                  <Link to="/contact" className="theme-btn btn-style-nine">
                    <span className="txt">Get Free Guide</span>
                  </Link>
                  <Link to="/contact" className="theme-btn btn-style-ten">
                    <span className="txt">Learn More</span>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainSlider; 