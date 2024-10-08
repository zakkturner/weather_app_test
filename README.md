# Weather App 

## 
<a id="readme-top"></a>





<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

I decided to style this app using mobile first design to make it easier for responsive design. I used BEM to provide a modular structure to the 
html and css. In a real project I would most likely use SCSS for nesting styles for better maintainability. I also used GSAP as a bonus to show 
off some of my animation skills.    

If I had more time instead of saving the zip codes 
to local storage I would have a user auth system with php and allow users to sign in and save the zips/locations to a mysql db. For readability and 
clean 
code, I 
placed the variables at the top of the JS file, functions below the vars and eventlisteners at the bottom.   In a real project I would have
probably separated the js
into their own files and imported with JS modules. 

When the user lands on the site, the 
app checks if there is already a zipcode saved to local storage. If there is it runs the fetchWeather function, if not, it returns and then the 
app waits for a user to enter a zipcode



<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With



* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.


* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation



1. Get a free API Key at [https://www.accuweather.com/](https://www.accuweather.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/zakkturner/weather_app_test
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
6. Start the app server
    ```sh
    npm start
    ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>








<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Zach Turner - [www.zach-turner.com](https://zach-turner.com) - zakkturner1993@gmail.com

Project Link: [https://github.com/zakkturner/weather_app_test] (https://github.com/zakkturner/weather_app_test)

<p align="right">(<a href="#readme-top">back to top</a>)</p>






