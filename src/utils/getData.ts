import { GetEAcademicTitle, GetEDegree } from "@/assets/contains/emun";
import {
  EDayOfWeed,
  EGender,
  Schedule,
} from "@/graphql/webbooking-service.generated";
import { store } from "@/redux/store/store";

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
        return "Bác sỉ";
      case GetEDegree.DoctorS1:
        return "Bác sỉ chuyên khoa I";
      case GetEDegree.DoctorS2:
        return "Bác sỉ chuyên khoa II";
      case GetEDegree.Doctorate:
        return "Tiến sỉ bác sỉ";
      case GetEDegree.MasterDoctor:
        return "Thạch sỉ bác sỉ";

      default:
        return "Bác sỉ";
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
