
export interface userState {
    username: string;
    githubData: {
        name: string;
        bio: string;
    };
}

export interface storeState {
    user: userState;
}
