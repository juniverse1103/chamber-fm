# Design and Asset Guidance

This directory (`/public`) is the home for all static assets used in the Chamber.fm web application.

## Purpose

In a Next.js project, the `public` directory is used to serve static files like images, fonts, icons, and other media. Files placed here can be referenced directly from the root of your application's URL.

For example, a file located at `public/logo.svg` can be accessed at `http://your-domain.com/logo.svg`.

## Asset Types

### 1. Logos

-   **Primary Logo:** The main site logo should be placed here.
    -   **Filename:** `logo.svg` (preferred) or `logo.png`.
    -   **Usage:** Use the `next/image` component to display the logo in components like the `Header` for optimal performance and accessibility.
    ```tsx
    import Image from 'next/image';

    <Image src="/logo.svg" alt="Chamber.fm Logo" width={120} height={40} />
    ```

### 2. General Images & Illustrations

-   Any other images or illustrations used across the site should also be placed here.
-   Use descriptive filenames (e.g., `hero-background.jpg`, `feature-illustration.svg`).

### 3. Fonts

-   If you are self-hosting fonts, create a `/fonts` subdirectory (`public/fonts`) to store the font files (e.g., `.woff2`).

## Favicons and App Icons

**IMPORTANT:** Do **NOT** place `favicon.ico` or other primary app icons in this directory.

According to modern Next.js conventions, these files should be placed directly in the **`/apps/web/app`** directory. This allows Next.js to automatically handle the necessary `<link>` tags in the document `<head>`.

-   **`favicon.ico`**: The classic browser favicon.
    -   **Location:** `/apps/web/app/favicon.ico`
    -   **Dimensions:** An `.ico` file should contain multiple sizes (e.g., 16x16, 32x32, 48x48).

-   **`icon.png` or `icon.svg`**: The main app icon for modern browsers and PWA manifests.
    -   **Location:** `/apps/web/app/icon.png`
    -   **Dimensions:** Provide a single, high-resolution square image. 512x512 is a safe and recommended size. Next.js uses this file to automatically generate other required sizes.

-   **`apple-icon.png`**: The icon for iOS devices when a user adds the site to their home screen.
    -   **Location:** `/apps/web/app/apple-icon.png`
    -   **Dimensions:** Must be 180x180 pixels. Do not add any special effects or rounded corners; iOS will handle this automatically.

## Best Practices

-   **Optimize Images:** Before adding images, ensure they are optimized for the web to improve site performance. Use tools like [ImageOptim](https://imageoptim.com/) or [Squoosh](https://squoosh.app/).
-   **Use SVG for Logos and Icons:** Whenever possible, use SVG for logos and icons. They are lightweight, scalable, and will look sharp on all screen resolutions.
-   **Keep it Organized:** For larger projects, consider creating subdirectories within `public` to organize assets (e.g., `/images`, `/icons`, `/videos`).
