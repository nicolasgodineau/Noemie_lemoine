import { Container } from "@mui/material";

export default function Portfolio() {
    const imageNames = Array.from(
        { length: 15 },
        (_, index) => `collage${index + 1}.webp`
    );
    console.log("imageNames:", imageNames);
    const images = imageNames.map((imageName) =>
        require(`../img/portfolio/${imageName}`)
    );

    return (
        <Container
            id="portfolio"
            component="section"
            disableGutters
            maxWidth="lg"
        >
            {images.map((image, index) => {
                const delay = index * 100;
                return (
                    <img
                        key={index}
                        src={image}
                        alt={`Portfolio ${index + 1}`}
                        style={{ width: "100%" }}
                        loading="lazy"
                        data-aos="fade-up"
                        data-aos-delay={delay}
                    />
                );
            })}
        </Container>
    );
}
