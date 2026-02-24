1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:getElementbyid use to select and work with only 1 element in javascript.getelementbyclass use to select more then 1 element.
queryselector use to select 1st element by cssSelector.queryselectorAll select all the element which match with css selector.



2. How do you create and insert a new element into the DOM?

Ans:To create a new element in js ,first I will write document.createElement("div/section etc") in js,I can make a variable and set this as variable value. To insert a new element into the DOM First I will creat it using document.createElement().
Then I will Add the Element to a parent element using append() orr appendchild()


3. What is Event Bubbling? And how does it work?

Ans:Event bubbling is a js prosses whare an event start from the target element and it propagates to its parent elements in the Dom tree.It works From down to up(child to parents).

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:Event delegation is a tachnique where I can add a single event listener to  parent element to handle events for its child elements.
It is vary useful bacause It make codes clean and short.Dont need to use many listeiner.


5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:PreventDefult() is a mathod which stop elements default behaveour and stopPropegation is also a mathod which use to stop  events bubbling.
