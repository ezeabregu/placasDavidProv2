import {
  ImageGridContainer,
  GridContainer,
  ImageItem,
  GridHeader,
  AboutEyebrow,
  AboutTitle,
  SectionDivider,
} from "./imageGridStyles";
import { galleryPhotos } from "./data/Productos";

const ImageGrid = () => {
  return (
    <ImageGridContainer id="gallery">
      <GridHeader>
        <AboutEyebrow>Galería</AboutEyebrow>
        <AboutTitle>Trabajos Realizados</AboutTitle>
        <SectionDivider />
      </GridHeader>
      <GridContainer>
        {galleryPhotos.map((img, id) => (
          <ImageItem key={id} src={img} alt={`Trabajo realizado ${id + 1}`} loading="lazy" />
        ))}
      </GridContainer>
    </ImageGridContainer>
  );
};

export default ImageGrid;
