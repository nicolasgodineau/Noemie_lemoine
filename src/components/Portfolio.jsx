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
        <Container disableGutters={true} maxWidth={false}>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image} // L'utilisation de `.default` est nécessaire car `require` renvoie un objet module
                    alt={`Collage ${index + 1}`}
                    style={{ width: "100%" }}
                />
            ))}
        </Container>
    );
}
