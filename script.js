const panelElements = document.querySelectorAll('.panel');
console.log(panelElements);
panelElements.forEach((panel) =>
    panel.addEventListener('click', () => {
        removeClassActive();
        panel.classList.add('active');
    })
);

const removeClassActive = function () {
    panelElements.forEach((panel) => panel.classList.remove('active'));
};
