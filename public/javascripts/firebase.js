var Firebase = require('firebase');

var ref = new Firebase("https://node-test-infinite.firebaseio.com");

var postRef = ref.child("posts");

postRef.set({
  fadibitar:{
    name = "fadibitar"
    postName = "Top 10 News"
  }
});
