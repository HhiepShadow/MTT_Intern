const apiRequest = async (url: string = '', optionsObj: RequestInit | undefined = {}): Promise<Error | null> => {
    try {
        const response: Response = await fetch(url, optionsObj);
        if (!response.ok) {
            throw Error('Please reload the application');
        }
        return null;
    } catch (err) {
        if (err instanceof Error) {
            return err;
        } else {
            return Error("Please reload the application");
        }
    }
}

export default apiRequest;