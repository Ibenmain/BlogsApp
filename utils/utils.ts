export type Blog = {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
}

export function ft_slice(str: string) {
    if (str.length > 80)
        return str.slice(0, 20) + "...";
    return str
}

export type Date = {}

export function formatDate(dateString?: Date) {
    const date = new Date(Date.parse(dateString as string));
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
}

export type ModalProps = {
    isopen: boolean;
    update: boolean;
    setIsopen: React.Dispatch<React.SetStateAction<boolean>>
    setUpdate: React.Dispatch<React.SetStateAction<boolean>>
}
