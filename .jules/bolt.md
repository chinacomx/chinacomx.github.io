## 2024-05-12 - Optimized Image Carousel Fetching
**Learning:** Sequential await loops on independent network requests cause severe LCP delays on the frontend, especially when fetching multiple GitHub API endpoints for images.
**Action:** Replaced sequential `for...of` loops with parallel map + `Promise.allSettled` for a huge performance boost and higher resilience without architectural changes.
