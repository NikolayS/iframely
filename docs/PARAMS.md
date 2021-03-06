# Optional API parameters


You may configure API in [your API settings](https://iframely.com/settings). Plus send filters in your query-string for each API call individually. If not given with an API call, your defaults will be used. If you haven't set up your preferences, the cloud-wide settings will be used.


All these parameters are optional. If not given, you will still receive all relevant information in `rel` attributes of [Iframely API](https://iframely.com/docs/iframely-api) (not in [oEmbed](https://iframely.com/docs/oembed-api) though).


 - `iframe=true` or `iframe=1` - activates [URL shortener](https://iframely.com/docs/url-shortener) and will return the hosted iframes or [summary cards](https://iframely.com/docs).

 - `autoplay=true` or `1` - will give preference to `autoplay` media and will try to return it as primary `html`. Check for `autoplay` in primary `rel` to verify.

 - `ssl=true` or `1` - will return only embeds that can be used under HTTPs without active SSL mixed-content warnings (images and mp4 videos trigger only passive warnings and thus will pass this check).

 - `html5=true` or `1`- will return only embeds that can be viewed on mobile devices or desktops without Flash plugin installed.

 - `media=true` or `1`- "prefer media-only". For some publishers, Iframely knows status-like `app` embeds AND simple media, such as photos or video. This option will make Iframely return actual media in the `html` field instead of branded embeds.  It affects, for example, Instagram, Tumblr, Imgur, Pinterest (for videos), etc.

 - `maxwidth=` in pixels will return only embeds that do not exceed this width. It affects the rare cases of fixed-width embeds as in most cases Iframely gives the responsive embed codes. However, this parameter is important for Facebook posts and Pinterest, as it is passed into embed code of those providers to adjust its width.

 - `origin=` - optional tag text value that will help you later search links in your dashboard. It represents the hashtag  E.g. project or chat room name, category, app, if you got several, etc.

 - `callback` - name of a JavaScript function, if you’d like response to be wrapped as JSONP.


Also, for [oEmbed API](https://iframely.com/docs/oembed-api) only:

 - there's `format=xml` parameter - if you'd like to get your oEmbed as XML.

 - But no `autoplay` parameter. oEmbed never returns the media that autoplays. However, If you're wrapping embed codes with [smart iFrames](https://iframely.com/docs/iFrames) using API with `iframe=true`, the autoplay media will be returned with a [special card](https://iframely.com/docs/widgets).



