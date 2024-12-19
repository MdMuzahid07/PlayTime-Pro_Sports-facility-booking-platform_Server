/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import CustomAppError from "../../errors/CustomAppError";
import { TFacility } from "./facility.interface";
import FacilityModel from "./facility.schema.model";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createFacilityIntoDB = async (files: any[], payload: TFacility) => {

  // create an facility object
  const facility: Partial<TFacility> = { ...payload };

  const isFacilityExists = await FacilityModel.findOne({
    name: payload?.name,
    description: payload?.description,
  });

  if (isFacilityExists) {
    throw new CustomAppError(
      httpStatus.CONFLICT,
      `${payload?.name} facility already exists`,
    );
  }


  if (files && payload) {
    facility.image = files?.map((file) => file.path);
  }


  const responseAfterSave = await FacilityModel.create(facility);

  const result = responseAfterSave.toObject() as Partial<TFacility>;

  // removing some property property from response after saving in DB
  if (result) {
    delete result.__v;
    delete result.createdAt;
    delete result.updatedAt;
  };

  return result;
};





const updateFacilityFromDB = async (id: string, files: any[], payload: Partial<TFacility>) => {

  // Create an update object
  const updateData: Partial<TFacility> = { ...payload };

  if (!id) {
    throw new Error("Id is required to update facility");
  }

  const isFacilityExists = await FacilityModel.findById({ _id: id });

  if (!isFacilityExists) {
    throw new Error("This facility not exists to update");
  }

  // Add the file path if a file is provided
  if (files && (files?.length > 0)) {
    updateData.image = files?.map((file: any) => file.path);
  }

  const responseAfterUpdate = await FacilityModel.findByIdAndUpdate(
    id,
    // we use $set operator to update specific field
    { $set: updateData },
    {
      new: true,
      runValidators: true
    }
  );

  const result = responseAfterUpdate?.toObject() as Partial<TFacility>;

  // removing some property property from response after saving in DB
  if (result) {
    delete result.__v;
    delete result.createdAt;
    delete result.updatedAt;
  };

  return result;
};


const deleteFacilityFromDB = async (id: string) => {


  const isFacilityExists = await FacilityModel.findById(id);

  if (isFacilityExists && isFacilityExists?.isDeleted) {
    throw new CustomAppError(httpStatus.BAD_REQUEST, "Facility already deleted");
  };


  const responseAfterSoftDelete = await FacilityModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  const result = responseAfterSoftDelete?.toObject() as Partial<TFacility>;

  // removing some property property from response after saving in DB
  if (result) {
    delete result.__v;
    delete result.createdAt;
    delete result.updatedAt;
  };


  return result;
};




const getAllFacilitiesFromDB = async () => {
  const response = await FacilityModel.find({ isDeleted: false });

  /***
   * converting array of objects to object and making it also solid js object using toObject() method  because we are getting mongodb data
   * ***/

  const result = response?.map(facility => facility?.toObject() as Partial<TFacility>);

  // removing some property from object by looping them
  if (result) {
    result.forEach((result) => {
      delete result.__v;
      delete result.createdAt;
      delete result.updatedAt;
    });
  };

  return result;
};





const getASingleFacilityFromDB = async (id: string) => {
  const result = await FacilityModel.findById(id);
  if (!result) {
    throw new Error("Facility not found by id");
  }
  return result;
};







export const FacilityServices = {
  createFacilityIntoDB,
  updateFacilityFromDB,
  deleteFacilityFromDB,
  getAllFacilitiesFromDB,
  getASingleFacilityFromDB,
};
