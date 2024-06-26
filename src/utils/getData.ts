import {
  GetEAcademicTitle,
  GetEDegree,
  GetETypeOfService,
} from "@/assets/contains/emun";
import {
  EDayOfWeed,
  EGender,
  ETypeOfService,
  EnumBlogType,
  Schedule,
} from "@/graphql/webbooking-service.generated";

export const getEnumValueGender = (input: string): EGender => {
  switch (input) {
    case "Nam":
      return EGender.Male;
    case "Nữ":
      return EGender.Female;
    default:
      return EGender.Male;
  }
};

export const getLabelDayOfWeek = (input: string, lan: "vn" | "us"): string => {
  if (lan === "vn") return input;
  else {
    switch (input) {
      case "2":
        return EDayOfWeed.Monday;
      case "3":
        return EDayOfWeed.Tuesday;
      case "4":
        return EDayOfWeed.Wednesday;
      case "5":
        return EDayOfWeed.Thursday;
      case "6":
        return EDayOfWeed.Friday;
      case "7":
        return EDayOfWeed.Saturday;
      case "Chủ nhật":
        return EDayOfWeed.Sunday;
      default:
        return EDayOfWeed.Sunday;
    }
  }
};
export const getDegree = (
  input: string | undefined,
  lan: "vn" | "us"
): string => {
  if (lan === "vn")
    switch (input) {
      case GetEDegree.Doctor:
        return "Bác sĩ";
      case GetEDegree.DoctorS1:
        return "Bác sĩ chuyên khoa I";
      case GetEDegree.DoctorS2:
        return "Bác sĩ chuyên khoa II";
      case GetEDegree.Doctorate:
        return "Tiến sĩ bác sĩ";
      case GetEDegree.MasterDoctor:
        return "Thạch sĩ bác sĩ";

      default:
        return "Bác sĩ";
    }
  else {
    switch (input) {
      case GetEDegree.Doctor:
        return "Doctor";
      case GetEDegree.DoctorS1:
        return "Specialist Doctor I";
      case GetEDegree.DoctorS2:
        return "Specialist Doctor II";
      case GetEDegree.Doctorate:
        return "Doctorate Doctor";
      case GetEDegree.MasterDoctor:
        return "Master Doctor";

      default:
        return "Doctor";
    }
  }
};
export const getAcademiTitle = (
  input: string,
  lan: "vn" | "us"
): string | undefined => {
  if (lan === "vn")
    switch (input) {
      case GetEAcademicTitle.Professor:
        return "Giáo sư";
      case GetEAcademicTitle.Professor:
        return "Phó giáo sư";
      default:
        return undefined;
    }
  else {
    switch (input) {
      case GetEAcademicTitle.Professor:
        return "Professor";
      case GetEAcademicTitle.AssociateProfesso:
        return "Associate Professor";
      default:
        return undefined;
    }
  }
};

export const getSchedule = (
  schedules: Schedule[] | undefined,
  lan: "vn" | "us"
): string | undefined => {
  if (schedules) {
    var result: string = "";
    schedules.map((s, i) => {
      if (i !== 0 && i !== schedules.length - 1)
        result += ", " + getLabelDayOfWeek(s.dayOfWeek, lan);
      else result += " " + getLabelDayOfWeek(s.dayOfWeek, lan);
    });
    return result;
  }
  return undefined;
};
export const getEnumValueDayOfWeek = (input: string): EDayOfWeed => {
  switch (input) {
    case "2":
      return EDayOfWeed.Monday;
    case "3":
      return EDayOfWeed.Tuesday;
    case "4":
      return EDayOfWeed.Wednesday;
    case "5":
      return EDayOfWeed.Thursday;
    case "6":
      return EDayOfWeed.Friday;
    case "7":
      return EDayOfWeed.Saturday;
    case "Chủ nhật":
      return EDayOfWeed.Sunday;
    default:
      return EDayOfWeed.Sunday;
  }
};
export const getEnumBlogType = (
  input: string | undefined
): EnumBlogType | undefined => {
  switch (input) {
    case "Health":
      return EnumBlogType.Health;
    case "Medical":
      return EnumBlogType.Medical;
    case "Service":
      return EnumBlogType.Service;
    default:
      return undefined;
  }
};

export const getEnumValueTypeOfService = (input: string): ETypeOfService => {
  switch (input) {
    case GetETypeOfService.Doctor:
      return ETypeOfService.Doctor;

    case GetETypeOfService.Vaccine:
      return ETypeOfService.Vaccine;

    case GetETypeOfService.Package:
      return ETypeOfService.Package;

    case GetETypeOfService.Specialty:
      return ETypeOfService.Specialty;

    default:
      return ETypeOfService.Doctor;
  }
};
