  <div align="center">
  <img src="https://github.com/AmrAbouElkair/Savor-Sphere/assets/83710148/1231a79d-2c99-4c65-80c1-6179ab335560" alt="mainImg"/>
  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
     <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=1786ab" alt="react" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
  </div>


## 📋 <a name="table">Table of Contents</a>

1. ![idea](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/c8e0ad20-4a63-4fa0-8c4f-6c8368ed0adf) [Introduction](#introduction)
2. 🤖 [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 📷 [Screenshots](#screenshots)
7. ![jigsaw (1)](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/316cd490-12f9-4b15-9977-f0d202c1d150) [Contribute](#contribute)


Savor Sphere. is a simple, fully responsive dark mode landing page designed for a restaurant. The website includes basic information about the restaurant's offerings and features a straightforward meal filtering method.

**Here is a live preview for the project _[Savor Sphere](https://savor-sphere.vercel.app/)_!**

## <a name="introduction"> ![idea](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/c8e0ad20-4a63-4fa0-8c4f-6c8368ed0adf) Introduction</a>

Utilized ReactJS, TailwindCSS, and TypeScript to build this project. My aim was to create a clean and user-friendly website that highlights the restaurant's menu in an attractive way, with the added functionality of dark mode for a modern touch.

## <a name="tech-stack">🤖 Tech Stack</a>

- ReactJs
- TypeScript
- Tailwind CSS
- Vite

## <a name="features">🔋 Features</a>

👉 **Home Page**: Showcases a restaurant's ambiance but also highlights its delectable meals and unique offerings.

👉 **TypeScript Types**: Utilize TypeScript to provide robust typing for enhanced code quality and better development

👉 **Responsive Website Design**: The website is designed to be visually pleasing and responsive, ensuring an optimal user experience across various devices.

👉 **Animation**: Utilize the best possible use of TailwindCss capabilities to display amazing animation.

👉 **Vite Build Tool**: Vite was used as the replacement of the antiquated, incredibly slow Create React app.

👉 **Design Pattern**: Observing the principles of React Architecture and the Design pattern

👉 **Pnpm Package Manager**: Pnpm is utilized since it is significantly quicker and more reliable than yarn and npm.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)

**Cloning the Repository**

```bash
git clone https://github.com/AmrAbouElkair/Savor-Sphere.git
cd Savor-Sphere
```

**Installation**

Install the project dependencies using npm:

```bash
pnpm inatall or npm install
```

**Running the Project**

```bash
pnpm dev or npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

</details>

<details>
<summary><code>globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

@layer components {
  .max-container {
    max-width: 1640px;
    margin: 0 auto;
  }
}

@layer base {
  button {
    @apply border border-black rounded-xl px-5 py-1;
  }
}

@layer utilities {
  .padding {
    @apply sm:px-16 px-8 sm:py-24 py-12;
  }

  .padding-x {
    @apply sm:px-16 px-8;
  }

  .padding-y {
    @apply sm:py-24 py-12;
  }

  .padding-l {
    @apply sm:pl-16 pl-8;
  }

  .padding-r {
    @apply sm:pr-16 pr-8;
  }

  .padding-t {
    @apply sm:pt-24 pt-12;
  }

  .padding-b {
    @apply sm:pb-24 pb-12;
  }
}

```
</details>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

</details>


## <a name="screenshots"> 📷 Screenshots</a>

![Savor1](https://github.com/AmrAbouElkair/Savor-Sphere/assets/83710148/1231a79d-2c99-4c65-80c1-6179ab335560)
![Savor2](https://github.com/AmrAbouElkair/Savor-Sphere/assets/83710148/ae136391-e521-4ff6-8c8d-3f66389f3d25)
![Savor3](https://github.com/AmrAbouElkair/Savor-Sphere/assets/83710148/478049e2-24bf-4ae7-8d71-267f94663fd4)

## <a name="contribute">![jigsaw](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/fa2848f1-94b6-4951-9334-fb9ec40c16a7) Contribute</a>

1. Fork the Project
2. Create your Feature Branch (git checkout -b ``new branch``)
3. Commit your Changes (git commit -m 'Add some ``commit name``)
4. Push to the Branch (git push origin ``new branch``)
5. Open a Pull Request

## MIT License

Copyright (c) 2024 Amr M.AbouElkair

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

