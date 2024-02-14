'use server'
import { db } from '../lib/db'
import { string } from 'prop-types';

export const addBlock = async (title: string, content: string) => {
    try {
        // Add the Blog to the table using Prisma
        const çç = await db.blog.create({
            data: {
                title,
                content,
            },
        })
        console.log(`User with ID ${deletedUser.id} has been removed.`);
    } catch (err) {
        console.log(err);
        return (false);
    }
    return (true);
}


const removeUser = async (userId: string) => {
    try {
        // Remove the Blog from the table using Prisma
        const deletedUser = await db.blog.delete({
            where: {
                id: userId,
            },
        });

        console.log(`User with ID ${deletedUser.id} has been removed.`);
    } catch (error) {
        console.error('Error while deleting user:', error);
    }
};

// export const removeBlock = async (id: string) => {
//     try {
//     const blogs = await db.blog.create({
//         data: {
//             title: string,
//             content: string,
//         },
//     })
//     } catch (err) {
//         console.log(err);
//         return (false);
//     }   
//     return (true);
// }
