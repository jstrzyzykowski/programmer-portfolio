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
          src={images[0].linkUrl}
          alt={images[0].alt}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[1].linkUrl}
          alt={images[1].alt}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[2].linkUrl}
          alt={images[2].alt}
        />
      </Carousel.Item>
    </Carousel>
  );
}