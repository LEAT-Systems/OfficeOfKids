import React from "react";
import {
  HiOutlineArrowLeftCircle,
  HiOutlineArrowRightCircle,
} from "react-icons/hi2";
import { SlBookOpen } from "react-icons/sl";
import image1 from "../images/images1.jpeg";
import "../style/reader/ReaderScreen.css";

const data = [
  {
    id: 1,
    title: "Alice in Wonderland",
    author: "Wade Warren",
    chapters: [],
    image: image1,
  },
];

function ReaderScreen() {
  return (
    <>
      <div className="container mx-auto">
        {data.map((item) => (
          <div>
            <h2 id="reader-header">
              Story name-<span>{item.title}</span>
            </h2>
            <div className="flex flex-col-reverse md:flex md:flex-row gap-x-[48px]">
              <div>
                <div className="reader-screen">
                  <div className="reader-page">
                    <h2>Chapter 1</h2>
                    <p>
                      Once upon a time, in a land far, far away, there lived a
                      young girl named Rose. Rose was a curious and adventurous
                      soul, always eager to explore and discover new things. One
                      day, while out for a walk in the forest, Rose stumbled
                      upon a strange, glowing mushroom. Without hesitation, she
                      reached out and plucked it from the ground. <br /> <br />{" "}
                      As soon as she touched the mushroom, everything around her
                      began to spin and swirl. Rose felt as though she were
                      being sucked into a vortex, and before she knew it, she
                      was tumbling down a rabbit hole.
                      <br /> <br />
                      As she fell, Rose felt a sense of excitement and fear wash
                      over her. She had no idea where this rabbit hole would
                      take her, but she knew that she had to see where it led.
                      At the bottom of the rabbit hole, Rose found herself in a
                      strange and wondrous place. The world around her was
                      filled with talking animals, magic potions, and peculiar
                      creatures of all shapes and sizes. <br /> <br /> As she
                      wandered through this new land, Rose encountered all
                      manner of strange and wondrous things. She met a Cheshire
                      Cat who seemed to appear and disappear at will, a talking
                      doorknob who guarded the entrance to a mysterious garden,
                      and a White Queen who seemed to be constantly running
                      late. <br /> <br /> But perhaps the most curious creature
                      of all was a mad hatter who seemed to be in a constant
                      state of frenzy. Despite his bizarre behavior, Rose found
                      him to be a kind and generous host, always ready to offer
                      her a cup of tea and a warm smile. <br /> <br /> As Rose
                      explored this strange and wondrous land, she came to
                      realize that it was a place of endless possibility and
                      adventure. She knew that she would never forget her
                      journey to Wonderland, and she vowed to return again
                      someday.
                    </p>
                  </div>

                  <div className="navigate-page">
                    <p className="page">Page 1 of 30</p>
                    <div className="flex gap-x-[38px]">
                      <div className="page-navigate">
                        <HiOutlineArrowLeftCircle className="mr-2 md:mr-4" /> Previous
                      </div>
                      <div className="page-navigate">
                        Next <HiOutlineArrowRightCircle className="ml-2 md:ml-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[24px] md:mt-[14px]">
                <div className="author-background">
                  <div className=" author-display">
                    <p>Written by</p>
                    <div className="author-avatar">
                      <img src={item.image} alt="author" />
                      <p>{item.author}</p>
                    </div>
                  </div>
                </div>

				<ul className="chapters-list-mobile">
					<li>introduction</li>
					<li>About author</li>
					<li>Chapter 1</li>
					<li>Chapter 2</li>
					<li>Chapter 3</li>
					<li>Chapter 4</li>
					<li>Chapter 5</li>
				</ul>

                <div className="chapters">
                  <p>Chapters</p>
                  <p>Pages</p>
                </div>

                <ul className="chapters-list">
                  <li>
                    <div className="flex items-center">
                      <SlBookOpen className="mr-4" /> Introduction
                    </div>
                    <p>Page 1</p>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <SlBookOpen className="mr-4" /> About author
                    </div>
                    <p>Page 2</p>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <SlBookOpen className="mr-4" /> Chapter 1
                    </div>
                    <p>Page 4</p>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <SlBookOpen className="mr-4" /> Chapter 2
                    </div>
                    <p>Page 10</p>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <SlBookOpen className="mr-4" /> Chapter 3
                    </div>
                    <p>Page 15</p>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <SlBookOpen className="mr-4" /> Chapter 4
                    </div>
                    <p>Page 23</p>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <SlBookOpen className="mr-4" /> Chapter 5
                    </div>
                    <p>Page 30</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ReaderScreen;
