# Intro
This is my external repo since it has more relevant stuff. The repo is working so you can clone it and mess with it if you want. I would actually be happy if you did. 

Feel free to read as much of this as you want. I thought I would give you more information than you probably wanted to hear and let you sort out what you think is relevant. 

## Code

My favorite reuse of a hook is probably `Button` and `ChevronButton`.
[useChevronButton](https://github.com/TristanBarrowAboutTime/extern/blob/89767685a491e0f7f5a742225c959a5cd4c5c130/src/CustomReportsPage/hooks/component-hooks/atomic-components/useChevronButton.ts#L10) 

Notice that in my “useChevronButton” I simply added the “useButton” hook and now I am free to keep or override any functionality I need from “Button” without inheritance. This was incredibly satisfying.

Some of the time I wanted to make things incredibly simple to implement and hook up. There is an example of this with “useWithSeachBar”. 

[FolderSelectionList L136](https://github.com/TristanBarrowAboutTime/extern/blob/89767685a491e0f7f5a742225c959a5cd4c5c130/src/CustomReportsPage/components/folder-selection-list/FolderSelectionList.tsx#L136) 

Now all I need to do is use the value off of the hook binding where I wish. I use it here:

[FolderSelectionList L141](https://github.com/TristanBarrowAboutTime/extern/blob/89767685a491e0f7f5a742225c959a5cd4c5c130/src/CustomReportsPage/components/folder-selection-list/FolderSelectionList.tsx#L141)

Using the word “binding” is just a random convention I picked out of the air. It could be anything or you could destructure the return value

Another thought behind the hooks is to separate logic from implementation. Here I made a “usePagination” hook that is completely separate from the UI and is tested in its own right. The matching pagination list is a bit bloated because I was going for configurability but It can really be anything. The pagination logic has nothing to do with the ui that implements it. “usePagination” in this case is a bit like “useWithPagingBar” but I anticipate having to use “usePagination” with other components so I separated the two. 

[usePagination](https://github.com/TristanBarrowAboutTime/extern/blob/89767685a491e0f7f5a742225c959a5cd4c5c130/src/CustomReportsPage/hooks/usePagination.ts)

[PagingBar](https://github.com/TristanBarrowAboutTime/extern/blob/89767685a491e0f7f5a742225c959a5cd4c5c130/src/CustomReportsPage/components/molecular-components/PagingBar.tsx)


I decided to useMemo and useCallback on every value and callback. This was quite unnecessary… not sure why I did it. useMemo and useCallback are just memoized values like you are doing dynamic programming. “usePagination” is a good example of me using it… albeit unnecessarily.

Folder selection list ended up quite complicated, it’s another example of me simplifying implementation is with hooks. Usually you would need to make sure that all of the arguments are hooked up correctly on props, but instead you just pass down whatever comes from the hook. This is not my cleanest bit of code… I could stand to scrub it some more.

[Usage 1](https://github.com/TristanBarrowAboutTime/extern/blob/89767685a491e0f7f5a742225c959a5cd4c5c130/src/CustomReportsPage/hooks/component-hooks/useCustomReportsPage.ts#L8) 

[Usage 2](https://github.com/TristanBarrowAboutTime/extern/blob/89767685a491e0f7f5a742225c959a5cd4c5c130/src/CustomReportsPage/components/CustomReportsPage.tsx#L25)


Compare the usage to the [required arguments](https://github.com/TristanBarrowAboutTime/extern/blob/89767685a491e0f7f5a742225c959a5cd4c5c130/src/CustomReportsPage/hooks/component-hooks/folder-selection-list/useFolderSelectionList.ts#L15)

Maybe this is not good. I haven’t really come up with a verdict on how I feel about this yet. Whenever I look at it I think “meh.. I can do better” then I don’t do anything about it because I’m too lazy.
 
Hooks allow for extension. In “useSearchableSelector” I am implementing “useWithSearchbar” [line: 12](https://github.com/TristanBarrowAboutTime/extern/blob/89767685a491e0f7f5a742225c959a5cd4c5c130/src/CustomReportsPage/hooks/useSearchableSelector.ts#L12) but I am extending the behavior of it by calling one of the returned functions. [line: 33](https://github.com/TristanBarrowAboutTime/extern/blob/89767685a491e0f7f5a742225c959a5cd4c5c130/src/CustomReportsPage/hooks/useSearchableSelector.ts#L12)

Hooks are very easy to test because they are just pure functions that can return methods. My favorite tested hook is pagination: 

[usePagination](https://github.com/TristanBarrowAboutTime/extern/blob/89767685a491e0f7f5a742225c959a5cd4c5c130/src/tests/hooks/usePagination.test.ts)

Also, most of my tests are in the ControlCenter and not in extern… sry. I have many more thoughts. But I’m already kinda inundating you with info so I’ll stop. 

## Some Extra Thoughts

This is a list of some things I think about React backed up by some articles.

- React is Functional (Class based components still use a Functional Paradigm)
- React is Declarative
- Use Context very lightly
- Dependency Injection is not required in React
- Shallow Rendering allows for easy testing.
- Pure Functions are easier to test then non-pure functions
- Sources in case you are interested: 

https://lispcast.com/is-react-functional-programming/#:~:text=Even%20though%20React%20modifies%20the,can%20help%20us%20understand%20React.

“Even though React modifies the DOM, it is considered functional programming.”

https://medium.com/@andrea.chiarelli/the-functional-side-of-react-229bdb26d9a6 

“The developer approaching React is naturally led to think of it in terms of Object-Oriented Programming. The syntax itself to define a component promotes this idea… However, under the Object-Oriented dress, React hides a functional nature.” 

https://danielpedroso.com/2019/02/25/functional-programming-and-react/ 

“after all, the class keyword is ultimately just syntactic sugar - it boils down to prototypes”

https://leewarrick.com/blog/the-problem-with-context/#:~:text=The%20problem%20with%20context%20is,renders%20all%20over%20the%20place! 


“The problem with context is simple: Everything that consumes a context re-renders everytime that context’s state changes.”
“That means that if you’re consuming your context all over the place in your app, or worse, using one context for your entire app’s state, you’re causing a ton of re-renders all over the place!”
https://blog.theodo.com/2019/07/how-i-ruined-my-application-performances-by-using-react-context-instead-of-redux/ 
“In my opinion, contexts should be used for simple data that do not change often, and when it gets more complicated than that”

https://marmelab.com/blog/2019/03/13/react-dependency-injection.html 


“Dependency Injection is a popular pattern that many frameworks implement - but React.js, apparently, doesn't. It turns out React has a dependency injection system built in JSX, and you probably already use it.”
“Why doesn't React ship a Dependency Injection Container like Angular.js? Because it doesn't need it. JSX and contexts are good enough to make React applications modular and testable.”


From the React Docs

https://reactjs.org/docs/reconciliation.html 

“React provides a declarative API so that you don’t have to worry about exactly what changes on every update.”

https://reactjs.org/docs/context.html 
“Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.”
“If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.”
https://maxheiber.medium.com/no-need-for-dependency-injection-in-react-components-641182760aaa 
“When a component depends on a function, you can pass the function in as a `prop`. When a component depends on another component, shallow rendering can help keep your unit tests isolated. No dependency injection library or framework is needed for reusable, testable UI components.”

https://medium.com/ableneo/testable-javascript-functional-programming-pure-functions-756e049bfd4a 

“Testable Javascript -> Functional Programming -> Pure Functions”
