'use server'
import { db } from '../lib/db'

// Add the Blog to the database using Prisma
export const addBlock = async (title: string, content: string) => {
    console.log("add new blog");
    try {
        await db.blog.create({
            data: {
                title,
                content,
            },
        })
    } catch (err) {
        return (err);
    }
    return (true);
}

// Remove the Blog from the databasee using Prisma
export const removeBlog = async (blogId: string) => {
    try {
        await db.blog.delete({
            where: {
                id: blogId,
            },
        });
    } catch (error) {
    }
};

// get all Blogs from database
export const getAllBlogs = async () => {
    try {
        const blogs = await db.blog.findMany();
        console.log('blogs: ', blogs);
        return blogs;
    } catch (error) {
        return ([]);
    }
}

export const getBlog = async (blogId: string) => {
    try {
        const blog = await db.blog.findUnique({
            where: {
                id: blogId,
            }
        });
        console.log('blogs: ', blog);
        return blog;
    } catch (error) {
        return (null);
    }
}