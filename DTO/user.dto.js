export const validateCreateUserDTO=(req, res, next) => {
        console.log("Validating Create User DTO");
        const { name, email } = req.body;
        if (!name || !email) {
           res.status(400).json({ error: 'Name and email are required' });
           return;
        }
        next();
};