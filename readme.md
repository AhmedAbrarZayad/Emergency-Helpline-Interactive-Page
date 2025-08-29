1. **getElementById** selects a single element by its unique ID. But **getElementsByClassName** returns a live collection of all elements with a given class name. **querySelector** selects the first element matching a CSS selector, while **querySelectorAll** returns a static NodeList of all matching elements.

2. To create and insert a new element into the DOM, use `document.createElement` to make the element, set its properties, and then insert it using methods like `appendChild`.

3. **Event Bubbling** is the process where an event triggered on a child element propagates up through its parent elements in the DOM tree, allowing ancestors to react to the event.

4. **Event Delegation** is a technique where a single event listener is added to a parent element to handle events for its child elements.

5. **preventDefault()** stops the default browser action for an event, while **stopPropagation()** prevents the event from bubbling up to parent elements.
