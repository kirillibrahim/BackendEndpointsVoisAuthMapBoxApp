import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import {User} from "./models/user";
import { Polygon } from './models/polygon';
import {getRandomInt} from "./constants/helpers";
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// In-memory user storage (for demonstration purposes)
const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: "123456" },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: "123456" },
    // Add more users
  ];

app.post('/api/register', (req: Request, res: Response) => {
  const { name, email, password } = req.body as User;

  // Check if the user already exists
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  let id = getRandomInt(1,1000);
  const newUser: User = { id, name, email, password };
  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/api/login', (req: Request, res: Response) => {
  const { email, password } = req.body as User;

  // Check if the user exists
  const user = users.find((u) => u.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful' });
});


  
  // Define a route to fetch user data
  app.get('/api/users', (req: Request, res: Response) => {
    res.json(users);
  });

  // In-memory data store for polygons (for demonstration purposes)
const polygons: Polygon[] = [
    { id: '1', reg_name: 'Polygon 1' },
    { id: '2', reg_name: 'Polygon 2' },
    { id: '3', reg_name: 'Polygon 3' },
    // Add more polygons as needed
  ];
  
  // Get all polygons to be populated in the dropdown list
  app.get('/api/polygons', (req: Request, res: Response) => {
    const polygonList = polygons.map((polygon) => ({
      id: polygon.id,
      reg_name: polygon.reg_name,
    }));
    res.json(polygonList);
  });
  
  // Get the details of a single polygon and highlight it on the map
  app.get('/polygon/:id', (req: Request, res: Response) => {
    const polygonId = req.params.id;
    const polygon = polygons.find((p) => p.id === polygonId);
  
    if (polygon) {
      res.json(polygon);
    } else {
      res.status(404).json({ message: 'Polygon not found' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});