import { date, Schema } from "yup";

const validate = (Shema) => {
    return async (req, res, next) => {
        const body = req.body;
        const params = req.params;
        const data = {...body, ...params};
        
        console.log("data", data);
        try {
            await Schema.validate (data, {strict: true, abortEarly: false});
            next();
        } catch (error) {
            const _error = error.inner.reduce((acc, currValue) => {
                if (currValue.path && !acc[currValue.path]) {
                    acc[currValue.path] = currValue.message;
                }
                return acc;
            }, {})
            res.status(422).json(_error)
        }
    }
}

export default validate;