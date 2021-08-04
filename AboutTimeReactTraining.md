# About Time ReactJS Training

**Mini Outline**

**Outline:**

- Quick React Refresher
  - Virtual Dom
    - Rendering to the DOM
      - Node Manipulation
      - Style Manipulation
    - Network Requests
    - Rendering to the Virtual DOM
  - State Mismatch
  - Refs and Virtual DOM Race Conditions
- Hooks Overview and "Reactive" Programming
  - useState (state subscription)
  - useEffect (event subscription)
- Separation Of Logic and View
  - Component
    - Where is it okay to use JSX?
    - Styled Components and Syntactic JSX (simplicity is key)
  - Internal Hook
  - External Hook
    - Binding Model
    - Binding Overrides
    - Lifting State Up
- Testing 
  - No testing for Visual Components
  - Simplicity of Testing Hooks
- Map
  - Imperative to Reactive   
  - Event Subscriptions with the map
  - GeoJson Transformations
    - Features
    - Feature Properties
    - Layers
    - Sources
    - Schemes
    - Internal Source Transformations (Clustering)
- GQL
  - Types and Queries
- Controller
  - Tabs Anatomy
  - Piped Map Actions
- Network
  - Fetch (from the Component)
  - Caching
  - Subscriptions (future)

##### Background?? 

- How the Event Loop works
- Virtual DOM
- Reconciler
- Fiber Reconciler
- Is Comfortable with Hooks

### Quick React Refresher

There are two expensive things in web development.

- Rendering to the DOM
- Network Requests

React manages the former but not the later. 

###### Note on Rendering to the DOM

Styles Before Scripting

In the browser event loop Styles are far less expensive to calculate than JS
and there is a significant amount of unused real estate in the style calculation
that can be taken advantage of. We should favor using styles to implement
functionality if at all possible. Only after exhausting a Style Method of
accomplishing something should we look to the JavaScript implementation. 

#### State Mismatch

Local variables should virtually be seen as immutable. Local state that is not
React State will not persist between renders. Insure that anything that must be
mutable through renders is stored in state.

#### Reconciler

The Reconciler is really what makes React really fast

There are three trees that represent the current state of a react app. 

- The Element Tree
- The Virtual DOM
- The Real DOM

Reconciliation is the process that ends up determining how the React Element Tree ends
up getting turned into the Real DOM.

#### Fiber Reconciler 

The Fiber Reconciler is the newer algorithm (about 4 years ago) that allows element generation to be broken up on different render calls. 

#### Refs


Ref's are sometimes references to the Virtual DOM but are mostly references to the
Real DOM.

Race conditions between the Real DOM and the reconciliation algorithm can create
a race condition and cause unpredictable behavior. Also, the render method is
designed to be run over and over because it is so cheap. If you place an
expensive Real DOM manipulation in side of a render, which should be treated
like a hot loop to some extent, it can cause serious performance issues as well
as unpredictable behavior.

#### Functional Paradigm in classes

In general React uses a Functional and Reactive paradigm. the functional part
means you are not allowed to mutate data. The Reactive part means almost all of
the state in the app is subscription based. 

Even though we are using a class the reconciler still treats it as a function.
It is only concerned with the element that gets returned from render. 

If we are using Classes it might look something like this:

```tsx
class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            observable: ''
        }
    }

    onClick = () => {
        // mutating state like this does not work.
        this.state.observable = 'fail';

        // we must create a new object which follows the functional paradigm
        const newState = {
            observable: 'it works',
        }

        this.setState(newState);
    
        // with the introduction of fiber several years ago, performance is 
        // increased if we use the mutator callback version of setState.
        // Notice, even when using the mutator we still must return a pointer 
        // to a new object. We should not return the same object. In this sense 
        // we are still within a functional paradigm. 

        this.setState((oldState) => {
            const newState = { observable: 'it works' }
            return newState;
        });
    }

    render() {
        return (
            <jsx> 
                {this.state.observable /* observer or subscriber */}
                <button onClick={}>
            </jsx>
        )
    }
}
```

#### Hooks Overview

There are really just two function calls you need learn to be pretty good at 
hooks:

- useState (state subscription)
- useEffect (event subscription)

See the React Docs.

#### Separation of logic and view

There are three functions that I use to cleanly separate a component:

- The Component
- The Internal Hook
- The External Hook

These are developed in that order as needed. Some components may only need to
have the Component. Others May just require the component and the external hook.
Some might need just the internal hook and others may need all three. 

###### The Component

The Component is a representation of the Visual aspects of the component and is
the only part that is allowed to have JSX with very few exceptions. 

###### The Internal Hook 

The Internal hook is a hook that contains all of the logic that is required for
the internals of the component. It is called inside the body of the component
and is only exported from the file so it can be tested.

###### The External Hook

The External Hook is a hook that holds state and logic that is required to be
lifted up (see Lifting up state from the React Docs).

#### The Binding Model Example

**Usage:**

```tsx
const modal = useWithModal({/* Options */});

<Modal {...modal.bind} />
```

**Implementation:**

