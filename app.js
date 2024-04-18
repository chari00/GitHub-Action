import express from "express";
import mockData from "./mockData.js";
import morgan from "morgan";
import { v4 as uuidv4 } from 'uuid';


const app = express();
app.use(express.json()); // for parsing application/json
app.use(morgan('dev')); // Add Morgan middleware to log HTTP requests
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'



//listener to test the server
app.get("/", (req, res)=> {
  //try and catch block to handle errors
    try {
      //return a json response and a success message
        res.status(200).json({success: true, message: "Hello from the home page!" });
    } catch (error) {
      //return a json response and a failure message
        res.status(404).json({ success: false, message: "Page not found" });
    }
});
//listen for request to get the data list
app.get("/mockData", (req, res)=> {
  //try and catch block to handle errors
    try {
      //return a json response and the mock data
        res.status(200).json({success: true, payload: mockData});
    } catch (error) {
      //return a json response and a failure message
        res.status(404).json({ success: false, message: "Page not found" });
    }
});

//listen for request to get the person id 
app.get("/mockData/:id", (req, res)=> {
  //try and catch block to handle errors
  try {
    //declare a variable to hold the id and get the id from the request parameters
    const id  = req.params.id;
    console.log(id);
    //find the person with the id 
    const person = mockData.find((person) => person.id === id);
    console.log(person);
    //check if the id is not found return error message
    if (person) {
      //return a json response and the person details
      res.status(200).json({ success: true, payload: person });
    } else {
      res.status(404).json({ success: false, message: "Person ID is not found" });
    }
  } catch (error) {
      //return a json response and a failure message
      res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});


//post
//listen for post request
app.post("/mockData", (req, res) => {
  try {
      // Extract the data from the request body
      const newData = req.body;

      // Generate a new unique ID for the new person
      const id = uuidv4();

      // Create a new person object with the generated ID and the provided data
      const newPerson = { id, ...newData };

      // Add the new person to the mockData array
      mockData.push(newPerson);

      // Send a success response with the newly created person
      res.status(201).json({ success: true, message: "Person created successfully", payload: newPerson });
  } catch (error) {
      // If an error occurs, return a 500 error
      res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});


//patch
//create a PATCH listener
app.patch("/mockData/:id", (req, res) => {
  try {
    //assign the id and new data to variables
    const id = req.params.id;
    const newData = req.body;
    // Find the index of the person with the specified ID
    const index = mockData.findIndex((person) => person.id === Number(id));
    // If the person is found, update its details
    if (index !== -1) {
      mockData[index] = { ...mockData[index], ...newData }; // Merge the existing data with the updated data
      res.status(200).json({ success: true, message: "Person details updated successfully", payload: mockData[index] });
    } else {
      // If the person is not found, return a 404 error
      res.status(404).json({ success: false, message: "Person detail not found" });
    }
  } catch (error) {
    // If an error occurs, return a 500 error
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

//delete
//create a delete listener
app.delete("/mockData/:id", (req, res) => {
  try {
    const id = req.params.id;
    // Find the index of the person with the specified ID
    const index = mockData.findIndex((person) => person.id === Number(id));
    // If the person is found, remove it from the array
    if (index !== -1) {
      mockData.splice(index, 1);
      res.status(200).json({ success: true, message: "Person deleted successfully" });
    } else {
      // If the person is not found, return a 404 error
      res.status(404).json({ success: false, message: "Person detail not found" });
    }
  } catch (error) {
    // If an error occurs, return a 500 error
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});



export default app;