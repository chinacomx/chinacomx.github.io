# ChinaComx Project Webpage
![ChinaComx](https://github.com/chinacomx/chinacomx.github.io/blob/main/assets/images/chinacomx-logo.png)

Our new website is located at `https://chinacomx.github.io` and build using [GitHub pages](https://pages.github.com). We use a custom-made theme for [Jekyll](https://jekyllrb.com/) by [damianodamiani](https://github.com/damianodamiani) with GPT-4o. 

## Requirements
To preview and work on the website on your computer you need to have a recent version of `ruby` and and of `jekyll` installed. If you run into issues with your installation please check the full [installation](https://jekyllrb.com/docs/installation/macos/) instructions by jekyll.

On macOS 13 or higher, you also need to have 'Xcode' or 'Command Line Tools for Xcode' installed. As the full version of Xcode is quite heavy, having the command line tools installed is also sufficient. You can download the installation files [here](https://developer.apple.com/download/all/).

If you maintain multiple sites, we recommend using [rbenv](https://github.com/rbenv/rbenv) to manage the parallel installation of mutliple ruby environments. 

## Installation
You only need to do this once. Use `homebrew` to install the latest ruby.
1.  Either install the latest ruby for your system
    ```zsh
    brew install ruby
    ```
    or use `rbenv`:
    ```shell
    rbenv install 2.7.2
    ```

    (rbenv is recommended for macOS on apple silicon)

1.  Then add ruby to your path (not necessary with `rbnev`)
    ```zsh
    echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
    ```
1.  Now install jekyll
    ```zsh
    gem install bundler jekyll
    ```

Note: If you are still using `bash` instead of `zsh` type `brew info ruby` to see the correct command for your system.
For `rbenv` users drop the `--user-install` flag when installing gems.

### Upgrading with Homebrew
The current stable version of ruby is 3.3.3.  You can check your ruby version with:

```
ruby -v
```

To upgrade to the latest rbenv and update ruby-build with newly released Ruby versions, upgrade the Homebrew packages:

```
brew upgrade rbenv ruby-build
```

### Running locally
Upon first installation or upgrading ruby to a new version, you should run:

```
bundle install
```
and then
```
bundle update
```

If you have the necessary tools installed, check out this repo in GitHub Desktop then open  it in your Terminal and type the following:

```zsh
bundle exec jekyll serve
```

You should see something like this:

```zsh
...
Server address: http://127.0.0.1:4000
Server running... press ctrl-c to stop.
```

Open the [server address](http://127.0.0.1:4000) in your browser and you can see what your changes will look like on the webpage.

You would normally press `ctrl-c` to stop the server in the terminal window. If you can no longer locate that terminal here is a handy shortcut to stop the local server from a new terminal.
```
ps aux |grep jekyll |awk '{print $2}' | xargs kill -9
```

### Content editing and publishing changes
As a rule, we do not add edits directly onto the main branch. Always create a new branch and name it in such a way that tracing it back is esay. Add all the changes to the branch locally, run locally to see if all works fine. If you're satisfied, you can proceed to publishing and commiting the chagnes.

As you are most likely to mainly work on adding new posts, please make sure to follow a correct naming pattern for new posts:

```
2024-10-01-exciting-news.md
```

And also make sure to always include this header - with accordingly adjusted `title` `date` and `image` fields - in each new post too:

```
---
layout: post
title: "Exciting News" 
date: 2024-10-01
categories: jekyll update
image: /assets/images/AddImageHere.jpg
---
```

To publish you changes commit them into their own branch and open a pull request against the `main` branch. A GitHub workflow will build the site and push to `gh-pages` automatically after your PR has been merged. Do **not** commit changes to `gh-pages` directly.

### Further Reading and Tutorials
-   [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
-   [GitHub Pages Documentation](https://help.github.com/en/github/working-with-github-pages)
-   [Programming Historian: Jekyll gh-pages Tutorial](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages)
