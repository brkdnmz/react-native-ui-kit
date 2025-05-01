# React Native UI Kit

_First of all, it's a personal library-ish. I'm not a pro at all, just trying to get better._

Some fundamental components (buttons, input fields, dropdowns, etc.) are _almost_ always needed in React Native apps. Yes, I am always able to reimplement them per app. But, well, I feel like it might get quite boring soon. Also, I usually feel disorganized, like, _"ok code this very specific component that gets the job done at this specific place."_

Add theme support on top: oh god...

These atomic components should be opinionated enough to have a solid design system. The thing is, they are a lot.

After some research, I've decided to try to code my own components that hopefully I'll actually use.

One must begin at some point, right?

Whenever I'm in need of another component, I can add it to this kit. Shouldn't be that hard I hope.

> Why not, for example, React Native Paper?

Useful but I have found it hard to customize. It is still a good starting point though IMO.

Core helpers:

- **Material Design:** Theme colors generation and useful insights about UI design. Being constrained to a set of fixed colors is comforting.
- **Unistyles (v2):** Literally all of styling, theming etc. The repo does not have that many stars, but some people on Reddit and I pretty much liked it. It seems trustworthy. v3 requires new arch, which I don't prefer until it's stable enough.
- **React Native Reanimated:** Animations on the UI thread instead of JS.
- R**eact Native Gesture Handler:** Gestures. Not JS but native.
