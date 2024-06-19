# Assignment 4

## Expo React Native Job Search App


This is a basic implementation of a job search app using Expo React Native. 


**Components:**


- **`App.js`:** 

    - The root component, responsible for:

        - Navigating between screens.

        - Rendering the main content.

- **`FeaturedJobs.js`:** 

    - Displays a list of featured job opportunities with details such as:

        - Job Title

        - Company Name

        - Salary

        - Location

- **`PopularJobs.js`:**

    - Similar to `FeaturedJobs.js`, but displays popular jobs based on user preferences or search criteria.

- **`JobCard.js`:**

    - A reusable component that displays the details of a single job in a visually appealing format.

- **`SearchBar.js`:**

    - Provides a user interface for filtering jobs based on keywords.

- **`Header.js`:**

    - A reusable component for rendering the header of each screen.

    - Includes the app logo, user profile picture, and navigation options.

- **`Navigation.js`:**

    - Manages the navigation flow between different screens using `react-navigation`.


**Layout and Styling:**


- **`expo-linear-gradient`:** 

    - Used to create visually appealing background gradients for screens and cards.

- **`expo-font`:**

    - Used to load custom fonts for improved aesthetics.

- **`styled-components`:**

    - Provides a clean and maintainable way to define styles for components.


**Data:**


- Jobs data is loaded from a mock API or a local JSON file.

- This can be replaced with a real API in a production app.


**User Interactions:**


- Users can interact with the app by:

    - Navigating between screens.

    - Searching for specific jobs.

    - Viewing details of specific jobs.
