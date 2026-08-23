/* ============================================================
   CONFIGURATION
============================================================ */

/*
  CHANGE THIS PASSWORD.

  Example:

  const SECRET_PASSWORD = "gauri2025";

  Remember that a frontend-only password is NOT true security.
  Anyone who downloads the website can inspect the JavaScript.
  It is suitable for a fun surprise, not for protecting sensitive data.
*/

const SECRET_PASSWORD = "gayuu";


/*
  RELATIONSHIP START DATE

  26 July 2025
*/

const RELATIONSHIP_START = new Date(
  "2025-07-26T00:00:00"
);


/* ============================================================
   DOM
============================================================ */

const preloader =
  document.getElementById("preloader");

const opening =
  document.getElementById("opening");

const mainContent =
  document.getElementById("mainContent");

const openStory =
  document.getElementById("openStory");

const musicButton =
  document.getElementById("musicButton");

const backgroundMusic =
  document.getElementById("backgroundMusic");

const rain =
  document.getElementById("rain");

const mobileMenu =
  document.getElementById("mobileMenu");

const menuButton =
  document.getElementById("menuButton");

const letterModal =
  document.getElementById("letterModal");

const letterContent =
  document.getElementById("letterContent");

const closeLetter =
  document.getElementById("closeLetter");

const passwordModal =
  document.getElementById("passwordModal");

const unlockButton =
  document.getElementById("unlockButton");

const closePassword =
  document.getElementById("closePassword");

const submitPassword =
  document.getElementById("submitPassword");

const passwordInput =
  document.getElementById("passwordInput");

const passwordError =
  document.getElementById("passwordError");

const secretMessage =
  document.getElementById("secretMessage");

const typingText =
  document.getElementById("typingText");

const secretEnding =
  document.getElementById("secretEnding");

const lightbox =
  document.getElementById("lightbox");

const lightboxImage =
  document.getElementById("lightboxImage");

const lightboxCaption =
  document.getElementById("lightboxCaption");

const closeLightbox =
  document.getElementById("closeLightbox");


/* ============================================================
   PRELOADER
============================================================ */

window.addEventListener("load", () => {

  setTimeout(() => {

    preloader.classList.add("loaded");

  }, 1800);

});


/* ============================================================
   OPEN EXPERIENCE
============================================================ */

openStory.addEventListener("click", () => {

  opening.classList.add("closed");

  mainContent.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

  setTimeout(() => {

    document
      .querySelectorAll(".hero .reveal")
      .forEach((element, index) => {

        setTimeout(() => {
          element.classList.add("visible");
        }, index * 180);

      });

  }, 700);

});


/* ============================================================
   RAIN GENERATOR
============================================================ */

function createRain() {

  const amount =
    window.innerWidth < 600
      ? 35
      : 70;

  for (let i = 0; i < amount; i++) {

    const drop =
      document.createElement("span");

    drop.className = "drop";

    drop.style.left =
      `${Math.random() * 110}%`;

    drop.style.height =
      `${35 + Math.random() * 55}px`;

    drop.style.opacity =
      `${0.1 + Math.random() * 0.4}`;

    drop.style.animationDuration =
      `${0.7 + Math.random() * 1.3}s`;

    drop.style.animationDelay =
      `${Math.random() * -2}s`;

    rain.appendChild(drop);

  }

}

createRain();


/* ============================================================
   MOBILE MENU
============================================================ */

menuButton.addEventListener("click", () => {

  mobileMenu.classList.toggle("open");

});


document
  .querySelectorAll(".mobile-menu a")
  .forEach(link => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("open");

    });

  });


/* ============================================================
   MUSIC
============================================================ */

let musicPlaying = false;

musicButton.addEventListener("click", async () => {

  try {

    if (!musicPlaying) {

      await backgroundMusic.play();

      musicPlaying = true;

      musicButton.classList.add("playing");

    } else {

      backgroundMusic.pause();

      musicPlaying = false;

      musicButton.classList.remove("playing");

    }

  } catch (error) {

    console.log(
      "Music could not be played:",
      error
    );

  }

});


/* ============================================================
   SCROLL REVEALS
============================================================ */

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach(element => {

    revealObserver.observe(element);

  });


/* ============================================================
   RELATIONSHIP DAYS
============================================================ */

function calculateDaysTogether() {

  const now =
    new Date();

  const difference =
    now - RELATIONSHIP_START;

  const days =
    Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    );

  const counter =
    document.querySelector(".counter");

  if (counter) {

    counter.dataset.target =
      Math.max(days, 0);

  }

}

calculateDaysTogether();


/* ============================================================
   COUNTER ANIMATION
============================================================ */

function animateCounter(element) {

  const target =
    Number(element.dataset.target);

  const duration =
    1800;

  const start =
    performance.now();

  function update(time) {

    const progress =
      Math.min(
        (time - start) / duration,
        1
      );

    const eased =
      1 -
      Math.pow(
        1 - progress,
        3
      );

    const value =
      Math.floor(
        target * eased
      );

    element.textContent =
      value.toLocaleString();

    if (progress < 1) {

      requestAnimationFrame(update);

    }

  }

  requestAnimationFrame(update);

}


const numberObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (
          entry.isIntersecting
        ) {

          const counter =
            entry.target.querySelector(
              ".counter"
            );

          if (counter) {

            animateCounter(counter);

          }

          numberObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.5
    }
  );


document
  .querySelectorAll(".number-card")
  .forEach(card => {

    numberObserver.observe(card);

  });


/* ============================================================
   LETTER CONTENT
============================================================ */

/*
  Keep this section editable.

  You can replace the text with your own final versions.
*/

const letters = {

  letter1: `
    <h3>Things I never properly said</h3>

    <p>
      Gauri, we have spent so much time together —
      through chats, conversations and all those ordinary
      moments that slowly became important.
    </p>

    <p>
      Sometimes I know exactly what I want to say,
      but when I'm actually in front of you,
      I simply cannot find the words.
    </p>

    <p>
      What started as friendship became something I
      never expected, and I'm grateful for the person
      who has been beside me through so many moments.
    </p>

    <p>
      You became one of the most important people
      in my life without either of us planning it.
    </p>
  `,

  letter2: `
    <h3>What I'm grateful for</h3>

    <p>
      You have helped me understand myself better.
    </p>

    <p>
      You listened when I needed someone to understand me.
      You encouraged me to become better and taught me
      things about care, patience and understanding.
    </p>

    <p>
      There are changes in me that you may not even realize
      you helped create.
    </p>

    <p>
      For those things, I will always be grateful.
    </p>
  `,

  letter3: `
    <h3>Things I regret</h3>

    <p>
      I know there have been moments when my anger,
      insecurity or overthinking caused unnecessary hurt.
    </p>

    <p>
      I don't want to pretend that those moments never
      happened. They did.
    </p>

    <p>
      What matters to me is learning from them,
      taking responsibility and trying to handle difficult
      situations better.
    </p>

    <p>
      I'm sorry for the moments when I made things harder
      than they needed to be.
    </p>
  `,

  letter4: `
    <h3>What you mean to me</h3>

    <p>
      You're not simply a person who became part of my life.
      You became someone whose presence matters deeply to me.
    </p>

    <p>
      You're someone I can talk to, someone who understands
      me, someone who has encouraged me and someone whose
      presence brings comfort.
    </p>

    <p>
      I don't always know how to express all of that
      properly.
    </p>

    <p>
      But I hope you know how important you are to me.
    </p>
  `,

  letter6: `
    <h3>Promises</h3>

    <p>
      I know I'm not perfect.
    </p>

    <p>
      What I can promise is that I will keep learning,
      keep listening and keep trying to become a better
      version of myself.
    </p>

    <p>
      When difficult moments happen, I want to communicate
      rather than simply let anger decide everything.
    </p>

    <p>
      I want to be someone who can take responsibility,
      apologize sincerely and show through actions that
      the lessons matter.
    </p>
  `

};


/* ============================================================
   LETTER OPENING
============================================================ */

document
  .querySelectorAll(".envelope")
  .forEach(envelope => {

    envelope.addEventListener(
      "click",
      () => {

        const key =
          envelope.dataset.letter;

        letterContent.innerHTML =
          letters[key] || "";

        letterModal.classList.add("open");

        document.body.classList.add(
          "modal-open"
        );

      }
    );

  });


function closeLetterModal() {

  letterModal.classList.remove("open");

  document.body.classList.remove(
    "modal-open"
  );

}


closeLetter.addEventListener(
  "click",
  closeLetterModal
);


letterModal.addEventListener(
  "click",
  event => {

    if (
      event.target ===
      letterModal
    ) {

      closeLetterModal();

    }

  }
);


/* ============================================================
   SECRET PASSWORD
============================================================ */

unlockButton.addEventListener(
  "click",
  () => {

    passwordModal.classList.add("open");

    passwordInput.value = "";

    passwordError.textContent = "";

    setTimeout(() => {

      passwordInput.focus();

    }, 300);

  }
);


closePassword.addEventListener(
  "click",
  () => {

    passwordModal.classList.remove(
      "open"
    );

  }
);


submitPassword.addEventListener(
  "click",
  unlockSecret
);


passwordInput.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Enter"
    ) {

      unlockSecret();

    }

  }
);

function unlockSecret() {

  const entered =
    passwordInput.value.trim();

  if (entered === SECRET_PASSWORD) {

    /* Close password modal */

    passwordModal.classList.remove("open");

    document.body.classList.remove("modal-open");


    /* Hide the secret box completely */

    const secretSection =
      document.querySelector(".secret-section");

    if (secretSection) {

      secretSection.classList.add(
        "secret-unlocked"
      );

    }


    /* Show cinematic secret room */

    secretMessage.classList.add(
      "visible"
    );


    /* Create cinematic effects */

    createSecretRain();

    createSecretHearts();


    /* Move to secret room */

    setTimeout(() => {

      secretMessage.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }, 250);


    /* Start typing */

    startTyping();


  } else {

    passwordError.textContent =
      "That isn't the right code.";

    passwordInput.value = "";

    passwordInput.focus();

  }

                          }



