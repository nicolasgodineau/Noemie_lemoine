import { Container } from "@mui/material";

export default function Portfolio() {
    const imageNames = Array.from(
        { length: 22 },
        (_, index) => `collage${index + 1}.webp`
    );
    const images = imageNames.map((imageName) =>
        require(`../img/portfolio/${imageName}`)
    );

    return (
        <Container
            id="portfolio"
            component="section"
            disableGutters={true}
            maxWidth="lg"
        >
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Collage ${index + 1}`}
                    style={{ width: "100%" }}
                    data-aos="fade-up"
                    data-aos-delay="100"
                />
            ))}
        </Container>
    );
}
