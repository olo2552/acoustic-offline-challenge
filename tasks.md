Metawork:
    - [x] Gather information from email
    - [x] Check out the JSON from the email link
    - [x] Check out documentation on API

Tests:
    - [ ] Set up StoryBook
    - [x] Set up ReactTestingLibrary
        Already used by CRA
    - [ ] Set up ReactHooksTestingLibrary
    - [ ] Set up MockServiceWorker

Dependencies:
    - [x] Figure out some simple design components
        Going with Bulma- simple, with small overhead, RWD inside the grid system
    - [ ] Ensure production dependencies have fully-restricted SemVer versions
    - [x] Axios
        I'm using axios, because it's more flexible than fetchAPI (for instance axios' interceptors), and it rejects promise on 404

Accessibility:
    - [x] normalize styles across browsers
    - [ ] Ensure semantic HTML
    - [ ] Ensure no-redundant divs are in the tree
    - [ ] `aria` tags
    - [ ] Responsive Web Design
    - [x] Internationalization

DEV:
    - [x] Set up CreateReactApp
    - [x] Link Bulma as styling library
    Asynchronicity
        - [x] Prepare Types based on email information
        - [x] Prepare useAsyncLoading hook
        - [x] Prepare SpinnerComponent
            No need to reinvent the wheel, found some nice `react-loader-spinner`
    - [ ] Prepare ArticleComponent
        - [x] Author section
        - [x] Date (use date-fns)
        - [x] Topic Title
        - [ ] Lead Image
            - use fallback in when not overriding is present
        - [ ] Tags Section
    - [x] Prepare API facade
    ErrorHandling
        - [x] Abstract 5XX errors
        
Intentionally Omitted:
    - Routing / Making it an app
        Things can grow really fast really quickly...
        If the task is to design a _component_, then it's not about implementing everything around it
    - Premature Optimization:
        Prefetching, List/Fetched elements virtualization,
        There are a lot of ways, to make it _better, faster, lighter™_, but I always ask if that's all really needed _now_
        In my opinion optimization is a champagne problem, and it's should be only done after doing UserAcceptanceTesting / additional feedback after some time
    - Respecting SelectedLayouts:
        As far as I understand, in Acoustic you can define multiple Layouts/Themes, in order your content to be more diverse across articles.
        From the code and QA perspective, it's handling multiple cases, rather than one.
        My simple app doesn't need that _now_. It can be added in different iteration though
    - Custom styling:
        Everybody is developing design system anyway...
        It doesn't really proves much for my job, and I don't have designs to follow, so it would end up much more ugly than ready-to-use modules
    - Authorization / Authentication:
        The content wasn't have any permission/tenant restrictions, thus I didn't reinvent these wheels once again
    - Naming conventions:
        In the production app I would get more context info for that article, and named the components in some other way.
        But it's only a POC, so it's good enough for me to name components as an `Article`, `UserHeader` etc
    - Implementing a thumbnail for Article:
        In my opinion in task management it's important to say enough. It could be part of the DoD, but it can be done via separate task, by other person in parallel, with smaller PRs, less mental-heavy QA reviews
    - Cross-browser testing:
        I made this on good old Thinkpad x230 with linux, don't have IE, thus I've only tested latest Brave & FF
    - Analytics
    - Sentry
    - Color constants
    - Styled components
    - State management