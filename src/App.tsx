import { Component, createSignal } from "solid-js";
import { Router, Route, NavLink, Routes } from "solid-app-router";

import { IoChatboxOutline } from "solid-icons/io";
import { RiBuildingsHomeLine } from "solid-icons/ri";
import { BsJournalCode, BsTerminal } from "solid-icons/bs";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import { useScrollUpDownCallback } from "./modules/hooks/scrollUpDownCallback";

const Navigation: Component<{ hideBottom: Boolean }> = (props: {
  hideBottom?: Boolean;
}) => {
  return (
    <nav
      class={`navigation-bar ${(props?.hideBottom ?? false) && "hide-bottom"}`}
    >
      <ul class="grid grid-cols-4">
        <NavLink class="flex flex-col items-center justify-center" href="/">
          <RiBuildingsHomeLine size={20} />
          <span>HOME</span>
        </NavLink>
        <NavLink
          class="flex flex-col items-center justify-center"
          href="/blogs"
        >
          <BsJournalCode size={20} />
          <span>BLOGS</span>
        </NavLink>
        <NavLink
          class="flex flex-col items-center justify-center"
          href="/works"
        >
          <BsTerminal size={20} />
          <span>WORKS</span>
        </NavLink>
        <NavLink
          class="flex flex-col items-center justify-center"
          href="/contact"
        >
          <IoChatboxOutline size={20} />
          <span>CONTACT</span>
        </NavLink>
      </ul>
    </nav>
  );
};

const App: Component = () => {
  const [showBottomNav, setShowBottomNav] = createSignal<Boolean>(true);
  const { register } = useScrollUpDownCallback({
    onScrollDown: () => setShowBottomNav(false),
    onScrollUp: () => setShowBottomNav(true),
    listenOnScrollDown: showBottomNav,
    listenOnScrollUp: () => !showBottomNav(),
  });
  return (
    <Router>
      <div class="h-screen text-sm overflow-scroll" {...register}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Navigation hideBottom={!showBottomNav()} />
      </div>
    </Router>
  );
};

export default App;
