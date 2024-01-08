const exp = require("constants");
const express = require("express");
const methodOverride = require("method-override");
const app = express();
let port = 8080;
let path = require("path");
const { v4: uuidv4 } = require("uuid");
app.use(methodOverride("_method"));

// for parsing the all kind of data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//for accesing the ejs and static files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

//for parsing data to machine aunderstud data
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("ha bhai chal raha hai on 8080");
});
let posts = [
  {
    id: uuidv4(),
    username: "Tony Stark",
    content:
      "Tony Stark, portrayed by Robert Downey Jr. in the Marvel Cinematic Universe's Iron Man series, is a brilliant and charismatic billionaire, CEO of Stark Industries, and the inventor of the Iron Man suit. Introduced in the 2008 film, Stark transforms from a self-centered arms dealer to a superhero after being captured by terrorists. Using his genius intellect, he builds the powered armor to escape captivity and subsequently dedicates his life to combating evil. ",
    image:
      "data:image/jpeg;base64,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",
    postimg:
      "https://img.asmedia.epimg.net/resizer/xgCpqQeMhhwX1npviA73I6EAESw=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/IQJZUIY3QRDWTKU4SFKTCYTMC4.jpg",
  },
  {
    id: uuidv4(),
    username: "wolvearine",
    content:
      "Wolverine, also known as Logan, is a formidable and iconic character in the Marvel Universe. Gifted with adamantium claws, a powerful healing factor, and enhanced senses, Wolverine navigates a complex past marked by military experiments. As a member of the X-Men, he struggles with his animalistic instincts while using his unique abilities to fight for mutant rights.",
    image:
      "data:image/jpeg;base64,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",
    postimg:
      "data:image/jpeg;base64,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",
  },
  {
    id: uuidv4(),
    username: "Joker ",
    content:
      "The Joker is a legendary and iconic fictional character in the DC Comics universe, known for being the arch-nemesis of Batman. Often depicted with a maniacal grin and colorful, chaotic attire, the Joker is a criminal mastermind and agent of chaos. His origin is intentionally left ambiguous, adding to the mystery of the character. ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUfjsIYOL2hoCjBrU71QA7WGhoZVNEoiprw&usqp=CAU",
    postimg:
      "https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg",
  },
];
app.get("/posts", (req, res) => {
  res.render("home.ejs", { posts });
});

// for adding new post
app.post("/posts", (req, res) => {
  let { username, content, image, postimg } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content, image, postimg });
  res.redirect("/posts");
});

app.get("/posts/newpost", (req, res) => {
  res.render("newpost.ejs");
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  let showpost = posts.find((p) => id === p.id);
  res.render("show.ejs", { showpost });
});
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  let showpost = posts.find((p) => id === p.id);
  res.render("show.ejs", { showpost });
});

// Edit the post
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newcontent = req.body.content;
  let newimg = req.body.postimg;
  let post = posts.find((p) => id === p.id);
  post.content = newcontent;
  post.postimg = newimg;
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id != p.id);
  res.redirect("/posts");
});
