let succes=true;
export const checkAuth = (req, res, next) => {
    if(succes){
    console.log("Auth Checked");
    next();
    }
    else{
        console.log("Auth Failed");
        res.status(401).json({ error: 'Unauthorized' });
    }
}

export const validUserId = (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        console.log("User ID is required");
        return res.status(400).json({ error: 'User ID is required' });

    }
    next();
}

export const checkById = (req, res, next) => {
    const { id } = req.body;
    if (!id) {
        console.log("Id is required in body");
        return res.status(404).json({ error: 'Id not found' });
    }
    next();
}