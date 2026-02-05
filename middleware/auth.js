let succes = true;
const HARDCODED_TOKEN = "abc"; 

export const checkAuth = (req, res, next) => {
    if (succes) {
        console.log("Auth Checked");
        next();
    } else {
        console.log("Auth Failed");
        res.status(401).json({ error: 'Unauthorized' });
    }
}

export const verifyToken = (req, res, next) => {
    // 1. Get header
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Access Denied: No Authorization Header' });
    }
    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(400).json({ error: 'Invalid Header Format. Expected: Bearer <token>' });
    }

    const token = parts[1];

    if (token === HARDCODED_TOKEN) {
        console.log("Token Verified");
        next();
    } else {
        res.status(403).json({ error: 'Access Forbidden: Invalid Token' });
    }
};

export const validUserId = (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'User ID is required in URL' });
    }
    next();
}

export const checkById = (req, res, next) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ error: 'User ID is required in Body' });
    }
    next();
}