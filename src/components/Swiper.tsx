import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

import quote from "@/assets/quote.png";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2">
            <div className="p-1">
              <Card className="bg-transparent border-none">
                <CardContent className="flex flex-col text-white aspect-square gap-4 justify-center p-6">
                  <div>
                    <Image src={quote} alt="quote" width={60} height={60} />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia inventore fugit commodi iure nisi autem quibusdam
                    ab suscipit consequuntur quam, magni omnis animi
                    necessitatibus praesentium facilis magnam minus impedit
                    reprehenderit.
                  </p>
                  <div className="flex gap-4 items-center">
                    <div>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h6>Tom Jonson</h6>
                      <p>Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
