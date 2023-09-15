import React, { useRef, useEffect } from "react";
import {
    Carousel as NativeCarousel,
    Fancybox as NativeFancybox,
} from "@fancyapps/ui";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";
import { Avatar, Box } from "@mui/material";

const CustomCarousel = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        // Options pour Fancybox
        const fancyboxOptions = {
            loop: true,
            Thumbs: false,
            Toolbar: {
                display: {
                    left: [],
                    middle: [],
                    right: ["infobar", "close"],
                },
            },
            contentClick: "close",
            protect: true,
            Images: {
                initialSize: "fit",
            },
        };

        // Options pour le carousel
        const carouselOptions = {
            Dots: false,
            infinite: true,
            preload: 0,
            Autoplay: {
                timeout: 5000,
                showProgress: false,
            },
        };

        const carouselInstance = new NativeCarousel(
            container,
            carouselOptions,
            {
                Autoplay,
            }
        );

        const delegate = "[data-fancybox]";

        NativeFancybox.bind(container, delegate, fancyboxOptions || {});

        return () => {
            carouselInstance.destroy();
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    }, []);

    const imageNames = Array.from(
        { length: 10 },
        (_, index) => `collage${index + 1}.webp`
    );

    const images = imageNames.map((imageName) => ({
        src: require(`../img/portfolio/${imageName}`),
        caption: `Caption de l'image ${imageName}`,
    }));

    return (
        <Box
            component="section"
            className="f-carousel"
            ref={containerRef}
            sx={{
                marginX: "1rem !important",
                ".f-carousel__track": {
                    "--f-carousel-spacing": "59px",
                },
            }}
        >
            {images.map((image, index) => (
                <Avatar
                    key={index}
                    className="f-carousel__slide"
                    data-sizes="(max-width: 600px) 480px, 800px"
                    data-fancybox="gallery"
                    data-src={image.src}
                    variant="square"
                    src={image.src}
                    alt={image.caption}
                    MuiAvatar-img={{
                        objectFit: "contain",
                    }}
                    sx={{
                        height: "150px",
                        width: "150px",
                        /* paddingX: "2rem", */
                        objectFit: "cover",
                        ".MuiAvatar-img": {
                            objectFit: "contain",
                        },
                    }}
                />
            ))}
        </Box>
    );
};

export default CustomCarousel;
