interface Options {
  onScrollUp: () => void;
  onScrollDown: () => void;
  listenOnScrollUp?: () => Boolean;
  listenOnScrollDown?: () => Boolean;
  callbackPixelInterval?: Number;
}

export const useScrollUpDownCallback = (options: Options) => {
  let scrollYPosRef: number = 0;
  const onScroll = (
    e: UIEvent & {
      currentTarget: HTMLElement;
      target: Element;
    }
  ) => {
    const { scrollTop = 0, scrollHeight = 0, clientHeight = 0 } = e?.target;
    const scrollableHeight = scrollHeight - clientHeight;
    if (scrollTop < scrollYPosRef && (options?.listenOnScrollUp ?? true)) {
      if (typeof options?.onScrollUp === "function") options.onScrollUp();
    }
    if (
      scrollTop > 0 &&
      scrollTop > scrollYPosRef &&
      (options?.listenOnScrollDown ?? true)
    ) {
      if (typeof options?.onScrollDown === "function") options.onScrollDown();
    }
    if (scrollTop > scrollableHeight) {
      scrollYPosRef = scrollableHeight;
      if (typeof options?.onScrollDown === "function") options.onScrollDown();
    }
    if (
      scrollTop - scrollYPosRef > (options?.callbackPixelInterval ?? 20) ||
      scrollYPosRef - scrollTop > (options?.callbackPixelInterval ?? 20)
    ) {
      scrollYPosRef = scrollTop;
    }
    return null;
  };

  const register = {
    onScroll,
    // add more features/listeners here
  };

  return { register };
};
