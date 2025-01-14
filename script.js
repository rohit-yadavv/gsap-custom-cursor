var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
  });
});

imageDiv.addEventListener("mouseenter", (e) => {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 2,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  });
});

imageDiv.addEventListener("mouseleave", (e) => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "rgb(255, 255, 255)",
  });
});
