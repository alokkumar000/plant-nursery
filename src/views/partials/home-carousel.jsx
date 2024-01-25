import React, {useEffect, useRef, useState} from "react";
import {Button, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem} from "reactstrap";
import {Link} from "react-router-dom";
import {isMobile} from "react-device-detect";


const items = [
    {
        src: 'https://ik.imagekit.io/vf98dviiq/nuersery/landing-page/c1.jpg',
        altText: 'Slide 1',
        caption: 'Gardening, elevated.',
        key: 1,
    },
    {
        src: 'https://ik.imagekit.io/vf98dviiq/nuersery/landing-page/c2.jpeg',
        altText: 'Slide 2',
        caption: 'Explore our plant haven',
        key: 2,
    },
    {
        src: 'https://ik.imagekit.io/vf98dviiq/nuersery/landing-page/c3.jpeg',
        altText: 'Slide 3',
        caption: 'Unleash your inner botanist.',
        key: 3,
    },
];

function HomeCarousel() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const curULR = window.location.href;
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} className={'carousel_img'} alt={item.altText} width={'100%'}/>

                <CarouselCaption
                    // captionText={item.caption}
                    captionHeader={item.caption}
                />
                <Link to={`${curULR}products`}><Button className={isMobile ? '' : 'carousel_btn  btn-light btn-lg'}>View
                    Products</Button></Link>
            </CarouselItem>
        );
    });


    return (
        <div>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className={'carousel_e2e'}

            >
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>

        </div>
    )


}

export default HomeCarousel;



