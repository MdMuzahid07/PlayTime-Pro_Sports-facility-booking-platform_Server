/* eslint-disable @typescript-eslint/no-explicit-any */
import { TTestimonials } from "./testimonials.interface";
import TestimonialModel from "./testimonials.model";


const createTestimonialIntoDB = async (payload: TTestimonials) => {

    const isExists = await TestimonialModel.find({ name: payload?.name });
    if (isExists) {
        throw new Error("already added");
    }

    const result = await TestimonialModel.create(payload);
    return result;
};





const getTestimonialsFromDB = async () => {

    const result = await TestimonialModel.find();

    return result;
};




const getATestimonialFromDB = async (id: string) => {
    const result: any = TestimonialModel?.findById(id);

    if (!result) {
        throw new Error("testimonial not found by id");
    }

    return result;
};






const updateATestimonailFromDB = async (id: string, payload: any) => {

    const result = await TestimonialModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
        runValidators: true,
    });

    return result;
};




const deleteATestimonialFromDB = async (id: any) => {
    const result = await TestimonialModel.findOneAndDelete(id);
    return result;
};



export const TestimonialService = {
    createTestimonialIntoDB,
    updateATestimonailFromDB,
    getTestimonialsFromDB,
    getATestimonialFromDB,
    deleteATestimonialFromDB
};