```tsx
type ModalProps = {
    title: string
    subTitle: string
    confirm: string
    deny: string
    isOpen: boolean
    onClose: () => void
    onDeny: () => void
    onConfirm: () => void
}

const Modal = ({
    title,
    subTitle,
    confirm,
    deny,
    isOpen,
    onClose,
    onDeny,
    onConfirm,
}: ModalProps) => {
    
    return (
        <>
            {isOpen && (
                <Container>
                    <ModalBox>
                        <Icon onClick={onClose}/>
                        <Title>{title}</Title>
                        <SubTitle>{subTitle}</SubTitle>
                        <ButtonGroup>
                            <Deny onClick={onDeny}>{deny}</Deny>
                            <Confirm onClick={onConfirm}>{confirm}</Confirm>
                        </ButtonGroup>
                    </ModalBox>
                </Container>
            )}
        </>
    );
}

type UseWithModalArgs = {
    title: string
    subTitle: string
    confirm: string
    deny: string
    startsOpen?: boolean
}

export const useWithModal = ({
    title,
    subTitle,
    confirm,
    deny,
    startsOpen = false
}: UseWithModalArgs) => {
    const [isOpen, setIsOpen] = useState(startsOpen);

    const open = () =>  setIsOpen(true);
    const close = () =>  setIsOpen(false);

    return {
        isOpen,
        open,
        bind: {
            title,
            subTitle,
            confirm,
            deny,
            isOpen,
            onClose: close,
            onDeny: close,
            onConfirm: close,
        } as ModalProps,
    }
}
```

#### Testing

I prefer TDD. It is also pretty hard to do. While over time I think an entire
organization should be practicing TDD as they develop, is a very large change
and should be incorporated slowly. What **should** be required is that sufficient
tests to cover the code being submitted should be submitted with the code. The
way this is accomplished can be variable for each developer as they progress and
grow with the practice of TDD but solid test coverage should not be sacrificed 
regardless.

With the separation model I do not test components that only contain "And Guards",
"Ternaries" and calls to an internal hook. This simplifies testing because DOM
queries no longer need to be made on the rendered component to determine if the
logic is sound. All complex logical operations can be tested with a test as
simple as the following:

```ts
// the simplified version
const modal = useWithModal({ startsOpen: true });

modal.onClose();

expect(modal.isOpen).toBe(false);

// a real test
const { result } = renderHook(() => useWithModal({ ...modalArgs, startsOpen: true }));

act(() => { result.current.bind.onClose() });

expect(result.current.isOpen).toBe(false);
```

Visual aspects of the component can tested by visually checking against a UI
design to insure accuracy. This unfortunately is about as good as we can do
until someone comes up with a way to check that individual pixels on the screen
correctly correspond with a given UI design, which is not likely to happen. 

Before someone mentions snapshots, snapshots insure that a change has not been
made they do not insure correctness to the design. Feel free to add a snapshot
to your components. I don't think they are particularly required as far as the
developer is visually checking the UI.

# Map

Most React libraries use React components so they can link into the Virtual DOM
and take advantage of the Fiber Reconciliation algorithm. Occasionally you will
need to use a raw javascript library. For some reason some React libraries don't
work very well in our environment, most likely because they don't mesh well with
Angular's apply system I have not been able to figure out why. The React Wrapper
around the javascript Mapbox api does not work in our environment for some
reason so we had to opt for using the raw javascript package which makes the map
more difficult to integrate with our app and it makes it less reliable but it's
what we have to work with.

For this reason I am using a lot of useEffect Calls to call various map methods
base on a state changes. One of them might look like this:

```tsx
// this is not exactly what this state looks like but its close.
const [flyToLocation, setFlyToLocation] = useState({lat:0, lon: 0});

const flyTo = (lat, lon) => {
    setFlyToLocation({ lat, lon });
}

useEffect(() => {
    if (map !== null) {
        map.flyTo(flyToLocation.lat, flyToLocation.lon);
    } 

   // whenever flyToLocation.lat or flyToLocation.lon changes, run the arrow function 
}, [flyToLocation.lat, flyToLocation.lon]);

// If I want to make the map change locations I can make a call like this

return <button onClick={() => flyTo(0, 0)}>Fly to 0, 0</button>
```

All of this may seem unnecessary but the only way we have to access the map is
with a class based object and we must retain a pointer to the same object across
renders. Every other object within react ecosystem gets re-generated as an
element every render. The only way to keep from re initializing the map every
render is to use effects like this. 

#### GeoJson Transformations

This folder is where most of the magic happens that allows things to actually show up on the map.

##### Transformation

A transformation is a function that takes in a Response object and transforms it
into an array of schemes to be put onto the map. 

##### Schemes

A Scheme is a pairing of a Source and one or more Layers.

##### Layers 

A layer is a description of how a feature should be displayed on the map and
they are most likely the most complicated part of the entire map process. The
[mapbox style spec](https://docs.mapbox.com/mapbox-gl-js/style-spec/ "style
spec") is the api description of how layers work. 

##### Sources 

Technically sources can be in several different data formats but the easiest one
to work with is GeoJson so for our purposes a Source is just a GeoJson Feature
Collection. 

##### Features 

A Feature is simply something that can end up on the map. Its a point, a line, a
polygon etc.. It has the form: 

```json
{
    "type": "Feature",
    "geometry": { /* data describing the feature */ },
    "properties": { /* extra info of your choice */ }
}
```

You can find more information on the [geojson spec](https://geojson.org/
"geojson.org") doc. Beware its a bit heavy. 

###### Feature Properties

I am making heavy use of Feature Properties to pass data such as the value of
initials to the items on the map.

##### Feature Collections

Feature Collections are very self explanatory. They are a collection of
Features.

The `feature-collections` folder contains functions that simply take in an array
of a GQL Type as input and output a Feature Collection by mapping over the array
and calling a function in the `feature` folder iteratively.


#### GQL Types and Queries

