# Next.js Study Guide

### 📄 Introduction to Next.js
- **What is Next.js?**
  - A React framework that enables server-side rendering and static site generation for React applications.

### 📦 Setting Up
- **Creating a New Next.js App**:
```bash
npx create-next-app@latest my-next-app
cd my-next-app
```

### 📋 Project Structure
- **Key Directories**:
  - `pages/`: Contains the application's routes.
  - `public/`: Static assets like images and fonts.
  - `styles/`: CSS files for styling.

### 🔄 Pages and Routing
- **Creating a New Page**:
```javascript
// pages/about.js
export default function About() {
    return <h1>About Us</h1>;
}
```
- **Dynamic Routing**:
```javascript
// pages/posts/[id].js
import { useRouter } from 'next/router';

export default function Post() {
    const router = useRouter();
    const { id } = router.query;

    return <h1>Post: {id}</h1>;
}
```

### 📚 Static Generation
- **Using `getStaticProps`**:
```javascript
// pages/index.js
export async function getStaticProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}

export default function Home({ data }) {
    return <div>{JSON.stringify(data)}</div>;
}
```

### 🔄 Server-Side Rendering
- **Using `getServerSideProps`**:
```javascript
// pages/index.js
export async function getServerSideProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}
```

### 📦 API Routes
- **Creating an API Route**:
```javascript
// pages/api/hello.js
export default function handler(req, res) {
    res.status(200).json({ message: 'Hello, World!' });
}
```

### 🔄 Styling
- **Using CSS Modules**:
```javascript
// styles/Home.module.css
.title {
    color: blue;
}

// pages/index.js
import styles from '../styles/Home.module.css';

export default function Home() {
    return <h1 className={styles.title}>Welcome to Next.js!</h1>;
}
```

### 📋 Image Optimization
- **Using the `next/image` Component**:
```javascript
import Image from 'next/image';

export default function Home() {
    return (
        <Image
            src="/images/my-image.jpg"
            alt="My Image"
            width={500}
            height={300}
        />
    );
}
```

### 🔄 Deployment
- **Deploying to Vercel**:
  - Push your code to a Git repository and connect it to [Vercel](https://vercel.com/) for automatic deployments.

### 📜 Environment Variables
- **Using Environment Variables**:
  - Create a `.env.local` file:
```
NEXT_PUBLIC_API_URL=https://api.example.com
```
- **Accessing Environment Variables**:
```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```
