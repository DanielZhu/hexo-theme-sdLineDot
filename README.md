# sdLineDot
[![NPM version][npm-version-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![License][license-image]][npm-url] 

A brand new minimalist theme for [Hexo] drived by [Xiaodan](http://staydan.com).

- [Preview](http://hexo.io/hexo-theme-sdlinedot/)

## Installation

### Install

``` bash
$ git clone https://github.com/DanielZhu/hexo-theme-sdLineDot.git themes/sdLineDot
```

**sdLineDot requires Hexo 2.4 and above.**

### Enable

Modify `theme` setting in `_config.yml` to `sdLineDot`.

### Update

``` bash
cd themes/sdLineDot
git pull
```

## Configuration

``` yml
# Header
menu:
  Home: /
  Archives: /archives
rss: /atom.xml

# Content
excerpt_link: Read More
fancybox: true

# Sidebar
sidebar: right
widgets:
- category
- tag
- tagcloud
- archives
- recent_posts

# Miscellaneous
google_analytics:
favicon: /favicon.png
```

- **menu** - Navigation menu
- **rss** - RSS link
- **excerpt_link** - "Read More" link at the bottom of excerpted articles. `false` to hide the link.
- **fancybox** - Enable [Fancybox]
- **sidebar** - Sidebar style. You can choose `left`, `right`, `bottom` or `false`.
- **widgets** - Widgets displaying in sidebar
- **google_analytics** - Google Analytics ID
- **favicon** - Favicon path
- **twitter** - Twiiter ID
- **google_plus** - Google+ ID

## Features

### Fancybox

Landscape uses [Fancybox] to showcase your photos. You can use Markdown syntax or fancybox tag plugin to add your photos.

```
![img caption](img url)

{% fancybox img_url [img_thumbnail] [img_caption] %}
```

### Sidebar

You can put your sidebar in left side, right side or bottom of your site by editing `sidebar` setting.

Landscape provides 5 built-in widgets:

- category
- tag
- tagcloud
- archives
- recent_posts

All of them are enabled by default. You can edit them in `widget` setting.

## Development

### Requirements

- Hexo 2.4+

[Hexo]: http://zespia.tw/hexo/
[Fancybox]: http://fancyapps.com/fancybox/
[Font Awesome]: http://fontawesome.io/

[license-image]: https://img.shields.io/npm/l/hexo-theme-sdLineDot.svg?maxAge=2592000&style=flat-square
[downloads-image]: https://img.shields.io/npm/dm/hexo-theme-sdLineDot.svg?maxAge=2592000&style=flat-square
[npm-version-image]: http://img.shields.io/npm/v/hexo-theme-sdLineDot.svg?maxAge=2592000&style=flat-square
[npm-url]: https://www.npmjs.com/package/hexo-theme-sdLineDot
