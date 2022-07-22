import cn from "classnames";
import { Component } from "solid-js/types";

import WhiteLogo from "../../assets/images/logos/logo_white.svg";
import HandHello from "../../assets/images/others/hand_hello.png";

const Home: Component = () => {
  return (
    <div>
      <div class="h-[750px] overflow-hidden bg-primary-gradient relative text-white">
        <div class="bg-image-pattern w-full h-full bg-no-repeat bg-cover">
          <div class="container mx-auto py-5 px-4 flex justify-between">
            <img src={WhiteLogo} class="h-[45px]" />
            <nav class="hidden sm:block">
              <ul class="top-navigation-bar">
                <li class="nav-item active">About</li>
                <li class="nav-item">Project</li>
                <li class="nav-item">Blog</li>
              </ul>
            </nav>
            <button
              class={cn(
                "bg-white h-[40px] px-3 grid place-items-center rounded-tl-full",
                "rounded-tr-full rounded-br-full text-gray-800 shadow-md"
              )}
            >
              Say Hi.
            </button>
          </div>
          <div class="mt-20 sm:mt-36 container mx-auto px-4">
            <h3 class="font-medium text-xl sm:text-2xl">Jerico Valino</h3>
            <h1 class="font-medium text-5xl sm:text-6xl">
              Awesome every pixel.
            </h1>
            <p class="mt-4 leading-loose max-w-lg text-justify">
              I’m a web developer from Batangas Philippines. I love building
              reactive and responsive website using the latest technologies
              available to deliver awesome experience to the user.
            </p>
            <button class="mt-14 h-[40px] bg-gray-800 px-6 rounded-full shadow-md transition-transform duration-500 hover:scale-110">
              <p class="text-primary-gradient font-medium">View Projects</p>
            </button>
          </div>
          <img
            src={HandHello}
            class="absolute bottom-0 -right-48 transform -rotate-[25deg]"
          />
        </div>
      </div>
      <div class="h-screen bg-gray-50" />
      <div class="h-96 bg-gray-800" />
    </div>
  );
};

export default Home;
