# About the project
Portfolio created to **share my projects and work tools**. Additionally, this project was **my first time using Next.js (and React as well) and Framer Motion**. I believe the code is not exactly clean and well-structured, but I did my best.

One of the difficulties I faced was trying to understand the famous Hooks and the re-renders they trigger. It's also worth mentioning that I had some trouble deploying to Vercel. One of the issues was capitalization in file names. Some folders and files had uppercase letters, but the paths used to access them had lowercase letters. I had forgotten that Vercel uses Linux, which is case-sensitive.

I plan to improve this in future projects. For now, I focused on making it work (and apparently, it does!).



# Website Content
The project includes the following sections: About, Design, Skills, Projects, and Statistics.

- **About**: A brief story about my journey in technology and programming. I also talk about some hobbies, what I’ve been studying, and my passion for design.
- **Design**: Showcasing my thought process when creating a visual identity for an application. There are seven steps (Base, Structure, Spacing, Typography, Colorization, Visual Effects, and Animation), each demonstrated with a news-style card showing the changes.
- **Skills**: A list of languages, frameworks, libraries, and tools I work with or am currently learning.
- **Projects**: The main focus of the portfolio. This section highlights my most relevant projects with details such as date, status (active, paused, completed), tags (personal project or full-time work), additional information, some fun facts, the tech stack, and most importantly, an image of the project with links to the Figma design, GitHub repository, and live demo.
- **Statistics**: Displays interesting programming stats about me, including "Hours Coding," "Favorite Framework," and "Top Language" (most used language). Below, there is a carousel showcasing my favorite techs.



# Tech Stack
For development, I used Next.js (React) for structuring the project, TailwindCSS for styling, Framer Motion for animations, and FuseJS to implement a fuzzy search system for projects. The design was planned using Figma, and as mentioned, the deployment was done via Vercel. No database was used; all data is stored locally in JSON files.

<table align="center">
    <tr>
        <th></th>
        <th>
            Frontend
        </th>
        <th>
            Backend
        </th>
    </tr>
    <tr>
        <th>
            Languages
        </th>
        <td>
            <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
            <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
            <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
        </td>
        <td></td>
    </tr>
     <tr>
        <th>
            Libraries
        </th>
        <td>
          <img alt="Framer Motion" src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue">
        </td>
        <td></td>
    </tr>
    <tr>
        <th>
            Frameworks
        </th>
        <td>
            <img alt="Next JS" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
            <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
            <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
        </td>
        <td></td>
    </tr>
    <tr>
        <th>
            IDE / Editor
        </th>
        <td>
            <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
            <img alt="Figma" src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white">
            <img alt="Gimp" src="https://img.shields.io/badge/Gimp-657D8B?style=for-the-badge&logo=gimp&logoColor=FFFFFF">
        </td>
        <td></td>
    </tr>
</table>



# Structure
```
├─ .gitignore
├─ .prettierrc
├─ README.md
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
├─ vercel.json
├─ public
│  ├─ about
│  ├─ design
│  ├─ projects
│  │  ├─ json
│  │  └─ preview
│  └─ skills
│     ├─ backend.json
│     ├─ frontend.json
│     ├─ icons
│     │  ├─ colorized
│     │  └─ solid
│     └─ tools.json
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  └─ projects
│  │  │     ├─ json
│  │  │     └─ preview
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ about
│  │  ├─ design
│  │  ├─ footer
│  │  ├─ menu
│  │  ├─ projects
│  │  ├─ skills
│  │  ├─ statistics
│  │  └─ ui
│  └─ context
```



# Requirements
1. Install [`Node.js`](https://nodejs.org/en) and ensure it includes the `npm` package manager.



# How to run locally
1. Run a `git clone` of the repository:
```
git clone https://github.com/LucasOkokama/portfolio-v1.git
```
2. Open the `portfolio-v1` folder and install the dependencies:
```
npm install
```
3. Start the development server:
```
npm run dev
```
4. Access in the browser:
```
http://localhost:3000
```



# Inspiration
## Major Inspirations
- [Sankalp Sinha](https://sankalpsinha.com/)
- [Nelson Lai](https://honghong.me/)
- [Enji Kusnadi](https://www.enji.dev/)
- [Igor Kowalczyk](https://igorkowalczyk.dev/)
- [Ryan Aulia](https://aulianza.id/)

## Additional Inspirations
- [Theodorus Clarence](https://theodorusclarence.com/)
- [p0](https://p0.inc/)
- [Sanidhya Verma](https://spaceportfolio.netlify.app/)

<br>
<br>

# License
```
MIT License

Copyright (c) 2025 Lucas Kazuhiro Okokama

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
