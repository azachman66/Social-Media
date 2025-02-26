import { Request, Response } from 'express';
import { User } from '../models/index.js';

/**
 * GET All Students /students
 * @returns an array of Students
*/
export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find();

        res.json(users);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * GET Student based on id /students/:id
 * @param string id
 * @returns a single Student object
*/
// export const getUserById = async (req: Request, res: Response) => {
//     const { studentId } = req.params;
//     try {
//         const student = await Student.findById(studentId);
//         if (student) {
//             res.json({
//                 student,
//                 grade: await grade(studentId)
//             });
//         } else {
//             res.status(404).json({
//                 message: 'Student not found'
//             });
//         }
//     } catch (error: any) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// };

/**
 * POST Student /students
 * @param object student
 * @returns a single Student object
*/

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}
/**
 * DELETE Student based on id /students/:id
 * @param string id
 * @returns string 
*/

// export const deleteUser = async (req: Request, res: Response) => {
//     try {
//         const student = await Student.findOneAndDelete({ _id: req.params.studentId });

//         if (!student) {
//             return res.status(404).json({ message: 'No such student exists' });
//         }

//         const course = await Course.findOneAndUpdate(
//             { students: req.params.studentId },
//             { $pull: { students: req.params.studentId } },
//             { new: true }
//         );

//         if (!course) {
//             return res.status(404).json({
//                 message: 'Student deleted, but no courses found',
//             });
//         }

//         return res.json({ message: 'Student successfully deleted' });
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json(err);
//     }
// }