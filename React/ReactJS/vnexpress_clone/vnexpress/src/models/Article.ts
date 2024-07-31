export type Article = {
    id: number;
    title: string;
    content: string;
    img: string;
    likes?: number;
    shares?: number;
    address?: string;
    topic?: string;
    time: Date;
}