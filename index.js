import express from "express";
import bodyParser from "body-parser";
import { name } from "ejs";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//handling data
const welcome = {
    name: 'Welcome to my AnimeList! ❤',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem justo, porta nec vulputate in, porta sit amet libero. Curabitur vehicula dictum scelerisque. Etiam eleifend eget velit quis lobortis. Curabitur mollis, arcu at rutrum dictum, velit dolor blandit massa, dapibus varius felis dolor vel libero. Suspendisse nec mollis massa. Suspendisse in tempus ipsum, euismod aliquam quam. Phasellus eu est at velit mattis tincidunt. Sed mauris lectus, hendrerit a tortor nec, placerat commodo risus. Donec eu sem neque. Proin aliquam tellus nec est lobortis dignissim. Curabitur posuere nulla sit amet lorem aliquam convallis.",
    description2: "Pellentesque efficitur vulputate orci eget scelerisque. Fusce vel ornare purus, ac pretium sem. Aliquam vulputate ante vitae ornare sagittis. Duis eu urna sed ex aliquet tincidunt eget at sapien. Proin aliquam tristique leo, vitae ullamcorper felis vehicula in. Phasellus dignissim interdum sem, id imperdiet libero faucibus imperdiet. Aenean sodales in felis eu iaculis. Aliquam lorem ipsum, sollicitudin a luctus eget, dignissim sed odio. Fusce vel erat tellus. Pellentesque tincidunt neque ligula, nec pretium nisl aliquet at. In nulla eros, porttitor quis metus vitae, porta varius massa. Mauris et rutrum magna, et varius felis. Integer felis est, mattis ac vulputate bibendum, tristique sit amet orci. In quis maximus arcu."
}


app.get("/", (req, res)=>{

    res.render("index.ejs", {welcomePage: welcome});
});

app.get("/status", (req, res)=>{
    res.render("status.ejs");
});

app.get("/about", (req, res)=>{
  res.render("about.ejs");
});

app.get("/contact", (req, res)=>{
  res.render("contact.ejs");
});

app.post("/status", (req, res) => {

    const contentTopic = req.body["topic"];
    const contentStatus = req.body["status"];
    res.render("index.ejs", {welcomePage: welcome, titleContent: contentTopic, statusContent: contentStatus});
    // res.render("post.ejs", {titleContent: contentTopic, statusContent: contentStatus});
  });

  app.put("/status/rendel", (req, res) => {
    res.sendStatus(200);
  });
  
  app.patch("/status/rendel", (req, res) => {
    res.sendStatus(200);
  });
  
  app.delete("/status/rendel", (req, res) => {
    //Deleting
    res.sendStatus(200);
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


  

