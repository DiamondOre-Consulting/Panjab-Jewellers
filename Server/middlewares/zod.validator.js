import { z } from "zod";

const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  
  if (!result.success) {
    return res.status(400).json({ 
      success: false, 
      message: "Validation error", 
      errors: result.error.format(),
    });
  }

  req.validatedData = result.data; 
  next();
};

export default validate;
