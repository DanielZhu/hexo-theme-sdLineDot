/**
 * @file Tag JS
 */
var tagsLetterNav = function () {
    var lettersNav = [];
    var separators = [['A', 'D'], ['E', 'H'], ['I', 'L'], ['M', 'P'], ['Q', 'T'], ['U', 'X'], ['Y', 'Z']];

    for (var i = 0; i < separators.length; i++) {
        lettersNav.push({start: separators[i][0], end: separators[i][1]});
    }

    return lettersNav;
};

var analyzeTags = function (tags) {
    var tagsLetterNavs = tagsLetterNav();
    var groupedTags = [];

    tags.forEach(function (tag) {
        var j = 0;

        // var letterPattern = /[a-zA-Z]/gi;
        // var patrn=/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
        if (tag.slug.charAt(j).match(/[a-zA-Z]/) !== null) {
            while (tag.slug.charAt(j).toUpperCase() < 'A' || tag.slug.charAt(j).toUpperCase() > 'Z') {
                j++;
            }

            var tagStartWith = tag.slug.charAt(j).toUpperCase();

            for (var i = 0; i < tagsLetterNavs.length; i++) {
                if (groupedTags[i] === undefined) {
                    groupedTags[i] = [];
                }

                if (tagStartWith >= tagsLetterNavs[i].start && tagStartWith <= tagsLetterNavs[i].end) {
                    groupedTags[i].push(tag);
                }
            }
        }
    });

    return groupedTags;
};

hexo.extend.helper.register('grouped_tag', function () {
    var groupedTags = analyzeTags(this.site.tags);
    var navs = tagsLetterNav();
    var tagNavActive = 0;
    var tagActiveId = null;

    var navsHtml = '';
    navsHtml += '<div class="tags-selection-navs" title="Sorted by the first English alphabet.">';

    for (var i = 0; i < navs.length; i++) {
        var nav = navs[i];
        navsHtml += '<label class="tags-selection-nav ';
        if (tagNavActive === i) {
            navsHtml += 'active';
        }

        navsHtml += '" navid="' + (nav.start + nav.end).toLowerCase() + '">' + nav.start + ' - ' + nav.end + '</label>';
    }

    navsHtml += '</div>';

    var contentHtml = '';
    contentHtml += '<div class="tags-selection-content">';

    for (var j = 0; j < navs.length; j++) {
        var nav = navs[j];
        contentHtml += ('<div id="tags-selection-content-' + (nav.start + nav.end).toLowerCase() + '" class="tags-selection-content-part">');
        for (var i = 0; i < groupedTags[j].length; i++) {
            var tag = groupedTags[j][i];
            contentHtml += '<a href="/tags/' + tag.name + '"><span class="tag-instant" tagid="' + tag._id + '">';
            if (tagActiveId !== null && tagActiveId === tag._id) {
                contentHtml += '<span class="fa fa-check"></span>';
            }
            contentHtml += (tag.slug + '<sup class="tag-selection-badge">' + tag.posts.length + '</sup></span></a>');
        }
        contentHtml += '</div>';
    }
    contentHtml += '</div>';

    return navsHtml + contentHtml;
});
