import { EGender } from "@/graphql/webbooking-service.generated";

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
