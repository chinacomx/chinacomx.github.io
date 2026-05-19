# ChinaComx Project Webpage

Our website is located at `https://chinacomx.github.io` and built by [damianodamiani](https://github.com/damianodamiani) with Gemini 3.1 Pro. It uses [GitHub Pages](https://pages.github.com) and the [Hugo](https://gohugo.io/) framework paired with the [Blowfish](https://blowfish.page/) theme.

## Requirements & Installation

To preview and work on the website on your computer, you no longer need Ruby or Jekyll. Instead, you need to install **Hugo (Extended Version)**.

You only need to do this once.

**For macOS:**
Use `homebrew` to install Hugo:

```zsh
brew install hugo

```

*(Note: Homebrew automatically installs the extended version on macOS).*

**For Windows:**
We recommend using [Chocolatey](https://chocolatey.org/):

```powershell
choco install hugo-extended

```

If you run into issues, please check the full [installation instructions by Hugo](https://gohugo.io/installation/).

## Running Locally

If you have the necessary tools installed, check out this repo in GitHub Desktop (or your preferred Git client), open it in your Terminal, and type the following:

```zsh
hugo server

```

You should see something like this:

```zsh
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop

```

Open `http://localhost:1313` in your browser. The site will automatically refresh in real-time as you save changes to your files! Press `ctrl-c` in the terminal to stop the local server.

## Content Editing: Creating New Posts

Other than with Jekyll, we use a **Page Bundle** structure in Hugo. This keeps all text and images for a single activity organized in one specific folder.

### Step-by-Step:

1. Inside the `content/activities/` folder, create a new folder. Name it using the pattern `YYYY-MM-DD-ShortTitle`.
* *Example:* `2026-05-04-CfPChineseSW`


2. Inside this new folder, create a Markdown file named **`index.md`**. All of the post's written content goes in here.
3. Place the image that will accompany the post into this exact same folder. Name this main image **`feature.jpg`** (or `feature.png`, etc.). The theme will automatically detect it and use it as the post's cover/thumbnail.

### Best Practice: Front Matter

Make sure to always include this header configuration (called "Front Matter") at the very top of your `index.md` file. Adjust the `title` and `date` fields accordingly for each new post:

```markdown
---
title: "Call for Papers for the edited volume CHINESE STAR WARS: VERNACULAR READINGS OF A GLOBAL MULTIMEDIA PHENOMENON"
date: 2026-05-04
type: "article"
---

```

## Theme Features (Blowfish)

Our site uses the Blowfish theme, which provides powerful built-in tools to make content look great without writing complex HTML.

* **[Shortcodes](https://blowfish.page/docs/shortcodes/):** These are simple snippets you can use directly inside your `index.md` files to create complex layouts. For example, you can use shortcodes to easily insert image carousels, interactive buttons, formatted timelines, or accordions directly into your text.
* **[Partials](https://blowfish.page/docs/partials/):** These are structural HTML templates used to build the overall architecture of the site (like the header, footer, or article layouts). You generally won't need to touch these for standard content editing, but they are useful to know about if you need to deeply customize the theme's core code.

## Publishing Changes and Git Workflow

As a rule, we do not add edits directly onto the `main` branch.

1. **Create a Branch:** Always create a new branch and name it in such a way that tracing it back is easy (e.g., `add-star-wars-cfp`).
2. **Work Locally:** Add your files and run `hugo server` locally to ensure everything renders correctly.
3. **Commit:** If you are satisfied, stage and commit your changes to your branch.
4. **Pull Request:** Open a Pull Request (PR) against the `main` branch.

A custom GitHub Action workflow is configured to build the Hugo site automatically. Once your PR has been merged, it will push the live site to GitHub Pages.

## Further Reading and Tutorials

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
* [Hugo Documentation](https://gohugo.io/documentation/)
* [Blowfish Theme Getting Started](https://blowfish.page/docs/welcome/)
