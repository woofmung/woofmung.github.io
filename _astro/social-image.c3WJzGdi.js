const a="social-image.md",o="post",t="social-image",e=`
## Adding your own social image to a post

This post is an example of how to add a custom [open graph](https://ogp.me/) social image, also known as an OG image, to a blog post.
By adding the optional ogImage property to the frontmatter of a post, you opt out of [satori](https://github.com/vercel/satori) automatically generating an image for this page.

If you open this markdown file \`src/content/post/social-image.md\` you'll see the ogImage property set to an image which lives in the public folder[^1].

\`\`\`yaml
ogImage: "/social-card.png"
\`\`\`

You can view the one set for this template page [here](https://astro-cactus.chriswilliams.dev/social-card.png).

[^1]: The image itself can be located anywhere you like.
`,n={title:"Example OG Social Image",description:"An example post for Astro Cactus, detailing how to add a custom social image card in the frontmatter",publishDate:new Date(16747776e5),draft:!1,tags:["example","blog","image"],ogImage:"/social-card.png"},i={type:"content",filePath:"/home/runner/work/woofmung/woofmung/src/content/post/social-image.md",rawData:`
title: "Example OG Social Image"
publishDate: "27 January 2023"
description: "An example post for Astro Cactus, detailing how to add a custom social image card in the frontmatter"
tags: ["example", "blog", "image"]
ogImage: "/social-card.png"`};export{i as _internal,e as body,o as collection,n as data,a as id,t as slug};
