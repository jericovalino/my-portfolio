import type { Component } from "solid-js";
import { IoChatboxOutline } from "solid-icons/io";
import { RiBuildingsHomeLine } from "solid-icons/ri";
import { BsJournalCode, BsTerminal } from "solid-icons/bs";

const App: Component = () => {
  return (
    <div class="h-screen text-sm">
      <nav class="navigation-bar">
        <ul class="grid grid-cols-4">
          <li class="flex flex-col items-center justify-center">
            <RiBuildingsHomeLine size={20} />
            <span>HOME</span>
          </li>
          <li class="flex flex-col items-center justify-center">
            <BsJournalCode size={20} />
            <span>BLOGS</span>
          </li>
          <li class="flex flex-col items-center justify-center">
            <BsTerminal size={20} />
            <span>WORKS</span>
          </li>
          <li class="flex flex-col items-center justify-center">
            <IoChatboxOutline size={20} />
            <span>CONTACT</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
