'use server'
import { db } from '../lib/db'

export const addBlock = async (title: string, content: string) => {
    try {
        // Add the Blog to the database using Prisma
        await db.blog.create({
            data: {
                title,
                content,
                // createdAt,
            },
        })
    } catch (err) {
        return (false);
    }
    return (true);
}

export const removeBlog = async (blogId: string) => {
    try {
        // Remove the Blog from the databasee using Prisma
        await db.blog.delete({
            where: {
                id: blogId,
            },
        });
    } catch (error) {
    }
};

export const getAllBlogs = async () => {
    try {
        // get all Blogs from database
        const blogs = await db.blog.findMany();
        console.log('blogs: ', blogs);
        return blogs;
    } catch (error) {
        return ([]);
    }
}