"use client";

import { Carousel } from "flowbite-react";

export function Component() {
  return (
    <div className="w-full h-[550px]">
      <Carousel slideInterval={3000}>
        <img src="https://i.imgur.com/p9nHrif.png" alt="..." className="object-cover h-full" />
        <img src="https://i.imgur.com/dKb9Kzh.png" alt="..." className="object-cover h-full" />
        <img src="https://i.imgur.com/cg1sfi7.png" alt="..." className="object-cover h-full" />
        <img src="https://i.imgur.com/n9Ikc8N.png" alt="..." className="object-cover h-full" />
      </Carousel>
    </div>
  );
}
