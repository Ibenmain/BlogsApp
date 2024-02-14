'use server'
import { db } from '../lib/db'
import { string } from 'prop-types';

export const addBlock = async (title: string, content: string) => {
    try {
    const blogs = await db.blog.create({
        data: {
            title,
            content,
        },
    })
    } catch (err) {
        console.log(err);
        return (false);
    }   
    return (true);
}

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
