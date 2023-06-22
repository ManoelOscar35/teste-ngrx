export interface PostsModel {
    id: string;
    title: string;
    image: string;
    body: string;
    author: {
        username: string,
        name: string,
        job: string
    };
    comments: [
        {
            id: string;
            author: {
                username: string;
                name: string;
                job: string
            }
            comment: string;
        }
    ];
}