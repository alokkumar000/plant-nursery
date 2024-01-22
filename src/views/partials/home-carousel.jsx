
import React, {useEffect, useRef, useState} from "react";
import {Button, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem} from "reactstrap";


const items = [
    {
        src: 'https://ik.imagekit.io/vf98dviiq/nuersery/landing-page/c1.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
    },
    {
        src: 'https://picsum.photos/id/456/1200/400',
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: 'https://ik.imagekit.io/vf98dviiq/nuersery/landing-page/c3.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
    },
];
function HomeCarousel() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(true);

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
                <img src={item.src} className={'carousel_img'} alt={item.altText} width={'100%'} />
                <Button className={'carousel_btn'} color={'primary'}>Shop Now</Button>
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });




    return (
        <div>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}

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



