const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const listing = require("./models/listing");
const ejsMate = require("ejs-mate");

const methodOverride = require("method-override");

app.set("views",path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

main()
.then(() => {
    console.log("connected!");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

app.get("/testlisting", async(req, res) => {
    let sample = new listing({
        title: "my new villa",
        description : "by the beach",
        price :1220,
        location: "Goa",
        country :"india"
    });
    await sample.save();
    console.log("sample saved");
    res.send("successful...");
    
});

//index route

app.get("/listings", async(req, res) => {
   const allListings = await listing.find({});
   res.render("./listings/index.ejs", {allListings});
   
});

//show route
//shows a specific listing by id

app.get("/listing/:id", async (req, res) => {
    let { id }= req.params;
    const listingById = await listing.findById(id);

    res.render("./listings/show.ejs", {listingById});
});

//new route to create new listing

app.get("/listings/new", async(req, res) => {
    res.render("./listings/new.ejs");

});

//post req for adding new listing to index

app.post("/listings" , async(req, res) => {

    const newListing = new listing(req.body.listing); //object

    await newListing.save();
   
    res.redirect("/listings");
});

//edit route

app.get("/listing/:id/edit", async(req, res) => {
     
    let { id }= req.params;
    const listingById = await listing.findById(id);
    res.render("./listings/edit.ejs", {listingById});

});

//update route

app.put("/listings/:id", async(req, res) => {
     
    let {id} = req.params;
    await listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listing/${id}`);
});

//delete route

app.delete("/listings/:id" , async(req, res) =>{

    let {id} = req.params;
    let deletedListing = await listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
     
});

app.get("/", (req, res) => {
    res.send("home page");
});

app.listen(8080,()=>{
    console.log("app is listening!");
});