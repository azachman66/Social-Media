import { Request, Response } from 'express';
import { Thought } from '../models/index.js';

/**
 * GET All Courses /courses
 * @returns an array of Courses
*/
export const getAllThoughts = async(_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch(error: any){
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * GET Course based on id /course/:id
 * @param string id
 * @returns a single Course object
*/
// export const getThoughtById = async (req: Request, res: Response) => {
//     const { courseId } = req.params;
//     try {
//       const student = await Course.findById(courseId);
//       if(student) {
//         res.json(student);
//       } else {
//         res.status(404).json({
//           message: 'Volunteer not found'
//         });
//       }
//     } catch (error: any) {
//       res.status(500).json({
//         message: error.message
//       });
//     }
//   };

  /**
 * POST Course /courses
 * @param object username
 * @returns a single Course object
*/
export const createThought = async (req: Request, res: Response) => {
    try {
      const newThought = await Thought.create(
        req.body
      );
      res.status(201).json(newThought);
    } catch (error: any) {
      res.status(400).json({
        message: error.message
      });
    }
  };

/**
 * PUT Course based on id /courses/:id
 * @param object id, username
 * @returns a single Course object
*/
// export const updateThought = async (req: Request, res: Response) => {
//     try {
//       const course = await Course.findOneAndUpdate(
//         { _id: req.params.courseId },
//         { $set: req.body },
//         { runValidators: true, new: true }
//       );

//       if (!course) {
//         res.status(404).json({ message: 'No course with this id!' });
//       }

//       res.json(course)
//     } catch (error: any) {
//       res.status(400).json({
//         message: error.message
//       });
//     }
//   };

  /**
 * DELETE Course based on id /courses/:id
 * @param string id
 * @returns string 
*/
// export const deleteThought = async (req: Request, res: Response) => {
//     try {
//       const course = await Course.findOneAndDelete({ _id: req.params.courseId});
      
//       if(!course) {
//         res.status(404).json({
//           message: 'No course with that ID'
//         });
//       } else {
//         await Student.deleteMany({ _id: { $in: course.students } });
//         res.json({ message: 'Course and students deleted!' });
//       }
      
//     } catch (error: any) {
//       res.status(500).json({
//         message: error.message
//       });
//     }
//   };
