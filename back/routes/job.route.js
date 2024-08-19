import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

const router = express.Router();

// Route to post a job (Admin only)
router.route("/post").post(isAuthenticated, postJob);

// Route to get all jobs (Public/Student)
router.route("/get").get(isAuthenticated, getAllJobs);

// Route to get admin jobs (Admin only)
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);

// Route to get a specific job by ID (Public/Student)
router.route("/get/:id").get(isAuthenticated, getJobById);

export default router;