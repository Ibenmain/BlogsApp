export type Blog = {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
}

export function ft_slice(str: string) {
    if (str.length > 80)
        return str.slice(0, 80) + "...";
    return str
}



export function formatDate(dateString: string) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString(undefined);
    return formattedDate;
  }

export const list = [
    { index: 1, name: "footBall" },
    { index: 2, name: "basketBall" },
    { index: 3, name: "vollyeBall" },
]

export type ModalProps = {
    isopen: boolean;
    update: boolean;
    setIsopen: React.Dispatch<React.SetStateAction<boolean>>
    setUpdate: React.Dispatch<React.SetStateAction<boolean>>
  }
  