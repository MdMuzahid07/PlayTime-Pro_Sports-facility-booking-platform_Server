import express from "express";
import requestValidator from "../../middlewares/requestValidator";
import { TestimonialsValidation } from "./testimonials.validation";
import { TestimonialController } from "./testimonials.controller";


const router = express.Router();

router.post(
    "/add-testimonial",
    // requestValidator(TestimonialsValidation.testimonialsValidationSchema),
    TestimonialController.addTestimonial
);

router.get(
    "/",
    TestimonialController.getAllTestimonials
);

router.get(
    "/:testimonialId",
    TestimonialController.getASingleTestimonial
);

router.patch(
    "/:testimonialId",
    requestValidator(TestimonialsValidation.testimonialsUpdateValidationSchema),
    TestimonialController.updateATestimonial
);

router.delete(
    "/:testimonialId",
    TestimonialController.deleteATestimonial
);


export const TestimonialRoutes = router;