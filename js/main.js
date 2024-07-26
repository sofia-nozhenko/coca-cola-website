document.addEventListener("DOMContentLoaded", function () {
    /**
     * Cloud Animation
     */

    const cloud = document.querySelector(".main__cloud");
    if (cloud) {
        setTimeout(() => {
            cloud.classList.add("show");
        }, 3000);
    }

    /**
     * Popup
     */
    const openMenuBtn = document.getElementById("openMenu");
    const menuPopup = document.getElementById("popup");

    openMenuBtn.addEventListener("click", function () {
        const isOpen = openMenuBtn.classList.contains("open");

        if (isOpen) {
            openMenuBtn.classList.remove("open");
            openMenuBtn.classList.add("close");
            menuPopup.classList.remove("open");
            menuPopup.classList.add("close");
            setTimeout(() => {
                openMenuBtn.classList.remove("close");
                menuPopup.classList.remove("close");
            }, 1000);
        } else {
            openMenuBtn.classList.add("open");
            setTimeout(() => {
                menuPopup.classList.add("open");
            }, 1000);
        }
    });

    /**
     *Tabs
     */

    const tabs = document.getElementById("presents__cards");
    const contents = document.getElementById("presents__info");

    const changeClass = (el) => {
        for (let i = 0; i < tabs.children.length; i++) {
            tabs.children[i].classList.remove("active");
        }
        el.classList.add("active");
    };

    tabs.addEventListener("click", (e) => {
        const target = e.target.closest(".presents__cards-item");
        if (!target) return;
        const currTab = target.dataset.btn;
        changeClass(target);
        for (let i = 0; i < contents.children.length; i++) {
            contents.children[i].classList.remove("active");
            if (contents.children[i].dataset.content === currTab) {
                contents.children[i].classList.add("active");
            }
        }
    });

    /**
     * Custom Select
     */
    const selectBox = document.querySelector(".connect__form--select");
    const selectInput = selectBox.querySelector("input");
    // const selectOptions = selectBox.querySelector(".select-options");
    const options = selectBox.querySelectorAll(".option");

    selectBox.addEventListener("click", function () {
        selectBox.classList.toggle("open");
    });

    options.forEach((option) => {
        option.addEventListener("click", function (event) {
            event.stopPropagation();
            selectInput.value = this.textContent;
            selectBox.classList.remove("open");
        });
    });

    document.addEventListener("click", function (e) {
        if (!selectBox.contains(e.target)) {
            selectBox.classList.remove("open");
        }
    });

    /**
     * Scroll Sections
     */
    if (window.innerWidth > 1024) {
        gsap.registerPlugin(ScrollTrigger);
        let panels = gsap.utils.toArray(".slide-panel");
        let tops = panels.map((panel) =>
            ScrollTrigger.create({ trigger: panel, start: "top top" })
        );

        panels.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: () =>
                    panel.offsetHeight < window.innerHeight
                        ? "top top"
                        : "bottom bottom",
                pin: true,
                pinSpacing: false,
                scrub: true,
            });
        });
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#animated__snowflake", {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
        y: -400,
        x: 0,
    });

    gsap.to("#animated__snowflake", {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "linear",
    });
});
