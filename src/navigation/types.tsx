import { StackScreenProps } from "@react-navigation/stack";

export type HomeStackParamList = {
  Home: undefined;
  Bar: undefined;
  BarDetails: { barId: string };
  // Feed: { sort: "latest" | "top" } | undefined;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  StackScreenProps<HomeStackParamList, T>;
