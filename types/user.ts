export type UserCredentials = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  name: string;
  photo_url: string;
} & UserCredentials;
