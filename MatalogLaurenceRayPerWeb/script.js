document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const activeLink = document.querySelector('.nav-menu a.active');
    if (activeLink) activeLink.classList.remove('active');
    link.classList.add('active');
  });
});


const h1Text = "Laurence Ray C. Matalog";
    const pText = "Information Technology Student";

    const typeWriterEffect = (element, text, speed = 60, addBlink = false) => {
      let index = 0;

      const type = () => {
        if (index < text.length) {
          element.textContent += text[index++];
          setTimeout(type, speed);
        } else if (addBlink) {

          const blinkingCaret = document.createElement("span");
          blinkingCaret.textContent = "|";
          blinkingCaret.classList.add("blink");
          element.appendChild(blinkingCaret);
        }
      };

      type();
    };

    const h1Element = document.getElementById("h1-text");
    const pElement = document.getElementById("p-text");
    typeWriterEffect(h1Element, h1Text);
    setTimeout(() => typeWriterEffect(pElement, pText, 60, true), 2000);


document.addEventListener('DOMContentLoaded', () => {
  const fadeInElements = document.querySelectorAll('.fade-in-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.001 }); 
  fadeInElements.forEach((el) => observer.observe(el));
});

const listItems = document.querySelectorAll("#events-section li");

listItems.forEach(item => {
  item.addEventListener("click", () => {
    alert(`You clicked on: ${item.textContent}`);
  });
});