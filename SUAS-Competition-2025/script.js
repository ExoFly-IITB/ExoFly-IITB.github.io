const video = document.getElementById("bgVideo");

// Wait until the video metadata is loaded
video.addEventListener("loadedmetadata", () => {
  const duration = video.duration;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    // Normalize scroll position to [0, duration]
    const scrollFraction = scrollTop / maxScroll;
    const videoTime = scrollFraction * duration;

    video.currentTime = videoTime;

    // Reveal more of the video vertically (animate the bottom edge of the mask)
    const revealFraction = Math.min(scrollFraction * 100, 100);
    document.querySelector(".video-container").style.clipPath =
      `inset(0 0 ${100 - revealFraction}% 0)`;
  });
});
