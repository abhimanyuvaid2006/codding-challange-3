import Joi, { ObjectSchema } from "joi";

// Item operation schemas organized by request part
export const productSchema = {

    // POST /items - Create new item
    create: {
        body: Joi.object({
            name: Joi.string().optional().min(2).max(80).messages({
                "any.required": "Name is required",
                "string.empty": "Name cannot be empty",
            }),
            sku: Joi.string().required().messages({
                "any.required": "sku is required",
                "string.empty": "sku cannot be empty",
            }),
            quantity: Joi.number().integer().optional().min(1),
                 "number.min": "price must be positive value",

            price: Joi.number().optional().min(0).messages({
                "number.min": "Price must be a positive value",
            }),
            
        }),
    },
     
    update: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Item ID is required",
                "string.empty": "Item ID cannot be empty",
            }),
        }),
        body: Joi.object({
            name: Joi.string().optional().messages({
                "string.empty": "Name cannot be empty",
            }),
            quantity: Joi.number.optional().min(0).messages({
                "number.min": "quantity mest be greater than 0",
            }),
            price: Joi.number().optional().min(0).messages({
                "number.min": "Price must greater than 0",
            }),
        }),
    },

    delete: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Post ID is required",
                "string.empty": "Post ID cannot be empty",
            }),
        }),
    },

     getById: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Post ID is required",
                "string.empty": "Post ID cannot be empty",
            }),
        }),
        query: Joi.object({
            include: Joi.string().valid("comments", "author").optional(),
        }),
    },

}


