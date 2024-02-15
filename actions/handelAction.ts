'use server'
import { schema } from '@/components/modal/Modal';
import { db } from '../lib/database'
import { z } from 'zod';

// Add the Blog to the database using Prisma
export const addBlock = async (data: z.infer<typeof schema>) => {

    try {
        await db.blog.create({
            data: {
                title: data.title,
                content: data.content,
            },
        })
        return (true);
    } catch (err) {
        return (false);
    }
}

// Remove the Blog from the databasee using Prisma
export const removeBlog = async (blogId: string) => {
    await db.blog.delete({
        where: {
            id: blogId,
        },
    });
};

// get all Blogs from database
export const getAllBlogs = async () => {
    try {
        const blogs = await db.blog.findMany();
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
        return blog;
    } catch (error) {
        return (null);
    }
}