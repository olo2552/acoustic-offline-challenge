Metawork:
    - [x] Gather information from email
    - [x] Check out the JSON from the email link
    - [x] Check out documentation on API

Tests:
    - [-] Set up StoryBook
    - [x] Set up ReactTestingLibrary
        Already used by CRA
    - [-] Set up ReactHooksTestingLibrary
    - [x] Set up MockServiceWorker

Dependencies:
    - [x] Figure out some simple design components
        Going with Bulma- simple, with small overhead, RWD inside the grid system
    - [x] Ensure production dependencies have fully-restricted SemVer versions
    - [x] Axios
        I'm using axios, because it's more flexible than fetchAPI (for instance axios' interceptors), and it rejects promise on 404

Accessibility:
    - [x] normalize styles across browsers
    - [-] Ensure semantic HTML
    - [-] Ensure no-redundant divs are in the tree
    - [-] `aria` tags
    - [x] Responsive Web Design
    - [x] Internationalization

DEV:
    - [x] Set up CreateReactApp
    - [x] Link Bulma as styling library
    Asynchronicity
        - [x] Prepare Types based on email information
        - [x] Prepare useAsyncLoading hook
        - [x] Prepare SpinnerComponent
            No need to reinvent the wheel, found some nice `react-loader-spinner`
    - [x] Prepare ArticleComponent
        - [x] Author section
        - [x] Date (use date-fns)
        - [x] Topic Title
        - [x] Lead Image
            - [-] use fallback in when not overriding is present
        - [x] Tags Section
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
        I made this on good old Thinkpad x230 with linux, don't have IE, thus I've only tested latest Brave & FF, also, the simlulator of mobile devices was killing my machine unfortunately
    - Analytics
    - Sentry
        Just as analytics- You ALWAYS want to know, that something popped out on a production. Always, period. But here, it would only take time to setup
    - Color constants
        - I always use constants for color pallette, but here it seemed like an overkill
    - State management
        I could hook up Redux, or Mobx for state amnegement caching and so on, but here it would be total overkill, only for bragging about the technology knowledge
    - Checking he type corner-cases in unit tests
        That's why you have typescript- if you use it well, and you trust your type-checking, you gain it for 'free'
    - Testing internationalization
        Of course it can be done, but time's limited and we could add it as separate task
    - Respecting backend error codes
        I didn't want to ping you guys on email, what are the backend codes for error. I would do it, but it's only a recruitment task
        
What I wasn't able to do:
    - stricter RWD
        - didn't had the time to make the author / createdAt section collapsing on mobile devices
    - Fallback to asset, when no renditions are applied to MainImage. There could also be more rendition, and I always seek for lead rendition. The additional business logic should be added, but I didn't want to bother you with asking about that
    - test useAsyncValue as standalone hook
        - I know there is a tool called react-hooks-testing-library, but I didn't had time to test it. Normally this would be the blocker, but I've tested the AsyncArticleComponent, so these tests gives me the confidence of hook working correctly. But normally, I would test it, since async flow hook is crucial for entire system
    - depending on UseMemo in useAsyncValue hook. You shouldn't do it- it only should serve the purpose of rendering optimization, and I depend on it, not to make tons of requests.
        I wanted to write custom hook for that, since in Toucan we are using overly engineered HoC for that. I had fun writing that, but I've observed hooks solution is not so robust as HoC
    - Typescript typings:
        - Some of them may be incorrect, I used `as` or `any` here and there. Normally I avoid doing that at all cost, but we have to be pragmatic in the same place
        - typings of the API is not what I'm proud of. I know it could be done better, without so many assumptions, but I would need more info, and I didn't find everything in docs I was given
    - Accessibility:
        - It's a veeeeery broad term, but I've never needed to make a site accessible. Everything I was doing was behind the login page, and we never supported WCAG compilance
        - I've user semantic HTML overall, but I'm not confident, that this is state-of-the-art solution
    - GIT history
        - Normally I'm doing smaller commits, have better history for `git bisect`, and sometimes I rebase onto base branch to rename commits, squash redundant commits, but here I wasn't so strict about myself- I was writing it more for fun and to test new things actually
        - Commit messages are also not declarative. Rebase would help here of course
     - Better documentation
        - Custom readme with hints would be nice