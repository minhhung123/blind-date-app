import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  PhoneNumber: undefined;
  VerifyPhoneNumber: { verificationId: string } | undefined;
};

export type AppStackParamList = {
  Root: undefined;
  ProfileEditMain: undefined;
  ProfileEditPrompt: undefined;
  ChatMessages: undefined;
}


export type AppNavigationProp = NativeStackNavigationProp<AppStackParamList>

export type ProfileStackParamList = {
  ProfileDetail: undefined;
  Gender: undefined;
  Passion: undefined;
  IdealPlace: undefined;
  EnableNoti: undefined;
  Prompt: undefined;
  PromptList: undefined;
  PromptDetail: undefined;
}

export type RootScreenTabParamList = {
  Home: undefined;
  Match: undefined;
  Chat: undefined;
  Profile: undefined;
}