import { EDayOfWeed, EGender } from "@/graphql/webbooking-service.generated";
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
