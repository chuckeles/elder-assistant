# Elder Assistant

This is a school project – website for elderly people. It's a prototype of the website. The texts are in Slovak language.

The live version is hosted here on Github using URL [chuckeles.github.io/elder-assistant](https://chuckeles.github.io/elder-assistant/).

## How to make changes

> Don't push directly to `master`, others will hate you.

1. Create a separate branch for your changes.
2. Make and commit your changes.
3. Push the branch.
4. Create a new pull request here on Github.
5. Wait for someone to approve.
6. Merge the pull request.

## Technologies

There's a handful of technologies and libraries used in this project.

- [Jekyll](http://jekyllrb.com/) - used to generate the website and host it here on Github
- [Bootstrap](https://v4-alpha.getbootstrap.com/) - style framework with a lot of components and a layout system
- [Font awesome](http://fontawesome.io/) - icons
- [jQuery](http://jquery.com/) - scripting library, makes it easier to do common tasks, nicer Javascript
- [Vue](http://vuejs.org/) - frontend library, makes dynamic components super-easy
- [SASS](http://sass-lang.com/guide) - better CSS with nesting and variables

## Installation and preparation

In order to develop the website, you need to install Jekyll locally. It's worth it, because it allows you to see your changes on the website.

1. [Install Ruby](https://www.ruby-lang.org/en/documentation/installation/)
2. Install Jekyll and its dependencies - `gem install bundler jekyll jekyll-seo-tag`
3. Clone the repository - `git clone git@github.com:chuckeles/elder-assistant.git`
4. Go into the repo directory - `cd elder-assistant`
5. Start Jekyll - `jekyll serve`

*NOTE: If you get an error about a certificate when installing the Jekyll gem (on Windows), check [this StackOverflow question](http://stackoverflow.com/questions/27573248/certificate-verify-failed-in-gem-install-foundation). The first answer's solution worked for us.*

You can leave Jekyll running, it will update the website as you change it and serve it on [localhost:4000](http://localhost:4000/).

Also, get yourself at least a little familiar with [Bootstrap components](https://v4-alpha.getbootstrap.com/components/buttons/). There's a lot of them that we can use in the project.

## Structure

The HTML files in the root directory make the webpages visible to the user. Note that these files are wrapped in `_layouts/page.html` by Jekyll (right where the `{{ content }}` is present). If you want to add something that should be visible on every page, modify `_layouts/page.html`.

Styles are in the `css` folder. Our custom styles are in `css/global.sass`, other files are for Bootstrap and Font Awesome (icons).

Scripts are in the `js` folder. Our scripts are, again, in `js/global.js`, other files are libraries.

Don't modify the library files. If you want to override something (i. e. a CSS class styling), do it in our project files.
