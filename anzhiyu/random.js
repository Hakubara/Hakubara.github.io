var posts=["2023/08/06/hello-world/","2023/08/07/test/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};