/* ============================================================
   SECRET TYPING
============================================================ */

const secretText =
  "Whatever the future brings, I hope the lessons, memories and good moments we shared remain something worth remembering.";

let typingStarted = false;

function startTyping() {

  if (typingStarted) {
    return;
  }

  typingStarted = true;

  let index = 0;

  typingText.textContent = "";

  function type() {

    if (
      index <
      secretText.length
    ) {

      typingText.textContent +=
        secretText[index];

      index++;

      setTimeout(
        type,
        32
      );

    } else {

      setTimeout(() => {

        secretEnding.classList.add(
          "visible"
        );

      }, 900);

    }

  }

  type();

}


/* ============================================================
   GALLERY LIGHTBOX
============================================================ */

document
  .querySelectorAll(".gallery-item")
  .forEach(item => {

    item.addEventListener(
      "click",
      () => {

        const image =
          item.dataset.image;

        const caption =
          item.dataset.caption;

        lightboxImage.src =
          image;

        lightboxCaption.textContent =
          caption;

        lightbox.classList.add(
          "open"
        );

        document.body.classList.add(
          "modal-open"
        );

      }
    );

  });


function closeGallery() {

  lightbox.classList.remove(
    "open"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


closeLightbox.addEventListener(
  "click",
  closeGallery
);


lightbox.addEventListener(
  "click",
  event => {

    if (
      event.target ===
      lightbox
    ) {

      closeGallery();

    }

  }
);


/* ============================================================
   ESCAPE KEY
============================================================ */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "Escape"
    ) {

      closeLetterModal();

      closeGallery();

      passwordModal.classList.remove(
        "open"
      );

      mobileMenu.classList.remove(
        "open"
      );

    }

  }
);


/* ============================================================
   SUBTLE HERO PARALLAX
============================================================ */

const heroImage =
  document.querySelector(
    ".hero-image"
  );

window.addEventListener(
  "scroll",
  () => {

    if (
      window.innerWidth < 800
    ) {
      return;
    }

    const scroll =
      window.scrollY;

    if (scroll < window.innerHeight) {

      heroImage.style.transform =
        `scale(1.04) translateY(${scroll * 0.08}px)`;

    }

  },
  {
    passive: true
  }
);

/* ============================================================
   CINEMATIC SECRET RAIN
============================================================ */

function createSecretRain() {

  const layer =
    document.createElement("div");

  layer.className =
    "secret-rain-layer";

  secretMessage.appendChild(layer);


  const amount =
    window.innerWidth < 600
      ? 55
      : 110;


  for (let i = 0; i < amount; i++) {

    const drop =
      document.createElement("span");

    drop.className =
      "secret-drop";


    drop.style.left =
      `${Math.random() * 110}%`;


    drop.style.setProperty(
      "--drop-height",
      `${40 + Math.random() * 80}px`
    );


    drop.style.setProperty(
      "--drop-opacity",
      `${0.08 + Math.random() * 0.35}`
    );


    drop.style.setProperty(
      "--drop-speed",
      `${0.8 + Math.random() * 1.5}s`
    );


    drop.style.setProperty(
      "--drop-delay",
      `${Math.random() * -3}s`
    );


    layer.appendChild(drop);

  }

}


/* ============================================================
   CINEMATIC FLOATING HEARTS
============================================================ */

function createSecretHearts() {

  const amount =
    window.innerWidth < 600
      ? 16
      : 28;


  for (let i = 0; i < amount; i++) {

    const heart =
      document.createElement("span");

    heart.className =
      "secret-heart";

    heart.textContent =
      Math.random() > 0.5
        ? "♡"
        : "♥";


    heart.style.left =
      `${Math.random() * 100}%`;


    heart.style.setProperty(
      "--heart-size",
      `${10 + Math.random() * 18}px`
    );


    heart.style.setProperty(
      "--heart-duration",
      `${5 + Math.random() * 5}s`
    );


    heart.style.setProperty(
      "--heart-delay",
      `${Math.random() * 4}s`
    );


    heart.style.setProperty(
      "--heart-x",
      `${-80 + Math.random() * 160}px`
    );


    secretMessage.appendChild(
      heart
    );

  }

}
/* ============================================================
   IMAGE ERROR HANDLING
============================================================ */

document
  .querySelectorAll("img")
  .forEach(image => {

    image.addEventListener(
      "error",
      () => {

        image.style.background =
          "linear-gradient(135deg,#32151d,#1a0e11)";

        image.style.objectFit =
          "cover";

      }
    );

  });
