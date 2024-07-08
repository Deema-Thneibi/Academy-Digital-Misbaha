const countButtons = document.querySelectorAll(".count");
const resetButtons = document.querySelectorAll(".reset");

countButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const screenCount = e.target.closest("div").querySelector(".screen-count");
    let count = parseInt(screenCount.textContent);
    count++;
    screenCount.textContent = count;
  });
});

resetButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const screenCount = e.target.closest("div").querySelector(".screen-count");
    screenCount.textContent = 0;
  });
});

//  the difference between e.target and this :

/*
1. **Element Reference**:
   - `e.target`: Refers to the element that triggered the event.
   - `this`: Refers to the element to which the event handler is attached.

2. **Scope and Context**:
   - `e.target`: Always provided by the event object and points to the originating element.
   - `this`: Depends on how the function is called. In an event handler, `this` is automatically bound to the element that the event handler is attached to.

3. **Event Delegation**:
   - `e.target`: Useful for determining which child element triggered the event when using event delegation.
   - `this`: Always refers to the parent element in event delegation.

4. **Handling Multiple Elements**:
   - `e.target`: Can help identify which specific child element within a group triggered the event.
   - `this`: Consistently refers to the element where the event listener is added, regardless of which child element triggered the event.
*/
