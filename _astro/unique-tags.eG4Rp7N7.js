const t="unique-tags.md",e="post",s="unique-tags",n=`
## This post is to test zod transform

If you open the file \`src/content/post/unique-tags.md\`, the tags array has a number of duplicate blog strings of various cases.

These are removed as part of the removeDupsAndLowercase function found in \`src/content/config.ts\`.
`,o={title:"Unique tags validation",description:"This post is used for validating if duplicate tags are removed, regardless of the string case",publishDate:new Date(16750368e5),draft:!1,tags:["blog","test"]},a={type:"content",filePath:"/home/runner/work/woofmung/woofmung/src/content/post/unique-tags.md",rawData:`
title: "Unique tags validation"
publishDate: "30 January 2023"
description: "This post is used for validating if duplicate tags are removed, regardless of the string case"
tags: ["blog", "blog", "Blog", "test", "bloG", "Test", "BLOG"]`};export{a as _internal,n as body,e as collection,o as data,t as id,s as slug};
