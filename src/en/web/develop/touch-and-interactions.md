---
title: "Touch and interactions"
abstract: "Touch and interaction, web accessibility dev recommandations"
---

# Touch and interactions

<p class="lead">Ensure that the user keeps control over interactions, particularly tactile ones</p>




## Allow zooming

**Target:** everyone especially the visually impaired.  
**When:** during development.

**Description:**  
The site must not prohibit or limit the use of the zoom (especially on mobiles).





## Allow to cancel the triggering of gestural interactions
 
**Target:** Everyone, especially people with motor or visual disabilities and mobility.  
**When:** during development.

**Description:**  
During a single-point gesture interaction, at least one condition is true:
- the down event of the pointer (MouseDown) is not used to perform part of the function
- Abort or cancel, the function is terminated on the up event (MouseUp) and a mechanism is available to abort the function before the end or to cancel the function when finished
- Ability on the up event to reverse any result of the previous down event
- Finish the function on the event is essential. Note: Functions that emulate a keyboard or numeric keypad are considered as essential.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#pointer-gestures">2.5.1 Pointer Gestures</a>
- <a href="https://www.w3.org/TR/WCAG21/#pointer-cancellation">2.5.2 Pointer Cancellation</a>
- <a href="https://www.w3.org/TR/WCAG21/#motion-actuation">2.5.4 Motion Actuation</a>




## Offer an alternative to complex gestures

**Target:** Everyone, especially people with motor or visual disabilities and mobility.  
**When:** during design and development.

**Description:**  
- For each complex gesture interaction or path-based interaction (<span lang = "en"> swipe, drag, pinch </ span> ...), an alternative must be available (for example a non-gestural or simplified alternative) unless this gesture or this trajectory is essential (eg signature).
- In the same way, for the interactions requiring a change of orientation of the apparatus or a movement of the user (tilting, rotation, shaking ...), this functionality can be deactivated and must have an alternative in the interface.

**Complex gesture:** any multi-pointer gesture (requiring several fingers), and / or path-bases gesture.  
**Simplified gesture:** an alternative requiring a single pointer (one finger) without path-based gesture.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#pointer-gestures">2.5.1 Pointer Gestures</a>




## Give access to the content regardless of the orientation of the screen

**Target:** Everyone, especially people with motor or visual disabilities and mobility.  
**When:** during design and development.

**Description:**  
Access to the content must not depend on the orientation of the screen (portrait and landscape) unless a specific display orientation is essential (e.g. serious game).

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#orientation">1.3.4 Orientation</a>
