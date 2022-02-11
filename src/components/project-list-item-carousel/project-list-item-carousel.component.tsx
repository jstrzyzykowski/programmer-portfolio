import React from 'react';

import {Carousel} from 'react-bootstrap';

import {IScreenshot} from '../../api/projects.data';

import './project-list-item-carousel.styles.scss';

export interface ProjectListItemCarouselProps {
  images: IScreenshot[],
}

export default function ProjectListItemCarousel({ images }: ProjectListItemCarouselProps): JSX.Element {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`http://localhost:5000${images[0].path}`}
          alt={images[0].alt}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`http://localhost:5000${images[1].path}`}
          alt={images[1].alt}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`http://localhost:5000${images[2].path}`}
          alt={images[2].alt}
        />
      </Carousel.Item>
    </Carousel>
  );
}