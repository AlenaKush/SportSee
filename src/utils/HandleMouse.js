export const handleMouseMove = (e) => {
  const container = document.querySelector(".line-chart");
  const width = container.clientWidth;
  const mouseX = e.activeCoordinate.x;
  const percentage = (mouseX / width) * 100;

  container.style.background = `linear-gradient(
      90deg, 
      rgba(255, 0, 0, 1) 0%, 
      rgba(255, 0, 0, 1) ${percentage}%, 
      rgba(230, 0, 0, 1) ${percentage}%, 
      rgba(230, 0, 0, 1) 100%)`;
};

export const handleMouseLeave = () => {
  const container = document.querySelector(".line-chart");
  container.style.background = `rgba(255, 0, 0, 1)`;
};

